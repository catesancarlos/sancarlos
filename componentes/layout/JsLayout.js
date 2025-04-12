import { useState, useEffect } from 'react'

import HeaderJs from './headerJs'
import Head from 'next/head'
import Router from 'next/router'
/* import NProgress from 'nprogress' */

import db  from '../../services/dBase'
import { doc, updateDoc, collection, query, where, onSnapshot } from 'firebase/firestore'
import FooterPoints from '../jesuscribe/FooterPoints'

/* Router.onRouteChangeStart = (url) => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done() */

export default function JsLayout ({ 
    titulo, 
    name,
    categoria,
    children,
    auth,
    flecha = true,
    back,
    onRand,
    preg,
    non
}) {
    const [grupos, setGrupos] = useState([])
    const [now, setNow] = useState(5)

    useEffect(() => {
        const q = query(collection(db, 'concursoab'), where('nivel', '==', 'ab'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const grupos = []
            querySnapshot.forEach((doc) => {
                grupos.push(doc.data())
            })
            setGrupos(grupos)
        })
    }, [])

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'concurso'), (doc) => {
            setNow(doc.data().now)
        }) 
    }, [])

    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ccdae8"></meta>
                <link rel="shortcut icon" href="/logos.png" />
            </Head>

            <main className='page-home'>
                <HeaderJs categoria={categoria} non={non} onRand={onRand} />
                {children}
                { preg && <FooterPoints preg={preg} /> }
            </main>

            <style jsx>{`
                .page-home{
                    background-color: ${!back ? '#F2F8F6' : back};
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    padding-bottom: ${preg ? '130px' : '60px'};
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    background-color: #F2F8F6 !important;
                    padding: 0;
                    margin: 0;
                    font-family: 'Lato', sans-serif;
                }

                :root{
                    color-scheme: only light;
                }

                @media (prefers-color-scheme: dark) {
                    :root {
                        color-scheme: light;
                    }
                }
                
                @media (forced-colors: active) {
                    :root {
                        color-scheme: light;
                    }
                }

                * {
                    box-sizing: border-box;
                }

                a{
                    color: black;
                    text-decoration: none;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }

                p{
                    margin: 0;
                }


                /* ESTILOS SPINER */
                /* Make clicks pass-through */
                #nprogress {
                    pointer-events: none;
                }

                #nprogress .bar {
                background: white;

                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;

                width: 100%;
                height: 4px;
                }

                /* Fancy blur effect */
                #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px white, 0 0 5px white;
                    opacity: 1.0;

                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                        -ms-transform: rotate(3deg) translate(0px, -4px);
                            transform: rotate(3deg) translate(0px, -4px);
                }

                /* Remove these to get rid of the spinner */
                #nprogress .spinner {
                    display: block;
                    position: fixed;
                    z-index: 1031;
                    bottom: 15px;
                    right: 15px;
                }

                #nprogress .spinner-icon {
                    width: 20px;
                    height: 20px;
                    box-sizing: border-box;

                    border: solid 3px transparent;
                    border-top-color: brown;
                    border-left-color: brown;
                    border-radius: 50%;

                    -webkit-animation: nprogress-spinner 400ms linear infinite;
                            animation: nprogress-spinner 400ms linear infinite;
                }

                .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                }

                .nprogress-custom-parent #nprogress .spinner,
                .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                }

                @-webkit-keyframes nprogress-spinner {
                    0%   { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                }
                @keyframes nprogress-spinner {
                    0%   { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    )
}