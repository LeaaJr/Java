import React from "react";
import style from '../Styles/Carrousell.module.css'

export function Carrousell () {
    return(
        <div className={style.carouselContainer}>
            <div className={style.carouselItem}>
                <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg" alt="Imagen 1" className={style.pic} />
                <div className={style.textContainer}>
                    <h2>iPhone 16 Pro Max</h2>
                    <p>With the power of the A18 Pro chip, which delivers industry-leading CPU performance, the Pro line introduces larger displays, Camera Control, innovative pro-level camera features and a huge leap in battery life</p>
                </div>
            </div>

            <div className={style.carouselItem}>
                <img src="https://www.muycomputer.com/wp-content/uploads/2020/07/PS5-Negra-Black-Edition-e1593692011592.jpg" alt="Imagen 2" className={style.pic} />
                <div className={style.textContainer}>
                    <h2>PlayStation 5 Pro</h2>
                    <p>With the PlayStation®5 Pro console, the greatest creators of games in the world can improve their titles with incredible functionality such as advanced ray-tracing, extremely sharp images for your 4K TV and a game with a high frame rate*. This means giving you the PS5® title with the most amazing graphics ever on your PlayStation® console.</p>
                </div>
            </div>

            <div className={style.carouselItem}>
                <img src="https://media-assets.wired.it/photos/67225df7b1edef09a70ad237/16:9/w_1920,c_limit/Apple-MacBook-Pro-M4-lineup.jpg" alt="Imagen 3" className={style.pic} />
                <div className={style.textContainer}>
                    <h2>MacBook Pro M4</h2>
                    <p>Descripción breve del producto destacado, destacando sus beneficios y características.</p>
                </div>
            </div>

            <div className={style.carouselItem}>
                <img src="https://media.wired.com/photos/620ec99bc14aa6d334a5d91c/master/pass/Gear-Apple-Watch-Fitness-Tracker.jpg" alt="Imagen 4" className={style.pic} />
                <div className={style.textContainer}>
                    <h2>Producto Destacado 4</h2>
                    <p>Descripción breve del producto destacado, destacando sus beneficios y características.</p>
                </div>
            </div>

            <div className={style.carouselItem}>
                <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg?w=1500&quality=82&strip=all&ssl=1" alt="Imagen 5" className={style.pic} />
                <div className={style.textContainer}>
                    <h2>AirPods Max</h2>
                    <p>AirPods Max: an unparalleled user experience. Pray in five new colors. Apple's driver project offers high-fidelity sound, and all the details are studied for exceptional comfort, due to the innovative design of the bow.</p>
                </div>
            </div>
        </div>
    );
};
