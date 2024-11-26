import styled from "styled-components"
import SocialMedia from "./SocialMedia"

export default function Informations() {
    // state (état, données)

    // comportements

    // render / rendu
    return (
        <InformationsStyled>
            <div className="entete">
                <h1>
                    <span>Développeur</span>
                    <span> front end</span>
                </h1>
                <p>CDI / CDD / Intérim / Freelance</p>
                <p>Disponibilité selon préavis</p>
            </div>

            <div className="img">
                <img src="public/whitney.png" alt="photo" />
            </div>
            <p className="name">Whitney DESBONNES</p>

            <SocialMedia/>

        </InformationsStyled>
    )
}

const InformationsStyled = styled.div`
    .entete {
        margin-bottom: 20px;

        h1 {
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 10px;

            span {
                display: block;
            }
        }

        p {
            font-size: 14px;
        }

    }

    .img {
        display: flex;
        align-items: end;
        img {
            width: 100%;
        }
    }

    .name {
        background-color: var(--bgc);
        color: var(--primary-text);
        text-align: center;
        padding: 10px 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width:990px) {
        display: grid;
        grid-template-columns: 150px auto;

        .entete {
            grid-column: 1 / span 2;
            grid-row: 1;
            margin-left: 10px;
            text-align: center;

            h1 {

                span {
                    display: inline !important;
                }
            }
        }

        .img {
            align-items: start;
            grid-column: 1;
            grid-row: 1;
        
            img {
                max-width: 150px;
            }
        }

        .name, ul {
            grid-column: span 2;
        }
    }

    @media screen and (max-width:780px) {
        h1 {
            font-size: 20px;
        }
    }

    @media screen and (max-width:680px) {
        .entete {
            grid-row: 1;
            margin-left: 0;

            h1 {

                span {
                    display: inline !important;
                }
            }
        }

        .img {
            grid-row: 2;
            grid-column: 1 / span 2;
            justify-content: center;
        }

    }

`