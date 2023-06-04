import { LinkButton } from "@/util/types";
import Link from "next/link"
import css from "./LinkButton.module.css";

const LinkButton: React.FC<LinkButton> = ({url, title, passHref= false}) => {
  const dark = true;


  return (
    <Link
      passHref={passHref}
      href={url}
      
    >
      <h2 className={css["link-button"]}>
        {title}
      </h2>
    </Link>
  )
}

export default LinkButton;