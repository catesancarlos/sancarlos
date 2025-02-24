import { useRouter } from 'next/router'
import ItemAgenda from './ItemAgenda'

const MiniAgenda = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Próximas actividades</p>
            <div className='cont'>
                {/* <ItemAgenda
                    title='Catequesis Familiar'
                    subtitle='1ro de Confirmación'
                    date='Viernes 21 febrero 2025'
                    place='Teatro Catequesis'
                    hour='19:00'
                />
                <ItemAgenda
                    tr
                    title='Catequesis Familiar'
                    subtitle='Año Biblico'
                    date='Viernes 14 febrero 2025'
                    place='Teatro Catequesis'
                    hour='19:00'
                /> */}
                <ItemAgenda
                    /* main */
                    title='Catequesis'
                    subtitle='NO hay clases'
                    date='Sábado 01 marzo 2025'
                    place='Vacaciones Carnaval'
                    hour={`Regreso 08 marzo 2025`}
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
                    title='Sexta Semana'
                    subtitle='Campeonato 2025'
                    date='Sábado 22 febero 2025'
                    place='Patio Catequesis'
                    hour='16:40'
                />
                <ItemAgenda
                    color='#6600A1'
                    title='BINGO'
                    subtitle='SOLIDARIO'
                    date='Sábado 22 febero 2025'
                    place='Teatro Catequesis'
                    hour='20:00'
                />
                <ItemAgenda
                    title='Sexta Semana'
                    subtitle='Campeonato 2025'
                    date='Domingo 23 febero 2025'
                    place='Patio Catequesis'
                    hour='Ver horarios'
                    url='/campeonato'
                /> */}
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