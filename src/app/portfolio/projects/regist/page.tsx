import { connectDB } from "@/util/database";


const ProjectRegister = () => {
  return (
    <div>
      <form>
        어떻게 해야 가능합니까? 이것을 등록하는것이?
      </form>
    </div>
  )
}

export default ProjectRegister;

export const postData = async (title: string) => {
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