"use client"
import { useState } from 'react';
import css from "./Sidebar.module.css";
import LinkButton from './LinkButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      url:"/", title:'Blog'
    },
    {
      url:"/portfolio", title:'Portfolio'
    },
    {
      url:"/component", title:'Component'
    },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
//background-effect
  return (
    <div className={`${css.sidebar}`}>
      <nav className={`${isOpen ? css.open : ''}`}>
        <div className={css["logo-box"]}>
          <h1>펭귄 코딩 연합</h1>
        </div>
        <ul>
          {data.map((el, idx) => <li key={idx}><LinkButton {...el} /></li>) }
        </ul>
        <button onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
      </button>
      </nav>
    </div>
  );
};

export default Sidebar;
