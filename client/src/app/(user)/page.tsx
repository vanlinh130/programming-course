import { BannerMain, OurFacts, Outstanding, Roadmap, Services, StudentFeedback } from "./components/home";

export default function Home() {
  return (
    <main className="">
      <BannerMain />
      <Services />
      <OurFacts />
      <Roadmap/>
      <Outstanding/>
      <StudentFeedback showReview={true}/>
    </main>
  );
}
