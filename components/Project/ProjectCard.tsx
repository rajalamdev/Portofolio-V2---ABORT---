import Image from "next/image"
import Link from "next/link"
import InfoProject from "./InfoProject"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ProjectCard = ({projectItem}: {projectItem: any}) => {
  return (
    <Link href={`/projects/${projectItem.slug}`} className="border group border-[#4B5563] p-4 rounded-md hover:scale-[1.02] transition-all duration-100 active:scale-[.97]">
        <figure key={projectItem.id} className="flex flex-col gap-2">
            <div>
                <InfoProject 
                    id={projectItem.id}
                    title={projectItem.title}
                    views={projectItem.views}
                    headline={projectItem.headline}
                    languanges={projectItem.languanges}
                    slug={projectItem.slug}
                />
            </div>
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
                <Image src={projectItem.image} fill alt="project" className="object-cover" />
            </div>
        </figure>
        <div className="mt-4 mb-2 font-medium w-max text-text-primary relative after:block after:absolute after:w-0 group-hover:after:w-full
         after:h-[2px] after:-bottom-1 after:bg-text-blue after:transition-all after:duration-300 group-hover:translate-x-4 transition-all duration-200">
            See More
            <KeyboardDoubleArrowRightIcon />
        </div>
    </Link>
  )
}

export default ProjectCard