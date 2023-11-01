import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-100vh items-center justify-center p-8 bg-black text-white overflow-x-hidden">
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
