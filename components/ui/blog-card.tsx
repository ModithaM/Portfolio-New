import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "./icons";
import {Post} from "@/types";

interface Props {
  post: Post;
  className?: string;
}

export function BlogCard({
  post,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border dark:border-black hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={post.link || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {post.video && (
          <video
            src={post.video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1 text-left">
          <CardTitle className="mt-1 text-base">{post.title}</CardTitle>
          <time className="font-sans text-xs">{post.pubDate}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {post.link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {post.description}
          </Markdown>
        </div>
      </CardHeader>
      <CardFooter className="px-2 pb-2">
        {post.link && post.link.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {<Icons.globe className="size-3" />}
                  {"Read More"}
                </Badge>
              </Link>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
