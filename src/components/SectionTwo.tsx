import Link from "next/link";
import Image from "next/image";
import Vector from "@/assets/Vector.svg";
import Wallets from "@/assets/wallets.png";
import Heading2 from "@/assets/Heading_2.png";
import Collection from "@/assets/collection.png";
import { BsArrowUpRight } from "react-icons/bs";

const SectionOne = () => {
  return (
    <section className="flex flex-col w-full max-w-5xl justify-center items-center">
      <Image src={Wallets} alt="logo" className="w-full mr-2" />
      <div className="mt-24"></div>
      <Image src={Vector} alt="logo" className="w-28 mr-2" />
      <div className="mt-24"></div>
      <Image src={Heading2} alt="logo" className="w-full mr-2" />
      <div className="mt-16"></div>
      <Image src={Collection} alt="logo" className="w-full mr-2" />
      <div className="mt-16"></div>
      <Link href="/collection">
        <button className="w-64 bg-gradient-to-tr from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 py-2 px-2 text-xl font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-transform transform hover:scale-105">
          View Collection <BsArrowUpRight className="inline-block" size={16} />
        </button>
      </Link>
      <div className="mt-24"></div>
      <Image src={Vector} alt="logo" className="w-28 mr-2" />
    </section>
  );
};

export default SectionOne;
