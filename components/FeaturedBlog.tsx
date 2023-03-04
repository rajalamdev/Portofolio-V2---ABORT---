import Image from "next/image"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FeaturedBlog = () => {
  return (
    <>
        <div className="flex gap-2 items-center mb-4">
            <div className="bg-text-blue h-2 w-2 rounded-full"></div>
            <div className="bg-text-pink h-2 w-2 rounded-full"></div>
            <h2 className="text-2xl font-bold text-text-primary">Featured Blog</h2>
        </div>
        <figure className="flex gap-4">
            <div className="relative w-7/12 aspect-[16/9]">
                <Image 
                    src="https://images.unsplash.com/photo-1676907257273-ace57214b4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzk1NjQzMQ&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Featured Blog"
                    className="object-cover rounded-xl" 
                    fill
                />
            </div>
            <div className="w-5/12">
                <h3 className="text-text-primary text-lg font-bold mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam.</h3>
                <div className="flex gap-4 mb-4 font-medium">
                    <div className="text-text-blue flex items-center gap-1">
                        <AccessTimeIcon className="text-base" />
                        <span>5 min read</span>
                    </div>
                    <div className="text-text-blue flex items-center gap-1">
                        <AccessTimeIcon className="text-base" />
                        <span>602 views</span>
                    </div>
                </div>
                <div className="mb-2 text-text-primary font-medium">
                    January 12, 2000
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, corporis totam saepe dignissimos rerum quo recusandae sunt omnis quam rem.</p>
                 <div className="flex gap-2 flex-wrap mt-4">
                    <div className="bg-[#232842] text-[#eee] px-4 py-2 text-xs rounded-md">programming</div>
                </div>
            </div>
        </figure>
    </>
  )
}

export default FeaturedBlog