/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Navbar = () => {
    const navbarRef = useRef();
    const navbarHandler = () => {
        navbarRef.current.classList.toggle('active');
    }
  return (
    <>
        <header className='header'>
            <a href="#" className='logo'>A-Line</a>
            <nav className='navbar' ref={navbarRef}>
                <a href="#home">A</a>
                <a href="#mustang">B</a>
                <a href="#458">C</a>
                <a href="#murcielago">D</a>
                <a href="#cgt">E</a>
                <a href="#r34">F</a>
                <a href="#f40">G</a>
                <a href="#r8">H</a>
                <a href="#supra">I</a>
                <a href="#r35">J</a>
                <a href="#ae86">K</a>
                <a href="#carrera">L</a>
                <a href="#db11">M</a>
            </nav>
            <div className='icons'>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
            </div>

        </header>
    </>
  )
}

export default Navbar;