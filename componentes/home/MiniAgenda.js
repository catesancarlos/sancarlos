import { useRouter } from 'next/router'
import ItemAgenda from './ItemAgenda'
import ItemAgendaWimg from './ItemAgendaWimg'

const ITEMS_GROUP = 5

const MiniAgenda = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Próximas actividades</p>
            <div className='cont'>
                <ItemAgendaWimg
                    itemsgroup={ITEMS_GROUP}
                    color='#245590'
                    title='INAUGURACIÓN 2026'
                    subtitle='Sábado 10 enero - 14h00'
                />
                <ItemAgenda
                    itemsgroup={ITEMS_GROUP}
                    color='#cd8202'
                    title='Catequesis Familiar'
                    subtitle='SEGUIMIENTO'
                    date='Viernes 09 enero 2026'
                    place='Teatro Catequesis'
                    hour='19:00'
                />
                <ItemAgenda
                    itemsgroup={ITEMS_GROUP}
                    color='#cd8202'
                    title='Catequesis Familiar'
                    subtitle='CONFIRMACIÓN'
                    date='Viernes 09 enero 2026'
                    place='Templo Parroquial'
                    hour='19:00'
                />
                <ItemAgenda
                    itemsgroup={ITEMS_GROUP}
                    color='#cd8202'
                    title='Catequesis Familiar'
                    subtitle='AÑO BÍBLICO'
                    date='Sábado 10 enero 2026'
                    place='Teatro Catequesis'
                    hour='18:00'
                />
                {/* <ItemAgenda
                    main
                    title='Catequesis'
                    subtitle='Segundos de Confirmación'
                    date='Sábado 24 mayo 2025'
                    place='Centros catequeticos'
                    hour={`Según horario`}
                >
                    <strong>Centro</strong>
                    <p className='nt lg'>Mañana: 08:45 / Tarde: 13:45 - 11:30</p>
                    <p className='nt lg'>Tarde: 13:45  - 16:30</p>
                    <strong>Los Ángeles</strong>
                    <p className='nt lg'>Mañana: 09:00 / Tarde: 14:00 - 11:30</p>
                    <p className='nt lg'>Tarde: 14:00 - 16:30</p>
                    <p className='lg'><strong>Centro:</strong> 13:45 - 16:30</p>
                    <p className='lg'><strong>Los Ángeles:</strong> 14:00 - 16:30</p>
                    <p className='lg'><strong>Molinopamba:</strong> 08:00 - 11:00</p>
                    <p className='lg'><strong>Auxiliadora:</strong> 14:00 - 17:00</p>
                    <p className='lg'><strong>Dolorosa:</strong> 14:00 - 17:00</p>
                </ItemAgenda>
                */}
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
                    justify-content: flex-start;
                }

                strong{
                    font-weight: 500;
                }

                .lg{
                    font-size: 16px;
                    font-weight: 200;
                    margin-bottom: 4px;
                }

                .nt{
                    /* margin-top: -3px; */
                    margin-top: 0;
                    margin-left: 8px;
                }

                @media screen and (max-width: 768px){
                    section{
                        font-family: 'Lato', sans-serif;
                        margin: 20px 15px 0 15px;
                        margin: 0px 15px 30px 15px;
                        width: calc(100% - 30px);
                    }

                    .divo{
                        border: 1px solid brown;
                    }

                    .title{
                        width: 200px;
                        margin: -13px auto 0 auto;
                        font-size: 19px;
                        margin-bottom: 20px;
                    }

                    .cont{
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }

                    /* Normal: Borrado de aqui hacia abajo */
                    .lg{
                        font-size: 13px;
                    }

                    .nt{
                        margin-left: 6px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default MiniAgenda