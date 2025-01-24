import Header from './header'
import HeaderJs from './headerJs'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function AppLayout ({ 
    titulo, 
    name,
    categoria,
    children,
    auth,
    flecha = true,
    back,
    onRand
}) {
    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ccdae8"></meta>
                <link rel="shortcut icon" href="/logos.png" />
            </Head>

            <main className='page-home'>
                {
                    !(categoria) ? 
                        <Header name={name} auth={auth} flecha={flecha} />
                    :
                        <HeaderJs categoria={categoria} onRand={onRand} />
                }
                {children}
            </main>

            <style jsx>{`
                .page-home{
                    background-color: ${!back ? '#F2F8F6' : back};
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    padding-bottom: 60px;
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