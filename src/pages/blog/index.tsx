import Head from "next/head";
import Link from "next/link";
import { BlogLink } from "@/Components/BlogLink/BlogLink";
import { blogData } from "@/blogContent/data";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Aarush Tanwar - Blog</title>
        <meta
          name="description"
          content="Full Stack Developer, Designer Portfolio - Aarush Tanwar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-36 min-h-screen">
        <span className="uppercase cursor-default font-black text-9xl md:text-[200px] lg:text-[300px] m-auto text-gray-100 text-center flex justify-center items-center">
          blog
        </span>

        <div className="uppercase flex flex-col sm:flex-row max-w-5xl m-auto gap-6 px-4 py-16">
          <span className="w-1/3 text-xl font-extralight">
            Thoughts / Opinions
          </span>
          <div className="flex flex-col text-5xl md:text-7xl">
            <div>
              <span className="font-bold">blog</span>
              <span className="font-extralight"> - </span>
            </div>
            <span className="font-extralight">sometimes i write something</span>
          </div>
        </div>

        <div className="flex flex-col max-w-5xl m-auto gap-6 px-4 py-16">
          {/* {blogData.map(({ title, description, date, slug }) => (
            <Link href={`/blog/${slug}`} key={slug}>
              <BlogLink title={title} description={description} date={date} />
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Blog;
