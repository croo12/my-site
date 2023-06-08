
import Image from "next/image";
import css from "./Project.module.css"
import { Project } from "@/util/types";
import Link from "next/link";

const Project: React.FC<Project> = ({ image, alt, title, content, feeling, job, repository, position, members }) => {
  
  return (
    <>
      <div className={css["project-card"]}>
        <h1>{title}</h1>
        <h4>{content.split("\n")[0]}</h4>
        <div className={css["project-img"]}>
          <div style={{ width: "100%", height: "100%" }}>
            <Image src={image} alt={alt} fill={true} />
          </div>
          <div className={css["button-box"]}>
            <Link href={`https://github.com/croo12/${repository}`} passHref={true}><button>#GitHub</button></Link>
            <Link href={`/portfolio/projects/${title}`}><button>#자세히보기</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;