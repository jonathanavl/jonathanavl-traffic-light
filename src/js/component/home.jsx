import React, { useState, useEffect } from "react";
import '../../styles/index.css';

const Home = () => {
    const [color, setColor] = useState("red");
    const [purpleClicked, setPurpleClicked] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (color === 'green') {
            startAnimation();
        }
    }, [color]);

    const startAnimation = () => {
        const person = document.querySelector(".person");
        if (person) {
            person.style.animation = "none";
            person.offsetHeight; // Trigger reflow
            person.style.animation = "walkUp 4s linear forwards";
            person.style.opacity = "1";

            setTimeout(() => {
                // Resetear el semáforo y la persona
                resetTrafficLightAndPerson();

                // Iniciar la animación de reaparición
                person.style.animation = "fadeIn 4s ease-in-out forwards";
                person.style.opacity = "1";
            }, 4000); // Tiempo de duración de la animación de desaparición
        }
    };

    const resetTrafficLightAndPerson = () => {
        setColor("red"); // Reset traffic light to red
    };

    const handlePurpleButtonClick = () => {
        document.body.style.transition = "background-color 2s ease-in-out";
        document.body.style.backgroundColor = "black";
        document.body.classList.add('black-background');

        setTimeout(() => {
            setShowImage(true);
        }, 500);
        setTimeout(() => {
            setShowText(true);
        }, 1500);
        setTimeout(() => {
            setPurpleClicked(true);
        }, 2000);
    };

    const handleGreenButtonClick = () => {
        setColor("green");
    };

    return (
        <div className="container">
            <div className="traffic-light-container">
                <div className="sidewalk start-sidewalk"></div>
                <div className="sidewalk end-sidewalk"></div>
                <div className="traffic-light">
                    <div className={`light red ${color === 'red' ? 'active' : ''}`} onClick={() => setColor('red')}></div>
                    <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`} onClick={() => setColor('yellow')}></div>
                    <div className={`light green ${color === 'green' ? 'active' : ''}`} onClick={handleGreenButtonClick}></div>
                </div>
                <div className="traffic-light-pole"></div>
                <div className="shadow"></div>
                <div className="crosswalk-container">
                    <div className="crosswalk"></div>
                    <div className="crosswalktwo"></div>
                    <div className="crosswalktree"></div>
                    <div className="crosswalkfour"></div>
                </div>

                <div className="bolardos">
                    <div className="bolardo1"></div>
                    <div className="bolardo2"></div>
                    <div className="bolardo3"></div>
                    <div className="bolardo4"></div>
                </div>

                <div className="pole left-pole">
                    <div className="button-container">
                        <button className="btngreen" onClick={handleGreenButtonClick}>Click to Pass</button>
                    </div>
                </div>
                <div className="pole right-pole">
                    <div className="button-container">
                        <button className="btn-purple" onClick={handlePurpleButtonClick}>Not touch</button>
                    </div>
                </div>
                <div className="lower-background"></div>
                <div className={`person-container ${purpleClicked ? 'black-hole-active' : ''}`}>
                    <div className="person">
                        <div className="head"></div>
                        <div className="left-arm"></div>
                        <div className="right-arm"></div>
                        <div className="left-leg"></div>
                        <div className="right-leg"></div>
                        <div className="body"></div>
                    </div>
                </div>
                <div className={`image-container ${showImage ? 'show' : ''}`}>
                    <img
                        src="https://i.ibb.co/wWyyy0C/pngwing-com.png"
                        alt="Spinning Image"
                        className={`spin-image ${showImage ? 'spin-animation' : ''}`}
                    />
                </div>
            </div>
            {showText && (
                <div className={`black-hole-text show`}>
                    I told you not to touch it, it was just a purple button... you caused a black hole
                </div>
            )}
        </div>
    );
};

export default Home;
