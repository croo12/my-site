import css from "./P.module.css";

const P = ({content} : {content : string}) => {
  return (
    <p className={css[`p-tag`]}>{content}</p>
  )
}

export default P;