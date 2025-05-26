import { useState } from 'react'
import Modal from '../../componentes/generales/Modal'

export default function BannerCampeones(){
    const [foto, setFoto] = useState(null)

    return(
        <div className='cont'>
            <div className='divo'></div>
            <p className='title'>Campeones 2025</p>
            <div className='campeones'>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonas2doConf.jpg')}>
                    <img src='/campeonato/campeonas2doConf.jpg' />
                    <div className='data'>
                        <p className='nombre'>Gálatas 1, 10</p>
                        <p className='grupo'>Confirmación 1</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeones2doConf.jpg')}>
                    <img src='/campeonato/campeones2doConf.jpg' />
                    <div className='data'>
                        <p className='nombre'>Confirmación F.C.</p>
                        <p className='grupo'>Confirmación 2</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonasBiblico.jpg')}>
                    <img src='/campeonato/campeonasBiblico.jpg' />
                    <div className='data'>
                        <p className='nombre'>Las Misioneras</p>
                        <p className='grupo'>Año Bíblico 2</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonesBiblico.jpg')}>
                    <img src='/campeonato/campeonesBiblico.jpg' />
                    <div className='data'>
                        <p className='nombre'>Los Misioneros</p>
                        <p className='grupo'>Año Bíblico 2</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonas2doCom.jpg')}>
                    <img src='/campeonato/campeonas2doCom.jpg' />
                    <div className='data'>
                        <p className='nombre'>Pueblo de Dios</p>
                        <p className='grupo'>Comunión 1</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeones2doCom.png')}>
                    <img src='/campeonato/campeones2doCom.png' />
                    <div className='data'>
                        <p className='nombre'>Leones de Dios</p>
                        <p className='grupo'>Comunión 3</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonas1roCom.jpg')}>
                    <img src='/campeonato/campeonas1roCom.jpg' />
                    <div className='data'>
                        <p className='nombre'>Campeonas de Fútbol</p>
                        <p className='grupo'>Reconciliación 2</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeones1roCom.jpg')}>
                    <img src='/campeonato/campeones1roCom.jpg' />
                    <div className='data'>
                        <p className='nombre'>Soldados de Jesús</p>
                        <p className='grupo'>Reconciliación 3</p>
                    </div>
                </div>
                <div className='cont-camp' onClick={() => setFoto('/campeonato/campeonIniciacionM.jpg')}>
                    <img src='/campeonato/campeonIniciacionM.jpg' />
                    <div className='data'>
                        <p className='nombre'>Niños Guerreros de Dios</p>
                        <p className='grupo'>Iniciación 1</p>
                    </div>
                </div>
            </div>

            {
                foto && <Modal background='#FFFFFFDD' onClose={(e) => setFoto(e)} >
                    <img className='foto-pri' src={foto} />
                </Modal>
            }

            <style jsx>{`
                .cont{
                    margin: 0px 4% 50px 4%;
                    width: 92%;
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
                    margin-bottom: 15px;
                }

                .campeones{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .cont-camp{
                    position: relative;
                    margin: 20px;
                    width: calc((100% - 120px) / 3);
                    height: 240px;
                    border-radius: 15px;
                    box-shadow: 2px 2px 4px 0px #777;
                    cursor: pointer;
                    overflow: hidden;
                }

                img{
                    width: 100%;
                    height: 100%;
                }

                .data{
                    background: #FFFFFFCC;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: 0;
                    padding: 5px 20px 6px 10px;
                    text-align: right;
                }

                .nombre{
                    font-weight: bold;
                }

                .grupo{
                    font-weight: 200;
                }

                .foto-pri{
                    height: calc(100vh - 100px);
                }

                @media screen and (max-width: 768px){
                    .cont{
                        margin: 0px 15px 25px 15px;
                        width: calc(100% - 30px);
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

                    .cont-camp{
                        margin: 0 0 20px 0;
                        width: calc((100% - 16px) / 2);
                        height: 140px;
                        border-radius: 10px;
                    }

                    .data{
                        padding: 3px 10px 3px 8px;
                    }

                    .nombre{
                        font-size: 12px;
                    }

                    .grupo{
                        font-size: 12px;
                    }

                    .foto-pri{
                        width: 100vw;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    )
}