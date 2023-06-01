"use client"
import Link from 'next/link';
import { useState } from 'react';
import css from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.sidebar}>
      
      <nav className={`${isOpen ? css.open : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/component">Component</Link></li>
        </ul>
        <button onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
      </button>
      </nav>
    </div>
  );
};

export default Sidebar;
