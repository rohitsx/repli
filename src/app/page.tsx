import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center text-center">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}
