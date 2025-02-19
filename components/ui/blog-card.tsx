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

interface Props {
  title: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: string ;
  className?: string;
}

export function BlogCard({
  title,
  description,
  dates,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border dark:border-black hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={links || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1 text-left">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
              <Link href={links} target="_blank">
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
