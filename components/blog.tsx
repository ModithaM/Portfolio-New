"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BlogCard } from "./ui/blog-card";
import {getAllPosts} from "../services/blogposts"

export default function Blog() {
    
    interface Post {
      title: string;
      description: string;
      pubDate: string;
      image: string;
      link: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadAllPosts = async () => {
          try {
            const allPosts = await getAllPosts();
            const transformedPosts = allPosts.map((post: Post) => ({
                ...post,
                image: extractImageSrc(post.description),
                description: extractFirst20Words(post.description),
              }));
            setPosts(transformedPosts);
          } catch (err) {
            console.log(err);
          }
        };
    
        loadAllPosts();
    }, []);

    // Find the <img> inside the <figure> tag
    function extractImageSrc(description: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, "text/html");
        const imgElement = doc.querySelector("figure img");
        return imgElement ? imgElement.getAttribute("src") || "" : "";
    }

    function extractFirst20Words(description: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, "text/html");
      
        const descriptionText = doc.body.textContent || "";
      
        // Split the text into words, take the first 30, and join them back into a string
        return descriptionText.split(/\s+/).slice(0, 30).join(" ");
    }

  return (
    <section id="blog" className="sm:mb-2 scroll-mt-28 pb-24">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {posts.map((post, id) => (
              <div key={id}>
                <BlogCard
                  key={post.title}
                  title={post.title}
                  description={post.description}
                  dates={post.pubDate}
                  image={post.image}
                  links={post.link}
                />
              </div>
            ))}
          </div>
    </section>
  );
}
