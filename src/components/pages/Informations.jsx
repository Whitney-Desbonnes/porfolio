import styled from "styled-components"
import SocialMedia from "./SocialMedia"

export default function Informations() {
    // state (état, données)

    // comportements

    // render / rendu
    return (
        <InformationsStyled>
            <div className="poste">
                <h1>
                    Développeur
                    front&nbsp;end
                </h1>
                <p>CDI / CDD / Intérim / Freelance</p>
                <p>Disponibilité selon préavis</p>
            </div>

            <div className="whitney">
                <div className="photo">
                    <img src="images/whitney.png" alt="photo" />
                </div>
                <p className="name">Whitney DESBONNES</p>
            </div>

            <SocialMedia/>

        </InformationsStyled>
    )
}

const InformationsStyled = styled.div`
    .poste {
        margin-bottom: 20px;
        

        h1 {
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 10px;
            color: var(--bold-text);

            span {
                display: block;
            }
        }

        p {
            font-size: 14px;
        }

    }

    .photo {
        display: flex;
        align-items: end;
        justify-content: center;
        img {
            width: 100%;
            max-width: 250px;
        }
    }

    .name {
        background-color: var(--bgc);
        color: var(--primary-text);
        text-align: center;
        padding: 10px 20px;
        margin-bottom: 20px;
        color: var(--bold-text);
        font-weight: 600;
        font-size: 18px;
    }


    @media screen and (max-width:990px) {
        .poste {
            text-align: center;
        }

        .poste, .name {
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width:680px) {
        h1 {
            font-size: 22px;
        }

        .photo {
            img {
                max-width: 150px;
            }
        }

    }

`