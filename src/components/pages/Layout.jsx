import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import Informations from "./Informations";

export default function Layout() {
    // state (état, données)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
      }, [isDarkMode]);
    
    // comportements
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // render / rendu
    return(
        <>
            <IconThemeStyled>
                {isDarkMode ? 
                    (
                        <>
                            <span>Mode sombre activé</span>
                            <MdOutlineWbSunny onClick={toggleTheme} />
                        </>

                    ) 
                    : 
                    (
                        <>
                            <span>Mode clair activé</span>
                            <IoMoonOutline onClick={toggleTheme} /> 
                        </>
                    )
                }
            </IconThemeStyled>


            <Navbar/>

            <MainStyled>
                <Informations/>

                <div>
                    <Outlet/>
                </div>
            </MainStyled>
        </>
    )
}

const MainStyled = styled.div`
    display: flex;
    gap: 20px;

    > div:first-child {
        width: 30%; 
        background-color: var(--bgc-card);
        border-radius: 10px;
        padding: 20px;
    }

    > div:last-child {
        width: 70%; 
        background-color: var(--bgc-card);
        border-radius: 10px;
        padding: 20px;
    }

    @media screen and (max-width:990px) {
        flex-direction: column;

        > div {
            width: 100% !important;
        }
    }
`

const IconThemeStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    margin-bottom: 10px;

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