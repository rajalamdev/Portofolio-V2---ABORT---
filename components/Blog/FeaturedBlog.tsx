import Image from "next/image"
import InfoBlog from "./InfoBlog"

const FeaturedBlog = ({topFeaturedBlog}: {topFeaturedBlog : any}) => {
  return (
    <>
        <div className="w-max">
            <h2 className="text-xl font-bold text-text-primary border-b pb-1 border-dashed border-text-pink">Featured Blogs</h2>
        </div>
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
                        id={topFeaturedBlog.id}
                        title={topFeaturedBlog.title}
                        read={topFeaturedBlog.read}
                        views={topFeaturedBlog.views}
                        date={topFeaturedBlog.date}
                        headline={topFeaturedBlog.headline}
                        categories={topFeaturedBlog.categories}
                        slug={topFeaturedBlog.slug}
                    />
                </figcaption>
            </figure>
        </section>
    </>
  )
}

export default FeaturedBlog