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
            <HeaderStyled>
                <Navbar/>
            </HeaderStyled>
            <MainStyled>
                <div>
                    <Informations/>

                    <div>
                        <Outlet/>
                    </div>
                </div>
            </MainStyled>
        </>
    )
}

const HeaderStyled = styled.header`
    padding: 20px 20px 0;

    @media screen and (max-width:680px) {
        padding: 10px 10px 0;
    }
`

const MainStyled = styled.main`
    padding: 20px;
    > div {
        display: flex;
        gap: 20px;
    }

    > div > div:first-child {
        width: 30%; 
        background-color: var(--bgc-card);
        border-radius: 10px;
        padding: 20px;
        align-self: baseline;
    }

    > div > div:last-child {
        width: 70%; 
        background-color: var(--bgc-card);
        border-radius: 10px;
        padding: 20px;
    }

    @media screen and (max-width:990px) {
        > div {
            flex-direction: column;
        }

        > div > div {
            width: 100% !important;
        }
    }

    @media screen and (max-width:680px) {
        padding: 10px;
    }
`