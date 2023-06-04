import { Feed } from "@/util/types"
import css from "./Feed.module.css";

const Feed : React.FC<Feed> = ({title, description, date}) => {
  return (
    <div className={css["feed-item"]} >
      <div className={css["feed-badge"]}>{title[0]}</div>
      <div className={css["feed-content"]} >
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Feed;