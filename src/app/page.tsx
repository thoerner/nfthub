import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8 md:mt-32 bg-black text-white">
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
