export default function BannerCampeon({ img, name, group, genre, home }){
    return(
        <div className='cont'>
            { home &&
                <>
                    <div className='divo'></div>
                    <p className='title'>Campeones Iniciación</p>
                </>
            }
            <img src={img} />
            { home ? <p className='n-camp fem'>Niños Guerreros & Niñas Guerreras de Dios</p>
                : <p className='n-camp'>{name}</p>
            }
            <p className='p-camp'>{group}</p>

            <style jsx>{`
                .cont{
                    margin: ${home ? '0px 4% 50px 4%' : 0};
                    width: ${home ? '92%' : 'auto'};
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 2px solid brown;
                }

                .title{
                    margin: -17px auto 0 auto;
                    width: 225px;
                    background: #F2F8F6;
                    color: brown;
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 30px;
                }

                img{
                    width: 500px;
                    height: 300px;
                    border-radius: 15px;
                    box-shadow: 2px 2px 4px 0px #777;
                }

                .n-camp{
                    margin-top: 10px;
                    color: ${genre == 'M' ? '#245590' : '#CC397B'};
                    font-size: 20px;
                    font-weight: bold;
                }

                .fem{
                    color: #C8B273;
                }

                .p-camp{
                    font-size: 17px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    .cont{
                        margin: ${home ? '0px 15px 25px 15px' : 0};
                        width: ${home ? 'calc(100% - 30px)' : 'auto'};
                    }

                    .divo{
                        border: 1px solid brown;
                    }

                    .title{
                        width: 200px;
                        margin: -13px auto 0 auto;
                        font-size: 19px;
                        margin-bottom: 18px;
                    }

                    img{
                        width: 100%;
                        height: 260px;
                        border-radius: 12px;
                    }

                    .n-camp{
                        margin-top: 10px;
                        font-size: 17px;
                    }

                    .fem{
                        color: #C8B273;
                    }

                    .p-camp{
                        font-size: 15px;
                    }
                }
            `}</style>
        </div>
    )
}