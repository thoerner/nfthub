import Link from "next/link";
import Image from "next/image";
import Art01 from "@/assets/art_01.png";
import Art03 from "@/assets/art_03.png";
import Circle01 from "@/assets/circle-01.svg";
import Circle02 from "@/assets/circle-02.svg";
import Star01 from "@/assets/star-01.svg";
import Star02 from "@/assets/star-02.svg";
import Star03 from "@/assets/star-03.svg";
import SquareRound from "@/assets/square-round.svg";
import { BsArrowUpRight } from "react-icons/bs";

const SectionOne = () => {
  return (
    <section className="flex w-full max-w-5xl justify-between md:translate-y-[150px] mb-24 md:mb-[200px]">
      {/* Left */}
      <div className="flex flex-col space-y-8">
        <div className="text-left">
          <h1 className="text-5xl font-bold leading-tight">
            High Quality NFT Collection
          </h1>
          <p className="text-xl mt-4 mr-4">
            A 890 piece custom Nerk&apos;o&apos;s collection is joining the NFT
            space on Opensea.
          </p>
        </div>

        <Link href="/mint">
          <button className="w-32 bg-gradient-to-tr from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 py-2 px-2 text-xl font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-transform transform hover:scale-105">
            MINT <BsArrowUpRight className="inline-block" size={16} />
          </button>
        </Link>

        <div className="flex flex-col text-lg font-bold">
          47k+ <span className="font-normal text-sm">Community members</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex space-x-4 translate-y-[-150px]">
        <div className="flex flex-wrap justify-center items-center p-4">
          {/* SVGs around NFT 1 */}
          <Image
            src={Circle01}
            alt="Circle 1"
            width={30}
            height={30}
            className="ml-auto"
          />

          {/* NFT 1 Image */}
          <div className="relative w-60 h-60 z-10">
            <Image
              src={Art01}
              alt="NFT 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-lg"
            />
          </div>

          <Image
            src={Circle02}
            alt="Circle 2"
            width={30}
            height={30}
            className="mr-auto translate-y-[50px]"
          />
          <Image
            src={Star02}
            alt="Star 2"
            width={55}
            height={55}
            className="mr-auto"
          />
          <Image
            src={SquareRound}
            alt="Square Round"
            width={55}
            height={55}
            className="mt-auto translate-y-[100px] translate-x-[-50px]"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center p-4">
          {/* SVGs around NFT 2 */}
          <Image
            src={Star01}
            alt="Star 1"
            width={55}
            height={55}
            className="ml-auto translate-y-[150px] translate-x-[-75px]"
          />
          <Image
            src={Star03}
            alt="Star 3"
            width={55}
            height={55}
            className="ml-auto translate-y-[50px] translate-x-[-100px]"
          />

          {/* NFT 2 Image */}
          <div className="relative w-60 h-60 z-10 translate-y-[200px] translate-x-[-50px]">
            <Image
              src={Art03}
              alt="NFT 3"
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
