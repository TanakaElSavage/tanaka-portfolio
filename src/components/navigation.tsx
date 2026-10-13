"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav-row">
    <a href="#home" className="brand" aria-label="TPD Digital Solutions home"><Image src="/brand/tpd-logo.png" width={66} height={44} alt="" /><span>TPD<span className="brand-sub">DIGITAL SOLUTIONS</span></span></a>
    <button className="menu-button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="site-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={e => {if(e.key === "Escape") setOpen(false);}}>
      {[["Services","services"],["Our work","projects"],["Our approach","process"],["About","about"]].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a>
    </nav>
  </div></header>;
}
