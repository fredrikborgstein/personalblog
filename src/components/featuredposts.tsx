import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

export default function FeaturedPosts() {
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
    <div
      id="featured-section"
      className="lg:mx-96 flex align-middle items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 transition-all p-10 rounded-md shadow-2xl mt-10"
    >
      <div id="featured-title" className="text-3xl font-bold">
        Featured Blog Posts
      </div>
      <div
        id="featured-carousel"
        className="flex justify-center w-3/12 lg:w-6/12 mx-auto mt-5 mb-5"
      >
        <Carousel className="flex justify-center">
          <CarouselPrevious />
          <CarouselContent>
            {blogPosts.map((post, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col justify-center align-middle text-center border-solid border-2 border-black p-4 rounded-md shadow-2xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-all">
                  <div id="blog-card-content">
                    <div id="blog-card-title" className="text-xl font-bold">
                      {post.title}
                    </div>
                    <div id="blog-card-date" className="text-sm mb-5">
                      Published on {post.date}
                    </div>
                    <div
                      id="image-container"
                      className="flex items-center justify-center mb-5 pb-5 w-full h-64 overflow-hidden rounded-md shadow-md bg-gray-100 dark:bg-gray-700 transition-all"
                    >
                      <div className="lg:max-w-full lg:max-h-full">
                        <img
                          src={post.image}
                          alt="blog post image"
                          className="object-cover rounded-md shadow-md"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div id="blog-card-description" className="text-sm">
                      {post.description}
                    </div>
                  </div>
                  <Button className="mt-10">Read More</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
