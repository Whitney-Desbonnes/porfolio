import styled from "styled-components"
import { IoHomeOutline } from "react-icons/io5";
import { CiMemoPad } from "react-icons/ci";
import { MdBusinessCenter } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";



export default function Navbar() {
    // state (état, données)
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
      }, [isDarkMode]);

    const menuItems = [
        {id: 1, name: "À propos", icon: <CiMemoPad />, path:"/"},
        {id: 2, name: "Projets", icon: <MdBusinessCenter />, path:"/work"},
        {id: 3, name: "Contact", icon: <TiContacts />, path:"/contact"},
    ]

    // comportements
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // render / rendu
    return(
        <NavbarStyled>
            <button onClick={toggleMenu}>
                <IoIosMenu /> 
                <span>Menu</span>
            </button>
            <ul className={isMenuOpen ? "open" : ""}>
                {menuItems.map(menuItem => (
                    <li key={menuItem.id}>
                        <Link to={menuItem.path} className={location.pathname === menuItem.path ? "active" : ""} onClick={closeMenu}>
                            {menuItem.icon}
                            {menuItem.name}
                       </Link>
                    </li>
                ))}
            </ul>
            <IconThemeStyled>
                {isDarkMode ? 
                    (
                        <>
                            <MdOutlineWbSunny onClick={toggleTheme} />
                        </>

                    ) 
                    : 
                    (
                        <>
                            <IoMoonOutline onClick={toggleTheme} /> 
                        </>
                    )
                }
            </IconThemeStyled>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    padding: 20px 0;
    background-color: var(--bgc);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    box-shadow: 0px 0px 4px 0px #00000040;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex: 1;
    }

    li {
        flex: 1;

        &:hover a:not(.active) {
            background-color: var(--secondary-text);
            color: var(--color-links);
            border: 1px solid var(--color-links);
        }
    }

    a, button {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        padding: 5px;
        background-color: var(--bgc-links);
        border-radius: 10px;
        border: 1px solid var(--bgc-links);
        font-size: 16px;
        font-family: var(--font-primary);
    }

    button {
        display: none !important;
        cursor: pointer;
        color: var(--primary-text);
    }

    a.active  {
        background-color: var(--color-links);
        color: var(--secondary-text);
    }

    @media screen and (max-width:990px) {
        max-width: 100%;
    }

    @media screen and (max-width:680px) {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 150px;
        position: relative;

        button {
            display: flex !important;
        }

        ul {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease;
            position: absolute;
            top: 0;
            width: 100vw;
            background-color: #fff;
            transform: translate(-26%, 75px);
            flex-direction: column;
            gap: 10px;
        }

        ul.open {
            max-height: 300px;
        }

        li {
            width: 100%;
        }
    }

    

`

const IconThemeStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;

    svg {
        color: var(--theme-color-icon);
        cursor: pointer;
        font-size: 20px;
        padding: 10px;
        background-color: var(--bgc-links);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        height: 40px;
        width: 40px;
    }
`