export default function HeaderSection({ title, subtitle, img }){
    return(
        <div className='header'>
            <img src={img} />
            <div className='text-logo'>
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>        

            <style jsx>{`
                .header{
                    width: 100%;
                    background: white;
                    height: 75px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    box-shadow: -2px 2px 5px 0px #888;
                }

                img{
                    height: ${title == 'CONCURSO' ? '38px' : '53px'};
                    border-radius: 10px;
                }

                .text-logo{
                    margin-left: 14px;
                }

                .text-logo p{
                    font-size: 16px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .text-logo p:last-child{
                    font-weight: 500;
                }

                @media screen and (max-width: 768px){
                    .header{
                        height: 60px;
                        border-radius: 12px;
                        box-shadow: -1px 2px 5px 0px #888;
                    }

                    img{
                        height: ${title == 'CONCURSO' ? '37px' : '45px'};
                    }

                    .text-logo{
                        margin-left: 10px;
                    }
                }
            `}</style>
        </div>
    )
}