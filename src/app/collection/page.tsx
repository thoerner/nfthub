"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { readContract } from "@wagmi/core";
import NFTContract from "../../contracts/NFT.json" assert { type: "json" };
import { images } from "../../lib/images";

const NFTGrid = ({ tokens }: { tokens: number[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {tokens.map((token) => (
        <div
          key={token}
          className="bg-gray-100 border-2 border-gray-200 rounded-lg p-1 md:p-3"
        >
          <div className="text-center">
            <Image src={images[token]} alt="NFT" width={200} />
          </div>
          <div className="text-center mt-2">
            <span className="text-sm sm:text-base md:text-lg text-black font-semibold">
              NFT #{token}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

function Collection() {
  const [tokens, setTokens] = useState<number[]>([]);
  const { address, isConnected } = useAccount();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const getTokens = async () => {
      const data = await readContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: NFTContract.abi,
        functionName: "tokensOfOwner",
        args: [address],
      });

      if (
        Array.isArray(data) &&
        data.every((item) => typeof item._hex === "string" && item._isBigNumber)
      ) {
        const decimalTokens = data.map((tokenObj) =>
          parseInt(tokenObj._hex, 16)
        );
        setTokens(decimalTokens);
      } else {
        console.error("Unexpected data format");
      }
    };
    if (!isConnected) {
      return;
    }
    getTokens();
  }, [isConnected, address]);

  return (
    <div className="flex flex-col w-full justify-center items-center p-5">
      <div className="text-2xl font-semibold text-center">
        {isClient && ( 
          !isConnected ? "Please connect your wallet to view your collection." : (
            <>
              You have {tokens.length} NFTs in your wallet!
              <NFTGrid tokens={tokens} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Collection;
