import styled from "styled-components"
import { IoHomeOutline } from "react-icons/io5";
import { CiMemoPad } from "react-icons/ci";
import { MdBusinessCenter } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";




export default function Navbar() {
    // state (état, données)
    const location = useLocation();

    const menuItems = [
        {id: 1, name: "Accueil", icon: <IoHomeOutline />, path:"/"},
        {id: 2, name: "À propos", icon: <CiMemoPad />, path:"/about"},
        {id: 3, name: "Projets", icon: <MdBusinessCenter />, path:"/work"},
        {id: 4, name: "Contact", icon: <TiContacts />, path:"/contact"},
    ]

    // comportements

    // render / rendu
    return(
        <NavbarStyled>
            <ul>
                {menuItems.map(menuItem => (
                    <li key={menuItem.id}>
                        <Link to={menuItem.path} className={location.pathname === menuItem.path ? "active" : ""}>
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
    max-width: 600px;
    margin-left: auto;
    box-shadow: 0px 0px 4px 0px #00000040;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;

        li {
            flex: 1;

            a {
                display: flex;
                justify-content: center;
                gap: 10px;
                align-items: center;
                padding: 10px;
                background-color: var(--bgc-links);
                border-radius: 10px;
            }

            a.active  {
                background-color: var(--color-links);
                color: var(--secondary-text);
            }
        }

        li:hover a {
            background-color: var(--secondary-text);
            color: var(--color-links);
        }
    }
`