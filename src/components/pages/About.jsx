import styled from "styled-components";

export default function About() {
    // state (état, données)

    // comportements

    // render / rendu
    return (
        <AboutStyled>
            <h2>À propos de moi</h2>
            <p>Présentation</p>


            <p className="accroche">Tout a commencé...</p>
            <p>
                Après avoir terminé mes études supérieures en comptabilité, où j'ai décidé de me réorienter dans le <span>domaine du web</span>.
                <br />
                Pour concrétiser cette transition, j'ai intégré l'école Webforce 3 et j'ai obtenu le <span>diplôme de Développeur Front-End</span>. 
                Cette formation m'a permis de développer des bases solides en <span>HTML, CSS et JavaScript</span>.
            </p>


            <p className="accroche">Ma carrière...</p>
            <p>
                A débuté aux côtés de l'entreprise <a href="https://fr.linkedin.com/company/publications-agora-france" target="_blank">Publications&nbsp;Agora</a> en tant qu'<span>Intégrateur Web Emailing</span>, où j'ai acquis une première expérience professionnelle dans la <span>création de campagnes numériques</span> performantes.
                <br />
                Aujourd'hui, j'occupe le poste d'<span>Intégrateur Web</span> chez <a href="https://fr.linkedin.com/company/santoredition" target="_blank">Santor&nbsp;Édition</a> depuis maintenant 2 ans, où je continue à collaborer sur divers projets.
            </p>

            <p className="accroche">Cependant...</p>
            <p>
                Bien que ces expériences m'aient permis de consolider mes compétences, elles ont limité ma progression vers des compétences plus avancées et ne m'ont pas offert l'<span>opportunité de travailler dans des environnements techniques plus exigeants</span>.
            </p>


            <p className="accroche">Désormais...</p>
            <p>
                Je suis déterminée à progresser dans ma carrière en tant que <span>Développeur Front-End</span>. 
                <br />
                C'est pourquoi je recherche actuellement un poste qui me permettra de travailler sur <span>des projets plus variés et ambitieux</span>, tout en élargissant mon expertise, notamment sur un framework tel que <span>React</span>, sur lequel je me forme en autodidacte depuis plusieurs mois.
            </p>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
    h2 + p {
        color: var(--color-links);
    }

    .accroche {
        margin-top: 30px;
        margin-bottom: 0;
        font-weight: 600;
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