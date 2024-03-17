import BlogCard from "./blogcard";
import { Separator } from "@/components/ui/separator";

export default function BlogCardGrid() {
  const blogPosts = [
    {
      title: "Top 5 CSS Tips",
      date: "2021-01-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "How to use React",
      date: "2021-02-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Compiling, Bundling and Transpiling",
      date: "2021-05-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}
