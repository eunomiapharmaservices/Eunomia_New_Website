import { ImageResponse } from "next/og";
import { createElement } from "react";
import { SocialCard } from "@/components/SocialCard";
import pages from "@/data/social-pages.json";
import articles from "@/data/article-seo.json";

const titles: Record<string, string> = {
  ...pages,
  ...Object.fromEntries(articles.map(article => [`/resources/articles/${article.slug}`, article.title])),
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(titles).map(path => ({ slug: path === "/" ? ["home"] : path.slice(1).split("/") }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join("/") === "home" ? "/" : `/${slug.join("/")}`;
  const title = titles[path];
  if (!title) return new Response("Not found", { status: 404 });
  return new ImageResponse(createElement(SocialCard, { title, article: path.startsWith("/resources/articles/") }), { width: 1200, height: 627 });
}
