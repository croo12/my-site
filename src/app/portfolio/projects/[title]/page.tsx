
const ProjectDetail = ({params} : {params : {title : string}}) => {

  const line = decodeURIComponent(params.title);

  return (
    <div>
      {line}
    </div>
  )
}

export default ProjectDetail;