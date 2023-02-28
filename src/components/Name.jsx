import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Twitter from "../assets/iconmonstr-twitter-3-240.png";
import Linkedin from "../assets/iconmonstr-linkedin-3-240.png";
import Github from "../assets/iconmonstr-github-3-240.png";

const Name = () => {
    const [text] = useTypewriter({
        words: ["Frontend", "Backend", "FullStack"],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 150,
    })

    const imgStyle = "w-[40px] bg-black rounded-xl md:w-[50px] hover:bg-gray-800 duration-300";

    return (
        <div className="flex flex-col justify-center h-[600px] md:h-[1000px] ml-10 space-y-14 md:ml-28 lg:ml-40">
            <div className="flex flex-col text-3xl tracking-wide space-y-2 text-white font-normal md:text-5xl">
                <p className="text-4xl mb-5 md:text-7xl">Salut !</p>
                <p>Je suis Louis,</p>
                <p>Développeur Web</p>
                <p>{text}<Cursor/></p>
            </div>
            <div className="flex w-auto space-x-10">
                <a rel="noreferrer" target="_blank" href="https://github.com/NextSap">
                    <img className={imgStyle} src={Github} alt="Github"/>
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/">
                    <img className={imgStyle} src={Linkedin} alt="Linkedin"/>
                </a>
                <a rel="noreferrer" target="_blank" href="https://twitter.com/NextSap_">
                    <img className={imgStyle} src={Twitter} alt="Twitter"/>
                </a>
            </div>
            <a href="#projects"
               className="flex justify-center items-center text-xl bg-[#D8D8D8] w-40 h-10 hover:text-red-900 duration-300">Voir
                les projets</a>
        </div>
    );
};

export default Name;