"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import LoadingModal from "@/components/LoadingModal";
import NFTContract from "@/contracts/NFT.json" assert { type: "json" };

function Mint() {
  const { address, isConnected } = useAccount();
  const router = useRouter();

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: NFTContract.abi,
    functionName: "mint",
    args: ["1"],
  });
  const { data, write } = useContractWrite(config as any);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleMintClick = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet.");
      return;
    }

    if (!address) {
      toast.error("Please connect your wallet.");
      return;
    }

    if (!write) {
      toast.error(
        "Something went wrong. Check to make sure you're connected and on the right network."
      );
      return;
    }

    write();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("NFT Minted!");
      setTimeout(() => {
        router.push("/collection");
      }, 2000);
    }
  }, [isSuccess, router]);

  return (
    <>
      {isLoading && <LoadingModal message="Wait while your NFT is minted..." />}
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-3/4 sm:w-1/2 lg:w-1/3">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Mint
          </h1>
          <p className="text-xl font-bold text-gray-900 mb-4">
            Mint your NFTs here.
          </p>
          <p className="text-xl font-bold text-gray-900 mb-4">Price: FREE!</p>
          <button
            onClick={() => handleMintClick()}
            className="w-full bg-gradient-to-tr from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 py-2 px-2 text-xl font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          >
            MINT
          </button>
        </div>
      </div>
    </>
  );
}

export default Mint;
