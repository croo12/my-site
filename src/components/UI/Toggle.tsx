"use client"
import css from "./Toggle.module.css"
import { useState } from "react"

const Toggle = ({title, children} : {title : string, children : React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={css.toggle}>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? `▼ ${title}` : `▶ ${title}`}</button>
      {isOpen && (
        <div>
          { children}
        </div>
      )}
    </div>
  )
}

export default Toggle;