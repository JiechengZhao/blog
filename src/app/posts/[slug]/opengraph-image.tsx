import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import { notFound } from "next/navigation";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  // Font
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 80,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{post.title}</p>
        <p style={{fontSize:40}}>{post.excerpt}</p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
