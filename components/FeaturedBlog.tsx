import Image from "next/image"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FeaturedBlog = () => {
  return (
    <>
        <div className="w-max mb-4">
            <h2 className="text-xl font-bold text-text-primary border-b pb-1 border-dashed border-text-pink">Featured Blogs</h2>
        </div>
        <figure className="flex gap-4 flex-wrap">
            <div className="relative w-full md:w-7/12 aspect-[16/9]">
                <Image 
                    src="https://images.unsplash.com/photo-1676907257273-ace57214b4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzk1NjQzMQ&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Featured Blog"
                    className="object-cover rounded-xl" 
                    fill
                />
            </div>
            <div className="w-full md:flex-1">
                <div className="flex gap-2 flex-wrap mb-2">
                    <div className="bg-bg-third text-text-primary px-4 py-2 text-xs rounded-md">programming</div>
                </div>
                <h3 className="text-text-primary text-lg font-bold mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam.</h3>
                <div className="flex gap-4 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                        <AccessTimeIcon className="text-base" />
                        <span className="text-text-blue">5 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <AccessTimeIcon className="text-base" />
                        <span className="text-text-blue">602 views</span>
                    </div>
                </div>
                <div className="mb-2 text-text-primary font-medium">
                    January 12, 2000
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, corporis totam saepe dignissimos rerum quo recusandae sunt omnis quam rem.</p>
            </div>
        </figure>
    </>
  )
}

export default FeaturedBlog