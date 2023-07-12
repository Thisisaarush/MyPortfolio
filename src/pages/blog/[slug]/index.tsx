import Head from "next/head";
import { useRouter } from "next/router";
import { blogData } from "@/blogContent/data";

const BlogPost = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Head>
        <title>AT - BlogPost / {slug}</title>
      </Head>

      <div className="min-h-screen m-auto max-w-4xl mt-48">
        {blogData.map((blog) => {
          if (slug === blog.slug) {
            return (
              <div className="prose m-auto">
                <blog.content />
              </div>
            );
          } else {
            return (
              <div className="flex justify-center items-center py-60">
                404 | Page Not Found, Please Check URL.
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default BlogPost;
