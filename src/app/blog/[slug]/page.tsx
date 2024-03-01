"use client"

import { usePathname } from "next/navigation"
import { blogData } from "@/blogContent/data"

const BlogPost = () => {
  const pathname = usePathname()
  const parts = pathname?.split("/")
  const slug = parts[parts?.length - 1]

  return (
    <>
      <div className="min-h-screen m-auto max-w-4xl mt-48">
        {blogData.map((blog) => {
          if (slug === blog.slug) {
            return (
              <div className="prose m-auto" key={blog.slug}>
                {/* <blog.content /> */}
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default BlogPost
