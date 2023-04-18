
import noteGIF from '../assets/projects/NoteTaker.gif';
import typeGIF from '../assets/projects/typingTest1.gif';
import workoutGIF from '../assets/projects/WorkoutWiz.gif';
import weatherGIF from '../assets/projects/weatherDash.gif';
import bangerGIF from '../assets/projects/bangeralert.gif'
import Type2GIF from '../assets/projects/TypeScripts.gif'
import collectURL from '../assets/projects/collectURL.gif'
import Resume from '../assets/resume/Kamyar_Mivehchi_Developer_Resume.pdf'
import Mongo from '../assets/tech/mongo.png'
import Node from '../assets/tech/node.png'
import Express from "../assets/tech/express.png"
import { BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import logo from '../assets/logo/personal-logo-512.png'

const content = {
    tagline: 'Full-Stack Software Engineer ',
    tagline2: 'Front-End Web Developer ',
    about: {
        desc: ' R&D Analytical Chemist with experience in product development and process improvement. Seeking a web development position in need of an experienced problem solver with great communication skills. Possesses a B.S. in Chemistry and is adaptable, collaborative and motivated to learn. Earning a certificate in Full Stack Web development from the University of California, Irvine to support this career transition '
    },
    nav: {
        firstName: 'Kamyar',
        lastName: 'Mivehchi',
        logoSmall: `${logo}`,
        logolink: 'home',
        links: [
            { text: 'About Me', link: 'about' },
            { text: 'My Work', link: 'portfolio' },
            { text: 'Resume', link: `${Resume}` },
            // { text: 'Skills', link: 'skills' },
            // { text: 'Contact', link: 'contact' },
        ],
    },
    footer: {
        externLinks:
            [
                { icon: <IoLogoLinkedin />, link: 'https://www.linkedin.com/in/kamyar-mivehchi/' },
                { icon: <BsGithub />, link: 'https://github.com/Kam-Mivehchi' },
                { icon: <HiOutlineMail />, link: "mailto:kammivehchi@gmail.com" },
            ],
        contact: {
            name: 'Kamyar Mivehchi',
            email: 'kammivehchi@gmail.com',
            location: "Anaheim, CA | Mclean, VA",
        },
        copyright: 'Copyright © 2022 - Kamyar Mivehchi',
        tagline: "Next Level Development"
    }
    ,
    header: {
        img:
            '',

        text: ['Kamyar Mivehchi'],
        typical: [
            'Web Developer. ',
            2000,
            'Chemist. ',
            2000,

        ],
        btnText: 'Discover',
    },

    stack: {
        title: 'Stack',
        tech: [
            {
                img: `${Mongo}`,
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
            },
            {
                img: `${Express}`,
                alt: 'express',
            },
            {
                img: `${Node}`,
                alt: 'node',
            },
        ],
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },

    project: {
        title: 'Projects',
        data: [
            {
                //use this desc size as template no longer
                title: 'CollectURL',
                img: `${collectURL}`,
                git: 'https://github.com/Kam-Mivehchi/CollectURL',
                live: 'https://lovely-banoffee-8811b7.netlify.app/',
                desc: "Designed to collect websites and group them together into a single buckets. Inspired by my journey as a software developer, which relies on learning concepts from various sources. This tool allows online learners to easily keep track of related websites and create lists to reference later.",
                tech: ["React", "JavaScript", 'Styled-Components', 'CSS', 'Express', 'MongoDB', 'Mongoose', 'Axios', '3rd Party API'],
            },
            {
                //use this desc size as template no longer
                title: 'Type{Scripts} 2.0',
                img: `${Type2GIF}`,
                git: 'https://github.com/Kam-Mivehchi/TypeScripts2-FrontEnd',
                live: 'https://typescripts-react.herokuapp.com/',
                desc: "TypeScripts 2.0 is a typing game for all developers, new and experienced alike where users are able to see their typing skills. TypeScripts 2.0 features a refactored React front-end connected to the original database",
                tech: ["React", "JavaScript ", 'TailwindCSS', 'CSS', 'Express', 'mySQL', 'Axios'],
            },
            {
                title: 'BangerAlert',
                img: `${bangerGIF}`,
                git: 'https://github.com/Kam-Mivehchi/BangerAlert---Spotify-Companion',
                live: 'https://banger-alert-redux.herokuapp.com/',
                desc: "BangerAlert is a Spotify Companion App that hosts a new wrapper and displays lyrics to sing along with. The application uses the Spotify API to provide a simple interface to enhance the listening experience.",
                tech: ["React", "JavaScript ", 'Bootstrap', 'CSS', 'Express', 'Spotify Web API'],
            },
            {
                title: 'Type{Scripts}',
                img: `${typeGIF}`,
                git: 'https://github.com/Kam-Mivehchi/TypeScripts',
                live: 'https://typescripts-btc.herokuapp.com/',
                desc: "Type{Scripts} is a typing game for all developers, new and experienced alike where users are able to see their typing skills when typing code.We noticed that a lot of the typing quizes or games didn't offer developer modes where you can type code instead of randomwords and sentences and sought to provide a solution in the form of Typescripts. ",
                tech: ["JavaScript", "Handlebars", 'CSS', 'Bootstrap'],
            },
            {
                title: 'Workout Wizard',
                img: `${workoutGIF}`,
                git: 'https://github.com/Kam-Mivehchi/project-1',
                live: 'https://runaariga.github.io/project-1/',
                desc: "Application where the user is able to find a workout specifically to certain muscle groups.If the user selects a muscle group, application will provide a list of workouts and videos",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Weather App',
                img: `${weatherGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Weather-Dashboard',
                live: 'https://kam-mivehchi.github.io/Weather-Dashboard/',
                desc: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world.This application allows user input(string input or button preset) to change the forecast to reflect their desired location.Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Note Taker',
                img: `${noteGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Note-Taker',
                live: 'https://notetaker-km.herokuapp.com/',
                desc: "Mobile-Resonsive Note taking application that integrates with Rest API. This application allows user to create, store and delete application to help increase productivity",
                tech: ["JavaScript", "HTML", 'CSS'],
            }
        ]
    },
    resume: {
        link: `${Resume}`,
        cat1: 'Chemical',
        cat2: 'Programming',
        skills: {
            programming: [
                "JavaScript",
                "MongoDB",
                "SQL",
                "HTML",
                "Node.js",
                "Progressive Web Development",
                "Cascading Style Sheets(CSS)",
                "Adobe Illustrator",
                "Adobe Photoshop",

            ],
            chemical: [
                "ICP/AES",
                "FTIR/RAMAN",
                "Research and Development (R&D)",
                "Quality Control",
                "Analytical Skills",
                "Method Development",
                "Microsoft Suite",
                "AutoCAD"


            ]


        }
    }

};

export default content;