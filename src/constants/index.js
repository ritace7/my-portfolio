import project_puma from "../images/projects/project_puma.jpg";
import project_dummy_store from "../images/projects/project_dummy_store.jpg";
import project_todo from "../images/projects/project_todo.jpg";
import project_pokedex from "../images/projects/project_pokedex.jpg";
import project_hangman from "../images/projects/project_hangman.jpg";
import project_mcu from "../images/projects/project_mcu.jpg";
import project_tenzies from "../images/projects/project_tenzies.jpg";
import project_toggle from "../images/projects/project_toggle_theme.jpg";
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const projects = [
    {
        title: "Puma Clone",
        cover: project_puma,
        description: "A fully responsive clone of the Puma website built with TailWind, React and Typescript..",
        link: "https://ritace7.github.io/puma/",
        code: "https://github.com/ritace7/puma"
    },
    {
        title: "Dummy Store",
        cover: project_dummy_store,
        description: "A MERN app which provides the basic functionalities of an e-store..",
        link: "https://dummy-store.onrender.com/",
        code: "https://github.com/ritace7/dummy-store"
    },
    {
        title: "Todo App",
        cover: project_todo,
        description: "A full stack MERN app with a unique todo list for every user..",
        link: "https://todo-list-server-wzzf.onrender.com",
        code: "https://github.com/ritace7/todo-list-server"
    },
    {
        title: "Pokedex",
        cover: project_pokedex,
        description: "A REST API project built using the MERN stack..",
        link: "https://pokedex-ej13.onrender.com/",
        code: "https://github.com/ritace7/pokedex"
    },
    {
        title: "Hangman",
        cover: project_hangman,
        description: "The classic Hangman Game built on Typescript & React..",
        link: "https://ritace7.github.io/hangman/",
        code: "https://github.com/ritace7/hangman"
    },
    {
        title: "MCU Info Page",
        cover: project_mcu,
        description: "A Marvel info page that calls Marvel's API and uses Pagination to display data..",
        link: "https://ritace7.github.io/mcu-app/",
        code: "https://github.com/ritace7/mcu-app"
    },
    {
        title: "Tenzies game",
        cover: project_tenzies,
        description: "A simple React app that replicates the Tenzies game..",
        link: "https://ritace7.github.io/tenzies/",
        code: "https://github.com/ritace7/tenzies"
    },
    {
        title: "React Facts Page",
        cover: project_toggle,
        description: "A react website that toggles between light mode and dark mode...",
        link: "https://ritace7.github.io/react-facts/",
        code: "https://github.com/ritace7/react-facts"
    }
]

export const socials = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/bassboyrit.ace/",
        icon: faFacebook
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/hritesh7",
        icon: faLinkedin
    },
    {
        title: "Github",
        link: "https://github.com/ritace7",
        icon: faGithub
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/rit.ace_sresta/",
        icon: faInstagram
    }
]