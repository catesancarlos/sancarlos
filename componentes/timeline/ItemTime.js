import OpcionesSvg from '../../componentes/iconos/OpcionesSvg'

export default function ItemTime({ title, desc, img, date }){

    return(
        <article>
            <div className='header'>
                <strong>{title}</strong>
                <OpcionesSvg />
            </div>
            <div className='content'>
                <p>{desc}</p>
                <img src={img} />
            </div>
            <p className='date'>{`• ${date}`}</p>
                
            <style jsx>{`
                article{
                    width: 500px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 2px 2px 4px 0px #777;
                    margin-bottom: 35px;
                }

                .header{
                    padding: 10px 12px 3px 12px;
                    font-size: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .content{
                    min-height: 50px;
                }

                .content p{
                    padding: 3px 12px 13px 12px;
                    color: #222;
                    font-size: 14px;
                    font-weight: 200;
                }

                img{
                    width: 100%;
                    display: block;
                    filter: brightness(110%);
                    filter: contrast(110%);
                    image-rendering: high-quality;
                }

                .date{
                    padding: 11px 14px 12px 14px;
                    color: #777;
                    font-size: 13px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    article{
                        width: 100%;
                        margin-bottom: 25px;
                    }

                    .header{
                        padding: 10px 12px 4px 12px;
                        font-size: 15px;
                    }

                    .content p{
                        padding: 4px 12px 12px 12px;
                        font-size: 13px;
                    }

                    .date{
                        padding: 10px 14px 11px 14px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </article>
    )
}