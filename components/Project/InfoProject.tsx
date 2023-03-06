interface InfoProject {
    id: number,
    title: string,
    views: number,
    headline: string,
    languanges: string[],
    slug: string
}

const InfoProject = (props: InfoProject) => {
  return (
    <>
        <h3 className="text-text-primary text-lg font-bold">
            {props.title}
        </h3>
        <p>{props.headline}</p>
        <div className="flex gap-2 flex-wrap mt-2 mb-1">
            {props.languanges.map((languange: any) => {
                return (
                    <div key={languange} className="bg-bg-third text-text-primary px-4 py-2 text-xs rounded-md">
                        {languange}
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default InfoProject