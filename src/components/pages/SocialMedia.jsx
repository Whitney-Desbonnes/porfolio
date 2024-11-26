import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SocialMedia() {
    // state (état, données)
    const socialMediaItems = [
        {id: 1, icon:<FaGithub />, text:"Github", link:"https://github.com/Whitney-Desbonnes?tab=repositories" },
        {id: 1, icon:<FaLinkedin />, text:"Linkedin", link:"https://www.linkedin.com/in/w-des/"},
    ]

    // comportements

    // render / rendu
    return (
        <SocialMediaStyled>
            {socialMediaItems.map(socialMediaItem => (
            <li key={socialMediaItem.id}>
                <Link to={socialMediaItem.link} target="_blank">
                    {socialMediaItem.icon}
                    {socialMediaItem.text}
                </Link>
            </li>))
            }
        </SocialMediaStyled>
    )
}

const SocialMediaStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

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
            border: 1px solid var(--bgc-links);
        }

        a.active  {
            background-color: var(--color-links);
            color: var(--secondary-text);
        }
    }

    li:hover a {
        background-color: var(--secondary-text);
        color: var(--color-links);
        border: 1px solid var(--color-links);
    }
`

