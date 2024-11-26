import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import Informations from "./Informations";

export default function Layout() {
    // state (état, données)


    
    // comportements


    // render / rendu
    return(
        <>
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