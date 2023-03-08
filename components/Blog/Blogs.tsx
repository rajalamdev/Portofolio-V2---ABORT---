import Image from "next/image"
import Link from "next/link"
import InfoBlog from "./InfoBlog"

const Blogs = ({blog}: {blog: any}) => {
  return (
    <Link href={`blog/${blog.slug}`}>
        <figure key={blog.id} className="flex flex-col gap-2 mb-4">
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
                <Image src={blog.image} fill alt="blog" className="object-cover" />
            </div>
            <div>
                <InfoBlog 
                    id={blog.id}
                    title={blog.title}
                    read={blog.read}
                    views={blog.views}
                    date={blog.date}
                    headline={blog.headline}
                    categories={blog.categories}
                    slug={blog.slug}
                />
            </div>
        </figure>
    </Link>
  )
}

export default Blogs