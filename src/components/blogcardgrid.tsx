import BlogCard from "./blogcard";
import { Separator } from "@/components/ui/separator";
import client from "../client";
import { useState, useEffect } from "react";

export default function BlogCardGrid() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blogpost"] | order(datePublished desc) {
      title,
      datePublished,
      image,
      content,
    }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  console.log(blogPosts);

  const imageForTest =
    "https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      id="featured-section"
      className="lg:mx-96 flex align-middle items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 transition-all p-10 rounded-md shadow-2xl mt-10"
    >
      <div id="featured-title" className="text-3xl font-bold">
        Recent Blog Posts
      </div>
      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4  ">
        {blogPosts &&
          blogPosts.map((blogPost, index) => (
            <BlogCard
              key={index}
              title={blogPost.title}
              date={blogPost.datePublished}
              description={blogPost.content[index].children[index].text}
              image={imageForTest}
            />
          ))}
      </div>
    </div>
  );
}
