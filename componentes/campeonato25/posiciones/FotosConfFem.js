import { useState } from 'react'
import Modal from '../../../componentes/generales/Modal'

export default function FotosConfFem({ mas }){
    const [foto, setFoto] = useState(null)

    return(
        <div style={{}}>
            {
                !mas ? 
                    <>
                        <img 
                                className='img1'
                                src='/campeonato/subcampeonas2doConf.jpg'
                                onClick={() => setFoto('/campeonato/subcampeonas2doConf.jpg')}
                            />
                        <img
                            className='img2'
                            src='/campeonato/campeonas2doConf.jpg'
                            onClick={() => setFoto('/campeonato/campeonas2doConf.jpg')}
                        />
                        <div className='data' >
                            <p>Estrellitas de María</p>
                            <p>Gálatas 1, 10</p>
                        </div>
                    </>
                :
                    <>
                        <img
                            className='img1'
                            src='/campeonato/campeones2doConf.jpg'
                            onClick={() => setFoto('/campeonato/campeones2doConf.jpg')}
                        />
                        <img 
                            className='img2'
                            src='/campeonato/subcampeones2doConf.jpg'
                            onClick={() => setFoto('/campeonato/subcampeones2doConf.jpg')}
                        />
                        <div className='data' >
                            <p>Confirmación FC</p>
                            <p>GDL</p>
                        </div>
                    </>
            }

            {
                foto && <Modal background='#FFFFFFDD' onClose={(e) => setFoto(e)} >
                    <img className='foto-pri' src={foto} />
                </Modal>
            }          

            <style jsx>{`
                .img1{
                    width: 330px;
                    height: 200px;
                    border-radius: 15px 0 0 15px;
                    margin-right: 5px;
                }

                .img2{
                    width: 330px;
                    height: 200px;
                    border-radius: 0 15px 15px 0;
                    margin-left: 5px;
                }

                .data{
                    display: flex;
                    justify-content: space-around;
                    margin: -28px 0 10px 0;
                }

                .data p{
                    background: white;
                    padding: 0 10px;
                    border-radius: 5px;
                }

                .foto-pri{
                    height: calc(100vh - 100px);
                }

                @media screen and (max-width: 768px){
                    .img1{
                        width: calc(50vw - 20px);
                        height: 140px;
                        border-radius: 10px 0 0 10px;
                        margin-right: 4px;
                    }

                    .img2{
                        width: calc(50vw - 20px);
                        height: 140px;
                        border-radius: 0 10px 10px 0;
                        margin-left: 4px;
                    }

                    .data{
                        display: flex;
                        justify-content: space-around;
                        margin: -24px 0 10px 0;
                    }

                    .data p{
                        font-size: 12px;
                        padding: 0 10px;
                        border-radius: 5px;
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
