import { useRouter } from 'next/router'
import ItemAgenda from './ItemAgenda'

const MiniAgenda = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Próximas actividades</p>
            <div className='cont'>
                <ItemAgenda
                    color='#EE1C21'
                    title='JESUSCRIBE'
                    subtitle='1ro Comunión'
                    date='Sábado 03 mayo 2025'
                    place='Teatro Catequesis'
                    hour='10:30'
                />
                <ItemAgenda
                    color='#EE1C21'
                    title='JESUSCRIBE'
                    subtitle='1ro Confirmación'
                    date='Sábado 03 mayo 2025'
                    place='Teatro Catequesis'
                    hour='15:30'
                />
                <ItemAgenda
                    main
                    title='Catequesis'
                    subtitle='Clases Normales'
                    date='Sábado 03 mayo 2025'
                    place='Centros catequeticos'
                    hour={`Según horario`}
                >
                    <strong>Centro</strong>
                    <p className='nt lg'>Mañana: 08:45 - 11:30</p>
                    <p className='nt lg'>Tarde: 13:45 - 16:30</p>
                    <strong>Los Ángeles</strong>
                    <p className='nt lg'>Mañana: 09:00 - 11:30</p>
                    <p className='nt lg'>Tarde: 14:00 - 16:30</p>
                    <p className='lg'><strong>Molinopamba:</strong> 08:00 - 11:00</p>
                    <p className='lg'><strong>Auxiliadora:</strong> 14:00 - 17:00</p>
                    <p className='lg'><strong>Dolorosa:</strong> 14:00 - 17:00</p>
                </ItemAgenda>
                {/* <ItemAgenda
                    title='2do Confirmación'
                    subtitle='Nuevo Pentecostes'
                    date='Sábado 26 abril 2025'
                    place='Parque Central'
                    hour='13:00'
                /> */}
                <ItemAgenda
                    title='Semifinales'
                    subtitle='Campeonato 2025'
                    date='Domingo 04 mayo 2025'
                    place='Patio Catequesis'
                    hour='Ver horarios'
                    url='/campeonato'
                />
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0px 4% 50px 4%;
                    margin: 35px 4% 0 4%;
                    width: 92%;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 2px solid brown;
                }

                .title{
                    margin: -17px auto 0 auto;
                    width: 220px;
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

                strong{
                    font-weight: 500;
                }

                .lg{
                    font-weight: 200
                }

                .nt{
                    margin-top: -3px;
                    margin-left: 8px;
                }

                @media screen and (max-width: 768px){
                    section{
                        font-family: 'Lato', sans-serif;
                        margin: 10px 15px 20px 15px;
                        margin: 20px 15px 0 15px;
                        width: calc(100% - 30px);
                    }

                    .divo{
                        border: 1px solid brown;
                    }

                    .title{
                        margin-bottom: 20px;
                    }

                    .cont{
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </section> 
    )
}

export default MiniAgenda