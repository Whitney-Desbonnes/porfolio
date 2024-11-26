import styled from "styled-components"
import { IoHomeOutline } from "react-icons/io5";
import { CiMemoPad } from "react-icons/ci";
import { MdBusinessCenter } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";




export default function Navbar() {
    // state (état, données)
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {id: 1, name: "Accueil", icon: <IoHomeOutline />, path:"/"},
        {id: 2, name: "À propos", icon: <CiMemoPad />, path:"/about"},
        {id: 3, name: "Projets", icon: <MdBusinessCenter />, path:"/work"},
        {id: 4, name: "Contact", icon: <TiContacts />, path:"/contact"},
    ]

    // comportements
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
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    padding: 20px 0;
    background-color: var(--bgc);
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    box-shadow: 0px 0px 4px 0px #00000040;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    li {
        flex: 1;

        li:hover a {
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
        padding: 10px;
        background-color: var(--bgc-links);
        border-radius: 10px;
        border: 1px solid var(--bgc-links);
        font-size: 16px;
        font-family: var(--font-primary);
    }

    button {
        display: none !important;
        cursor: pointer;
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
        flex-direction: column;
        align-items: center;
        max-width: 130px;
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
            transform: translate(0%, 75px);
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