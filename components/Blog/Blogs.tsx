import Image from "next/image"
import InfoBlog from "./InfoBlog"

const Blogs = (props: any) => {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {props.blogs.map((blog: any) => {
            return (
                <figure  className="flex flex-col gap-2 mb-4">
                    <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
                        <Image src={blog.image} fill alt="blog" className="object-cover" />
                    </div>
                    <div>
                        <InfoBlog 
                            id={props.id}
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
            )
        })}
    </section>
  )
}

export default Blogs