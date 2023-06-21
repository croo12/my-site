import CardComponent from "@/components/UI/Card";
import { connectDB } from "@/util/database";
import css from "./page.module.css";
import Image from "next/image";

const ProjectDetail = async ({ params }: { params: { title: string } }) => {

  const data = await getData(decodeURIComponent(params.title));

  return (
    <CardComponent>
      <div className={css["project-container"]}>
        <h1>{data.title}</h1>
        <p>{data.job}</p>

        <div className={css["project-header"]}>
          <div>
            <div className={css["content-box"]}>
              <p>{data.content}</p>
              <p>{data.feeling}</p>
              <p>{data.repository}</p>
            </div>
          </div>
          <div>
            <div className={css["image-box"]}>
              <Image src={data.image} alt={data.alt} width={900} height={600} layout="responsive" />
            </div>
            <div>
              요약
            </div>
          </div>
        </div>

      </div>
    </CardComponent>
  )
}

export default ProjectDetail;

export const getData = async (title: string) => {
  let projects: any;
  try {
    const db = (await connectDB)?.db("my-page");
    let res = await db?.collection("projects").findOne({ title });

    projects = res;
  } catch (e) {
    console.log(e);
  }

  return projects
};