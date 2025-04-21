import { useRouter } from 'next/router'

export default function ItemAgenda({
    main,
    title,
    subtitle,
    date,
    place,
    hour,
    url,
    children,
    color,
    tr
}){
    const router = useRouter()

    return (
        <article>
            <div className='left-section'>
                <div className='header'>
                    <p className='title'>{title}</p>
                    <p className='subtitle'>{subtitle}</p>
                </div>
                <div className='info'>
                    <p>• {date}</p>
                    <p>• {place}</p>
                    {
                        !url ? <p className='url'><span>• </span>{hour}</p>
                            : <p onClick={() => router.push(url)} className='url'><span>• </span>{hour}</p>
                    }
                </div>
            </div>
            {
                (children &&main) &&
                <div className='right-section'>
                    {children}
                </div>
            }

            <style jsx>{`
                article{
                    background: white;
                    width: ${main ? 'calc(50% - 15px)' : 'calc(25% - 15px)'};
                    display: ${tr ? 'none' : main ? 'flex' : 'block'};
                    /* display: ${main ? 'flex' : 'block'}; */
                    border: ${color ? `3px solid ${color}` : main ? '3px solid #245590' : '2px solid #000000AA'};
                    border-radius: 15px;
                    margin-right: 20px;
                    box-shadow: 2px 2px 4px 0px #777;
                    overflow: hidden;
                }

                article:nth-child(3){
                    margin-right: 0;
                }

                article:nth-child(4), article:nth-child(5), article:nth-child(6){
                    margin-top: 20px;
                }
                
                .left-section{
                    width: ${main ? '50%' : '100%'};
                }

                .header{
                    background: ${color ? color : main ? '#245590' : '#000000AA'};
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    padding: 8px 12px 11px 12px;
                    color: white;
                    border-radius: ${main ? '0 0 20px 0' : '0'};
                }

                .title{
                    font-size: 18px;
                    font-weight: 400;
                }

                .subtitle{
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .info{
                    min-height: 100px;
                    color: black;
                    padding: 10px 12px 12px 12px;
                    font-size: 18px;
                    font-weight: 200;
                }

                .info p{
                    margin-top: 1px;
                }

                .url{
                    color: ${(main || url) ? '#245590' : 'black'};
                    font-weight: ${(main || url) ? 'bold' : '200'};
                    cursor: ${url ? 'pointer' : 'auto'};
                }

                .url span{
                    color: black;
                    font-weight: 200;
                }

                .right-section{
                    margin: 1px 0 4px 0;
                    width: 50%;
                    padding: 4px 16px 5px 16px;
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                @media screen and (max-width: 768px){
                    article{
                        opacity: ${tr ? '0' : '1'};
                        display: auto;
                        width: calc(50% - 8px);
                        width: ${main ? '100%' : 'calc(50% - 8px)'};
                        font-size: 13px;
                        margin-right: 0px;
                        border: ${color ? `2px solid ${color}` : main ? '3px solid #245590' : '2px solid #000000AA'};
                        border-radius: 10px;
                        box-shadow: 2px 2px 2px 0px #777;
                        margin-bottom: 15px;
                    }

                    article:nth-child(4), article:nth-child(5), article:nth-child(6){
                        margin-top: 0;
                    }

                    .left-section{
                        width: ${main ? '49%' : '100%'};
                    }

                    .header{
                        padding: 6px 8px 7px 8px;
                    }

                    .title{
                        font-size: 14px;
                    }

                    .subtitle{
                        font-size: 14px;
                    }

                    .info{
                        min-height: 80px;
                        padding: 7px 7px 7px 7px;
                        font-size: 14px;
                    }

                    .info p{
                        margin-top: 2px;
                    }

                    .right-section{
                        margin: 1px 0 4px 0;
                        width: 51%;
                        padding: 4px 6px 5px 8px;
                        font-size: 13px;
                    }    
                }
            `}</style>
        </article> 
    )
}