import { BannerMain, OurFacts, Outstanding, Roadmap, Services } from "./components/home";

export default function Home() {
  return (
    <main className="">
      <BannerMain />
      <Services />
      <OurFacts />
      <Roadmap/>
      <Outstanding/>
    </main>
  );
}
