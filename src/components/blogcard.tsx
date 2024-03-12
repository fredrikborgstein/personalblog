import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export default function BlogCard({
  title,
  date,
  description,
  image,
}: BlogCardProps) {
  return (
    <div
      style={{ maxWidth: "450px" }}
      className="border-solid border-2 border-black p-4 rounded-md shadow-2xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-all"
    >
      <Card>
        <CardHeader>
          <CardTitle className="">{title}</CardTitle>
          <CardDescription>Published on {date}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            id="image-container"
            style={{ maxWidth: "350px", maxHeight: "180px" }}
            className="mb-5 pb-5 w-full h-full overflow-hidden rounded-md shadow-md bg-gray-100 dark:bg-gray-700 transition-all"
          >
            <img
              src={image}
              alt="blog post image"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
          <p>{description}</p>
        </CardContent>
        <CardFooter
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant={"default"}>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
