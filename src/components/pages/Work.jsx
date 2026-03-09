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
        {id: 1, name:"New Deal Santé", techno:"(HTML, CSS et JS)", link:"https://www.newdealsante.com/", image:"images/newdealsante.png"},
        {id: 2, name:"JIRP", techno:"(HTML, CSS et JS)", link:"https://jirp.info/", image:"images/jirp.png"},
        {id: 3, name:"JIRD", techno:"(HTML, CSS et JS)", link:"https://jird.info/", image:"images/jird.png"},
        {id: 4, name:"Réalités oncologiques", techno:"(HTML, CSS et JS)", link:"https://www.realites-oncologiques.com/accueil-138668", image:"images/realites-oncologiques.png"},
        {id: 5, name:"Village santé", techno:"(HTML, CSS et JS)", link:"https://www.mediscoop.net/village-sport-et-sante/", image:"images/village.png"},
        {id: 6, name:"Sofmer", techno:"(HTML, CSS et JS)", link:"https://www.sofmer.com/", image:"images/sofmer.png"},
    ]

    // comportements

    // render / rendu
    return (
        <WorkStyled>
            <h2>Mes projets</h2>

            <ul>
                <li>
                    <h3>Professionnels</h3>
                    <p>Les interfaces front-end de ces sites ont été intégrées par mes soins dans le cadre de mon poste actuel d'<span>Intégratrice web</span> chez <a href="https://fr.linkedin.com/company/santoredition" target="_blank">Santor&nbsp;Edition</a>. 
                    </p>

                    <p style={{marginBottom:"0"}}>Environnement technique :</p>
                    <ul>
                        <li>Front-end - HTML5, CSS3, JS, Bootstrap, Tailwind</li>
                        <li>Back-end - Twig, PHPMyAdmin</li>
                        <li>Outils - PhpStorm, FileZilla, Photoshop, Illustrator</li>
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
                    <p>Cette section présente des projets personnels réalisés pour pratiquer et approfondir mes compétences en développement.</p>
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
        margin-top: 10px;
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