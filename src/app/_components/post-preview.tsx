import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, date, slug }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between p-4 bg-white rounded shadow">
      <div className="flex flex-col text-center md:text-left">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          <h3 className="text-2xl font-bold">{title}</h3>
        </Link>
      </div>
      <div className="text-gray-500">{date}</div>
    </div>
  );
}
