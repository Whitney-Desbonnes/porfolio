import styled from "styled-components";

export default function Work() {
    // state (état, données)
    const itemsPerso = [
        {id: 1, name:"Crazee burger", techno:"(HTML, CSS et React.js)", link:"https://crazeee-burger.netlify.app", image:"images/crazee-burger.png"},
        {id: 2, name:"Puma", techno:"(HTML, CSS et JS)", link:"https://whitney-desbonnes.github.io/puma/", image:"images/puma.png"},
        {id: 3, name:"Campanile", techno:"(HTML et CSS)", link:"https://whitney-desbonnes.github.io/Campanile/", image:"images/campanile.png"},
        {id: 4, name:"HelloBank", techno:"(HTML et CSS)", link:"https://whitney-desbonnes.github.io/HelloBank/", image:"images/hello-bank.png"},
        {id: 5, name:"Contrex", techno:"(HTML et CSS)", link:"https://whitney-desbonnes.github.io/Contrex/", image:"images/contrex.png"},
        {id: 6, name:"Calculatrice de pourboire", techno:"(HTML, CSS et JS)", link:"https://whitney-desbonnes.github.io/tip-calculator/", image:"images/splitter.png"},
        {id: 7, name:"Prix", techno:"(HTML, CSS et JS)", link:"https://whitney-desbonnes.github.io/pricing_component/", image:"images/pricing.png"},
        {id: 8, name:"Note", techno:"(HTML, CSS et JS)", link:"https://whitney-desbonnes.github.io/Interactive-rating-component/", image:"images/rating.png"},
        {id: 9, name:"Carte", techno:"(HTML et CSS)", link:"https://whitney-desbonnes.github.io/Frontend-challenge---NFT-preview-card-component/", image:"images/card.png"},
        {id: 10, name:"Récréakids", techno:"(HTML, CSS et JS)", link:"https://whitney-desbonnes.github.io/projet-Recreakids/", image:"images/recreakids.png"},
    ]

    const itemsPro = [
        {id: 1, name:"Réalités oncologiques", techno:"(HTML, CSS et JS)", link:"https://www.realites-oncologiques.com/accueil-138668", image:"images/realites-oncologiques.png"},
        {id: 2, name:"Village santé", techno:"(HTML, CSS et JS)", link:"https://www.mediscoop.net/village-sport-et-sante/", image:"images/village.png"},
        {id: 3, name:"Sofmer", techno:"(HTML, CSS et JS)", link:"https://www.sofmer.com/", image:"images/sofmer.png"},
    ]

    // comportements

    // render / rendu
    return (
        <WorkStyled>
            <h2>Mes projets</h2>
            <p>Vue d'ensemble</p>

            <p>
                Vous trouverez ici un aperçu de mes projets réalisés principalement en <span>HTML, CSS et JS</span>.
                Ils sont classés du plus récent au plus ancien.
                <br />
                Un projet est actuellement en cours de développement avec <span>React</span>, d'ailleurs ce site a été conçu également en React.
            </p>


            <ul>
                <li>
                    <h3>Professionnels</h3>
                    <p>Toute la partie <span>intégration front</span> sur ces trois sites a été entièrement conçue par mes soins dans le cadre de mon poste actuel d'<span>Intégrateur web</span> chez <a href="https://fr.linkedin.com/company/santoredition" target="_blank">Santor&nbsp;Edition</a>. 
                    </p>

                    <p style={{marginBottom:"0"}}>Stack technique</p>
                    <ul>
                        <li>Front-end - HTML5, CSS3, JS, Bootstrap.</li>
                        <li>Back-end - Twig, PHPMyAdmin.</li>
                        <li>Outils - PhpStorm, FileZilla, Photoshop, Illustrator.</li>
                    </ul>

                    <div className="list-items">
                        
                        {itemsPro.map(item =>( 
                            <LinkItemStyled className="items" key={item.id} href={item.link} target="_blank" image={item.image}>
                                <span>{item.name}</span>
                            </LinkItemStyled>
                        ))}
                    </div>
                </li>

                <li>
                    <h3>Personnels</h3>
                    <p>Cette section met en avant des projets personnels que j'ai réalisés dans le but de renforcer mes compétences et d'explorer de nouvelles idées. Le dernier projet "Crazee burger" a été réalisé en React et il est toujours en cours de production.</p>
                    <p>
                    Bien que ces projets reflètent seulement pour la plupart mes premiers pas dans le domaine du web, j'ai trouvé important de les montrer car ils témoignent de ma volonté d'évoluer.
                    </p>
                    <div className="list-items">
                        {itemsPerso.map(item =>( 
                            <LinkItemStyled className="items" key={item.id} href={item.link} target="_blank" image={item.image}>
                                <span>{item.name}</span>
                            </LinkItemStyled>
                        ))}
                    </div>
                </li>
            </ul>

            

            
        </WorkStyled>
    )
}

const WorkStyled = styled.div`
    h2 + p {
        color: var(--color-links);
    }

    ul {
        margin-bottom: 20px;
        li {
            list-style: disc;
            margin-left: 30px;
        }
    }

    p {
        margin-bottom: 20px;
        span {
            font-weight: 600;
            color: var(--color-links);
        }
    }

    .list-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        text-align: center;
        margin-bottom: 30px;
    }

    h3 {
        margin-bottom: 10px;
        margin-top: 40px;
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

    @media screen and (max-width:690px) {
        .list-items {
            grid-template-columns: 1fr;
        }
    }
`

const LinkItemStyled = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 2px solid var(--color-links);
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 100%;
    background-position: top center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    color: var(--secondary-text);
    text-transform: uppercase;
    height: 130px;
    overflow: hidden;

    &:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.661);
        z-index: -2;
    }

    &:before {
        content: "";
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: var(--color-links);
        width: 30%;
        height: 20px;
        border-radius: 10px;
        z-index: -1;
    }

    &:hover:after {
        background-color: rgba(154, 105, 62, 0.9) !important;
    }

    &:hover:before {
        display: none;
    }

    @media screen and (max-width:690px) {
        height: 80px;
    }
`