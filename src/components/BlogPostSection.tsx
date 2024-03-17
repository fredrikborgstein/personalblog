import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function BlogPostSection() {
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
      title: "How to use TypeScript",
      date: "2021-03-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://plus.unsplash.com/premium_photo-1661414473396-4600573d1f33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Benefits of using Tailwind CSS",
      date: "2021-04-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="mt-24 2xl:mx-96 md:mx-60 sm:mx-40 mx-3 flex flex-col justify-center">
      <div id="blog-section-title" className="text-center my-8">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
      </div>
      <div id="blog-section-seperator">
        {" "}
        <Separator />
      </div>
      <div id="blog-section-content">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:gap-16 p-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h2 className="text-xl 2xl:text-2xl font-bold my-3">
                {post.title}
              </h2>
              <img
                src={post.image}
                alt="blog-post"
                className="rounded-md shadow-md"
              />
              <p className="text-center my-3">
                {post.description.length <= 123
                  ? post.description
                  : post.description.slice(0, 124)}
              </p>
              <Button variant={"default"}>Read More</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPostSection;
