import { useRouter } from 'next/router'

import ItemCalendario from '../campeonato25/ItemCalendario'

const CampSection = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Campeonato 2025</p>
            <div className='cont-partidos'>
                <p className='pf1 st'>Partidos de la semana:</p>
                <ItemCalendario
                    home
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='08h30'
                    genero='M'
                    equipos={['Confirmación F.C.', 'Los Pastores']}
                    paralelos={['2do Confir. 2 (M)', '2do Confir. 3 (M)']}
                    logos={['22M', '23M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['blue', 'blue', 'white']
                    }}
                />
                <ItemCalendario
                    home
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='09h30'
                    genero='F'
                    equipos={['Las Galatas 1, 10', 'Traicioneras como Judas']}
                    paralelos={['2do Confir. 1 (F)', '2do Confir. 5 (F)']}
                    logos={['21F', '25F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    home
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='10h30'
                    genero='F'
                    equipos={['Confirmación F.C.', 'Club GNU']}
                    paralelos={['2do Confir. 2 (F)', '2do Confir. 4 (F)']}
                    logos={['22F', '24F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    home
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='11h30'
                    genero='M'
                    equipos={['Santos y Religiosos F.C.', 'GDL']}
                    paralelos={['2do Confir. 1 (M)', '2do Confir. 4 (M2)']}
                    logos={['21M', '24M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[, 2]}
                />
            </div>
            <div className='camp-op'>
                <div className='h1'>
                    <p className='h1-t'>Campeonato</p>
                    <p className='h2-t'>Catequesis 2025</p>
                </div>
                <div className='hg'>
                    <p className='hg-t' onClick={() => router.push('/campeonato')}>Año Bíblico</p>
                </div>
                <div className='hg'>
                    
                    <p className='hg-t' onClick={() => router.push('/campeonato')}>Confirmación</p>
                </div>
                <div className='hg'>
                    <p className='hg-t' onClick={() => router.push('/campeonato')}>Catequistas</p>
                </div>
                <div className='hg'>
                    <p className='hg-t' onClick={() => router.push('/campeonato')}>Los Ángeles</p>
                </div>
            </div>

            <style jsx>{`
                section{
                    margin: 45px 4% 50px 4%;
                    width: 92%;
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;
                }

                .divo{
                    display: none;
                }

                .title{
                    display: none;
                }

                .cont-partidos{
                    margin-top: 0px;
                    width: calc(50% - 10px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .pf1{
                    color: #000000CC;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                }

                .st{
                    margin-bottom: 12px;
                }

                .camp-op{
                    margin-top: 6px;
                    height: 146px;
                    width: calc(50% - 20px);
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: flex-start;
                }

                .h1{
                    background: #245590;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    height: 74px;
                    width: 100%;
                    padding: 10px 20px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 20px 3px 3px 3px;
                    margin-bottom: 12px;
                }

                .h1-t{
                    letter-spacing: 1px;
                }

                .h2-t{
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 2px;
                }

                .hg{
                    margin-right: 12px;
                    background: #00000077;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    height: 74px;
                    width: calc(25% - 9px);
                    padding: 10px 20px;
                    color: black;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    cursor: pointer;
                }

                .hg:last-child{
                    margin-right: 0;
                    border-radius: 3px 3px 10px 3px;
                }

                .hg-t{
                    color: white;
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 1px;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 20px 15px 60px 15px;
                        width: calc(100% - 30px);
                        display: flex;
                        flex-direction: column;
                    }

                    .divo{
                        display: block;
                        margin-top: 18px;
                        width: 100%;
                        border: 1px solid brown;
                    }

                    .title{
                        display: block;
                        margin: -17px auto 0 auto;
                        width: 200px;
                        background: #F2F8F6;
                        color: brown;
                        font-size: 22px;
                        font-weight: bold;
                        text-align: center;
                        margin-bottom: 18px;
                    }

                    .cont-partidos{
                        width: 100%;
                    }

                    .cont-partidos .pf1{
                        font-size: 18px;
                        font-size: 400;
                    }

                    .camp-op{
                        margin-top: 0;
                        width: 100%;
                        height: auto;
                    }

                    .h1{
                        display: none;
                    }

                    .hg{
                        background: #000000;
                        margin-left: 0px;
                        margin-top: 14px;
                        height: 45px;
                        width: calc(50% - 7px);
                        padding: 10px 20px;
                        color: white;
                        border-radius: 10px;
                    }

                    .hg:nth-child(2){
                        margin-right: 14px;
                    }

                    .hg:nth-child(3){
                        margin-right: 0;
                    }

                    .hg:nth-child(4){
                        margin-right: 14px;
                    }

                    .hg:last-child{
                        margin-right: 0;
                        border-radius: 10px;
                    }

                    .hg-t{
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: 1px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default CampSection