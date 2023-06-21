import css from "./page.module.css";

const ProjectRegister = () => {
  return (
    <div>
      <h1>프로젝트 작성</h1>
      <form className={css.form} action="/api/regist_project" method="POST">
        <input name="image"      placeholder="image"      className={css.input} type="text" />
        <input name="alt"        placeholder="alt"        className={css.input} type="text" />
        <input name="title"      placeholder="title"      className={css.input} type="text" />
        <input name="job"        placeholder="job"        className={css.input} type="text" />
        <textarea name="content"    placeholder="content"    className={css.input} />
        <textarea name="feeling"    placeholder="feeling"    className={css.input} />
        <input name="repository" placeholder="repository" className={css.input} type="text" />
        <input name="position"   placeholder="position"   className={css.input} type="text" />
        <input name="members"    placeholder="members"    className={css.input} type="text" />
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

export default ProjectRegister;