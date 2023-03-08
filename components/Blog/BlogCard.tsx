import Image from "next/image"
import InfoBlog from "./InfoBlog"

const BlogCard = ({featuredItem}: {featuredItem : any}) => {
  return (
    <>
        <section className="my-8">
            <figure className="flex gap-4 flex-wrap">
                <div className="relative w-full md:w-7/12 aspect-[16/9] overflow-hidden rounded-md">
                    <Image 
                        src="https://images.unsplash.com/photo-1676907257273-ace57214b4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzk1NjQzMQ&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Featured Blog"
                        className="object-cover" 
                        fill
                    />
                </div>
                <figcaption className="w-full md:flex-1">
                    <InfoBlog
                        id={featuredItem.id}
                        title={featuredItem.title}
                        read={featuredItem.read}
                        views={featuredItem.views}
                        date={featuredItem.date}
                        headline={featuredItem.headline}
                        categories={featuredItem.categories}
                        slug={featuredItem.slug}
                    />
                </figcaption>
            </figure>
        </section>
    </>
  )
}

export default BlogCard