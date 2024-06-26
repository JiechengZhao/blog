import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import type { Metadata } from "next";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.poption.org"),
  title: `Hydrogenbear's Fantasy Logbook`,
  description: `Journeys in Creativity: Exploring New Ideas in Technology and Fantasy`,
  openGraph: {
    title: `Hydrogenbear's Fantasy Logbook`,
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function Index() {
  const allPosts = getAllPosts();
  return (
    <main>
      <Container>
        <Intro />
        <MoreStories posts={allPosts} />
      </Container>
    </main>
  );
}
