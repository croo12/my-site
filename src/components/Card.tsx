import { Card } from "@/util/types";
import css from "./Card.module.css";

export const CardComponent : React.FC<Card> = ({children, style}) => {

    return (
        <div className={css.card} style={style} >
            {children}
        </div>
    )
}

export default CardComponent;