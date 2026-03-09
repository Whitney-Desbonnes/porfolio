import styled from "styled-components";

export default function About() {
    // state (état, données)

    // comportements

    // render / rendu
    return (
        <AboutStyled>
            <h2>À propos de moi</h2>
            
            <p>
                Je suis <span>intégratrice web</span> avec plus de 4 ans d'expérience dans l'intégration d'interfaces web et le développement de fonctionnalités interactives en HTML, CSS et JavaScript.
            </p>

            <p>
                J’ai débuté ma carrière en mars 2022 chez <a href="https://fr.linkedin.com/company/publications-agora-france" target="_blank">Publications&nbsp;Agora</a>, où j’ai travaillé sur le développement de landing pages et l’intégration de campagnes emailing.
            </p>

            <p>
                Aujourd’hui, je suis intégratrice Web chez <a href="https://fr.linkedin.com/company/santoredition" target="_blank">Santor&nbsp;Édition</a>, où j’intègre des interfaces web à partir de maquettes et participe au développement de fonctionnalités interactives en JavaScript.
            </p>

            <p>
                Je recherche aujourd’hui un poste de <span>développeur front-end</span>, idéalement dans une entreprise travaillant avec React, afin de mettre en pratique les compétences que j’ai développées en autodidacte et de continuer à progresser sur des projets web plus ambitieux.
            </p>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
    h2 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
    }

    a {
        background-color: var(--bgc-card);
        border: 1px solid var(--color-links);
        padding: 0 10px;
        border-radius: 10px;
    }

    a:hover {
        background-color: var(--color-links);
        border: 1px solid var(--bgc-card);
        color: var(--secondary-text);
    }

    span {
        font-weight: 600;
        color: var(--color-links);
    }

`