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
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/qv05nowpkr8phlbmvo66i/AKVnpkDj9a06kc2pQOE_mZQ?rlkey=k4oybs5vie8vzo6iu0bfykcrm&st=zjm69y5t&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Ingreso</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/6qu9lj4mrch5t5oo7mwop/ALO9o2f2qaQdw-FmTlOb9VM?rlkey=drtjhmvf26bfq7ya1ay1h24pg&st=b5mhgf3u&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Unción Crisma</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/cxrcd7wfk2w8cea1m0qap/AIrz2VeiXKLYuiyBwxF4poI?rlkey=axgj4qiejholwbw9wt36xxn15&st=slepulk9&dl=0')}>
                    <strong>Eucaristia 8am</strong>
                    <p>Varias</p>
                </div>
            </div>
            <div className='cont c2'>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/besb4xnobva1e7nsg102e/AKv2PNIOTGR7rVPuStpcobA?rlkey=1k1u1gd5v9xvddvy7dch36pug&st=tz6is6ku&dl=0')}>
                    <strong>Eucaristia 10am</strong>
                    <p>Ingreso</p>
                </div> 
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/1d1xazwfngblyfjgihjwr/AJpj6BaRT3NKl-sUYU74B2o?rlkey=1qh89rce5bk30fb4g3kv12xxu&st=fw45twf3&dl=0')}>
                    <strong>Eucaristia 10am</strong>
                    <p>Unción Crisma</p>
                </div>
                <div
                    className='opcion'
                    onClick={() => router.push('https://www.dropbox.com/scl/fo/uhfg1ogymnvctyrtxf57l/ADdPhdw_VlJ4Z8lJe75LNIw?rlkey=mbmqauhdsiuyqcv93wong1po6&st=t692nn20&dl=0')}>
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