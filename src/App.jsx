import { useState } from "react";

import Button from "./components/Button/Button.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";

import "./App.css";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section id='center'>
                <div className='hero'>
                    <img
                        src={heroImg}
                        className='base'
                        width='170'
                        height='179'
                        alt=''
                    />
                    <img
                        src={reactLogo}
                        className='framework'
                        alt='React logo'
                    />
                    <img
                        src={viteLogo}
                        className='vite'
                        alt='Vite logo'
                    />
                </div>
                <div>
                    <h1>Get started</h1>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test{" "}
                        <code>HMR</code>
                    </p>
                </div>

                <ProductCard
                    name='Hamburger'
                    image='🍔'
                    price={11.99}
                    description='Tasty burger 100% Beef(tm)'
                    backgroundColor='#ffa600'
                    buttonClick={() => {
                        console.log("this button was clicked!");
                    }}
                />

                <ProductCard
                    name='Hot dog'
                    image='🌭'
                    price={5.25}
                    description='Old nasty hot dog, not 100% Beef, yuck'
                    backgroundColor='#ffdb58'
                    onSale={true}
                />

                <Button
                    onClick={() => setCount((count) => count + 1)}
                    modifier='secondary'
                >
                    Clicked {count} times!
                </Button>
                <Button modifier='warning'>DANGER! ⛔️</Button>
                <Button modifier='brand-colors'>🥬 Lettuce</Button>
                <Button disabled={true}>Can't click me! Hehe! 😜</Button>
                <Button>I'm a primary button! Stay in school!</Button>
            </section>

            <div className='ticks'></div>

            <section id='next-steps'>
                <div id='docs'>
                    <svg
                        className='icon'
                        role='presentation'
                        aria-hidden='true'
                    >
                        <use href='/icons.svg#documentation-icon'></use>
                    </svg>
                    <h2>Documentation</h2>
                    <p>Your questions, answered</p>
                    <ul>
                        <li>
                            <a
                                href='https://vite.dev/'
                                target='_blank'
                            >
                                <img
                                    className='logo'
                                    src={viteLogo}
                                    alt=''
                                />
                                Explore Vite
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://react.dev/'
                                target='_blank'
                            >
                                <img
                                    className='button-icon'
                                    src={reactLogo}
                                    alt=''
                                />
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='social'>
                    <svg
                        className='icon'
                        role='presentation'
                        aria-hidden='true'
                    >
                        <use href='/icons.svg#social-icon'></use>
                    </svg>
                    <h2>Connect with us</h2>
                    <p>Join the Vite community</p>
                    <ul>
                        <li>
                            <a
                                href='https://github.com/vitejs/vite'
                                target='_blank'
                            >
                                <svg
                                    className='button-icon'
                                    role='presentation'
                                    aria-hidden='true'
                                >
                                    <use href='/icons.svg#github-icon'></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://chat.vite.dev/'
                                target='_blank'
                            >
                                <svg
                                    className='button-icon'
                                    role='presentation'
                                    aria-hidden='true'
                                >
                                    <use href='/icons.svg#discord-icon'></use>
                                </svg>
                                Discord
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://x.com/vite_js'
                                target='_blank'
                            >
                                <svg
                                    className='button-icon'
                                    role='presentation'
                                    aria-hidden='true'
                                >
                                    <use href='/icons.svg#x-icon'></use>
                                </svg>
                                X.com
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://bsky.app/profile/vite.dev'
                                target='_blank'
                            >
                                <svg
                                    className='button-icon'
                                    role='presentation'
                                    aria-hidden='true'
                                >
                                    <use href='/icons.svg#bluesky-icon'></use>
                                </svg>
                                Bluesky
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className='ticks'></div>
            <section id='spacer'></section>
        </>
    );
}

export default App;
