import { useEffect, useState } from "react";
import '../Scroll_Arrow/ScrollToTop.css'
import arrow from "../assets/arrow.svg"
export default function ScrollToTop() {
 

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <button className="scroll-top-btn" onClick={scrollTop}>
     <img  src={arrow}/>
    </button>
  );
}
