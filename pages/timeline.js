import AppLayout from '../componentes/layout'
import ItemTime from '../componentes/timeline/ItemTime'

export default function Timenine(){

    return(
        <AppLayout titulo='San Carlos - Timeline' name='Timeline'>
            <section>
                <ItemTime
                    title='Inauguración KT Campeonato 2025 [Tardes]'
                    desc='Vuelve el campeonato de la Catequesis San Carlos, un espacio de sana competencia y trabajo en equipo.'
                    img='/inag_kt_camp_2025_1.jpg'
                    date='11 enero 2025'
                />
                <ItemTime
                    title='Inauguración KT Campeonato 2025 [Tardes]'
                    desc='Vuelve el campeonato de la Catequesis San Carlos, un espacio de sana competencia y trabajo en equipo.'
                    img='/inag_kt_camp_2025_1.jpg'
                    date='11 enero 2025'
                />
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 50px 4%;
                    width: 92%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 10px 15px 20px 15px;
                        width: calc(100% - 30px);
                    }
                }
            `}</style>
        </AppLayout>
    )
}