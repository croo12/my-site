
import Image from "next/image";
import css from "./Project.module.css"
import { Project } from "@/util/types";
import Link from "next/link";

const Project: React.FC<Project> = ({ image, alt, title, content, feeling, job, repository }) => {
  
  return (
    <>
      <div className={css["project-card"]}>
        <div className={css["project-img"]}>
          <div style={{ width: "100%", height: "100%" }}>
            <Image src={image} alt={alt} fill={true} />
          </div>
          <div className={css["button-box"]}>
            <button><Link href={`https://github.com/croo12/${repository}`} passHref={true}>#README</Link></button>
            <button><Link href={`/portfolio/projects/${title}`}>#자세히보기</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;