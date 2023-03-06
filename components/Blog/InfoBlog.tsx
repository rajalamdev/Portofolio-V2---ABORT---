import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LanguageIcon from '@mui/icons-material/Language';

interface InfoBlog {
    id: number,
    title: string,
    read: number,
    views: number,
    date: string,
    headline: string,
    categories: string[],
    slug: string
}

const InfoBlog = (props: InfoBlog) => {
  return (
    <>
        {/* <div className='text-sm flex gap-1 items-center'>
            <LanguageIcon className='text-sm' />
            Indonesia
        </div> */}
        <h3 className="text-text-primary text-lg font-bold mb-2">
            {props.title}
        </h3>
        <div className="flex gap-4 mb-4 font-medium">
            <div className="flex items-center gap-1">
                <AccessTimeIcon className="text-base" />
                <span className="text-text-blue">{props.read} min read</span>
            </div>
            <div className="flex items-center gap-1">
                <VisibilityOutlinedIcon className="text-base" />
                <span className="text-text-blue">{props.views} views</span>
            </div>
        </div>
        <div className="mb-2 text-text-primary font-medium">
            {props.date}
        </div>
        <p>{props.headline}</p>
        <div className="flex gap-2 flex-wrap mt-4">
            {props.categories.map((category: any) => {
                return (
                    <div key={category} className="bg-bg-third text-text-primary px-4 py-2 text-xs rounded-md">
                        {category}
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default InfoBlog