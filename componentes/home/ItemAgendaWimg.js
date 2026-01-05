import { useRouter } from 'next/router'

export default function ItemAgendaWimg({
    itemsgroup,
    title,
    subtitle,
    color
}){
    const router = useRouter()

    return (
        <article>
            <div className='header'>
                <p className='title'>{title}</p>
                <p className='subtitle'>{subtitle}</p>
            </div>
            <div className='img-container'>
                <img src='/inag_kt_camp_2025_2.jpg' alt={title} />
            </div>
            <div className='cuadro'>
                <p className='texto-cuadro'>CAMPEONATO</p>
            </div>

            <style jsx>{`
                article{
                    position: relative;
                    background: white;
                    height: 240px;
                    width: calc((100% / ${itemsgroup} * 2) - 15px);
                    border-radius: 15px;
                    margin-right: 20px;
                    box-shadow: 2px 2px 4px 0px #777;
                    overflow: hidden;
                }

                .header{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: ${color};
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    width: calc(50% - 15px);
                    padding: 8px 12px 8px 12px;
                    color: white;
                    border-radius: 0 0 20px 0;
                    z-index: 2;
                }

                .title{
                    font-size: 17px;
                    font-weight: bold;
                }

                .subtitle{
                    margin-top: 1px;
                    font-size: 17px;
                    font-weight: 400;
                }

                .img-container {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 1;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

                .cuadro {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    background-color: white;
                    padding: 5px 10px;
                    border-radius: 8px;
                    mix-blend-mode: screen;
                    z-index: 5;
                }

                .texto-cuadro {
                    color: black;
                    font-weight: bold;
                    mix-blend-mode: multiply;
                }

                @media screen and (max-width: 768px){
                    article{
                        display: auto;
                        height: 175px;
                        width: 100%;
                        font-size: 13px;
                        margin-right: 0px;
                        border-radius: 10px;
                        box-shadow: 2px 2px 2px 0px #777;
                        margin-bottom: 15px;
                    }

                    article:nth-child(4), article:nth-child(5), article:nth-child(6), article:nth-child(7), article:nth-child(8){
                        margin-top: 0;
                    }

                    .header{
                        padding: 5px 8px 5px 8px;
                    }

                    .title{
                        font-size: 13px;
                    }

                    .subtitle{
                        font-size: 12px;
                    }

                    img{
                        top: -44px;
                        
                    }
                }
            `}</style>
        </article> 
    )
}