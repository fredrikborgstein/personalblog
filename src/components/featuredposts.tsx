import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BlogCard from "./blogcard";
import useScreenSize from "./useScreenSize";
import { Separator } from "@/components/ui/separator";

export default function FeaturedPosts() {
  const screenSize = useScreenSize();
  const isMobile = screenSize <= 400;
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

  const blogCardStyles: React.CSSProperties = {
    maxWidth: isMobile ? "320px" : "800px",
    minWidth: isMobile ? "320px" : "350px",
    maxHeight: "600px",
    minHeight: "350px",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
    backgroundColor: "white",
    transition: "all 0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <h2 className="text-3xl font-bold my-7">Featured Blog Posts</h2>
      </div>
      <Separator className="my-4" style={{ maxWidth: "1650px" }} />
      <div style={blogCardStyles}>
        <Carousel
          style={{ width: "100%", height: "100%" }}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselContent>
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <BlogCard
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  image={post.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext>Next</CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
