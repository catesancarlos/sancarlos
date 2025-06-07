import { useRouter } from 'next/router'

const FotosConfirmacion = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>FOTOS CONFIRMACIÓN</p>
            <div className='cont-cont'>
            <div className='cont c1'>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/pzyhirhoq6t993da28x87/AGdhmttKxufRc4FqqkQlU_I?rlkey=3iyivhppqw0m666i33f9av0cc&st=qz4fw17o&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Ingreso</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/pzyhirhoq6t993da28x87/AGdhmttKxufRc4FqqkQlU_I?rlkey=3iyivhppqw0m666i33f9av0cc&st=qz4fw17o&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Unción Crisma</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/pzyhirhoq6t993da28x87/AGdhmttKxufRc4FqqkQlU_I?rlkey=3iyivhppqw0m666i33f9av0cc&st=qz4fw17o&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Varias</p>
                </div>
            </div>
            <div className='cont c2'>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/18rcp8dqouh2yz5d3ndve/ADGIyLet2DrrtK-Ds4Mvyr4?rlkey=xkpwykgwf9k026799qee4lb48&st=ijtlszdp&dl=0')}>
                    <strong>Eucaristia 10am</strong>
                    <p>Ingreso</p>
                </div> 
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/18rcp8dqouh2yz5d3ndve/ADGIyLet2DrrtK-Ds4Mvyr4?rlkey=xkpwykgwf9k026799qee4lb48&st=ijtlszdp&dl=0')}>
                    <strong>Eucaristia 10am</strong>
                    <p>Unción Crisma</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/18rcp8dqouh2yz5d3ndve/ADGIyLet2DrrtK-Ds4Mvyr4?rlkey=xkpwykgwf9k026799qee4lb48&st=ijtlszdp&dl=0')}>
                    <strong>Eucaristia 10am</strong>
                    <p>Varias</p>
                </div>       
            </div>
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 35px 4% 0 4%;
                    margin: 0px 4% 60px 4%;
                    width: 92%;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 2px solid brown;
                }

                .title{
                    margin: -17px auto 0 auto;
                    width: 280px;
                    background: #F2F8F6;
                    color: brown;
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .cont{
                    display: flex;
                    flex-wrap: wrap;
                }

                .opcion{
                    background: #666666;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    height: 120px;
                    width: calc(((100% - 90px) / 3));
                    margin: 15px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    box-shadow: 2px 2px 4px 0px #777;
                    cursor: pointer;
                }

                .c2 .opcion{
                    background:rgb(154, 125, 125);
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                }

                .opcion strong{
                    font-size: 18px;
                    letter-spacing: 1px;
                    margin-bottom: 15px;
                }

                .opcion p{
                    background: white;
                    padding: 2px 8px;
                    color: black;
                    font-size: 17px;
                    border-radius: 5px;
                }

                @media screen and (max-width: 768px){
                    section{
                        font-family: 'Lato', sans-serif;
                        margin: 0px 15px 20px 15px;
                        width: calc(100% - 30px);
                    }

                    .divo{
                        border: 1px solid brown;
                    }

                    .title{
                        width: 240px;
                        margin: -13px auto 0 auto;
                        font-size: 19px;
                        margin-bottom: 20px;
                    }

                    .cont-cont{
                        display: flex;
                    }

                    .cont{
                        width: calc(((100% - 40px) / 2));
                        margin: 10px;
                        flex-direction: column;
                    }

                    .opcion{
                        height: 100px;
                        width: 100%;
                        margin: 0 0 20px 0;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 15px;
                    }

                    .opcion strong{
                        margin-bottom: 14px;
                        font-size: 15px;
                    }

                    .opcion p{
                        font-size: 15px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default FotosConfirmacion