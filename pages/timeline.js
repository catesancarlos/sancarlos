import AppLayout from '../componentes/layout'
import ItemTime from '../componentes/timeline/ItemTime'

export default function Timenine(){

    return(
        <AppLayout titulo='San Carlos - Timeline' name='Timeline'>
            <section>
                <ItemTime
                    title='Catequesis Familiar Marzo'
                    desc='Horarios por niveles para la Catequesis familiar del mes de marzo.'
                    img='/cat_fam_mar_25.jpg'
                    date='04 marzo 2025'
                />
                <ItemTime
                    title='Misa Mensual Marzo'
                    desc='El primer sábado de cada mes en la Catequesis tenemos eucaristia, en este mes, estos seran los horarios.'
                    img='/misa_mar_25.jpg'
                    date='04 marzo 2025'
                />
                <ItemTime
                    title='Catequesis Familiar Febrero'
                    desc='Horarios por niveles para la Catequesis familiar del mes de febrero.'
                    img='/cat_fam_feb_25.jpg'
                    date='27 enero 2025'
                />
                <ItemTime
                    title='Misa Mensual Febrero'
                    desc='El primer sábado de cada mes en la Catequesis tenemos eucaristia, en este mes, estos seran los horarios.'
                    img='/misa_feb_25.jpg'
                    date='27 enero 2025'
                />
                <ItemTime
                    title='Inauguración Campeonato 2025 [Tardes]'
                    desc='Vuelve el campeonato de la Catequesis San Carlos, un espacio de sana competencia y trabajo en equipo.'
                    img='/inag_kt_camp_2025_3.jpg'
                    date='11 enero 2025'
                />
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 0 4%;
                    width: 92%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 10px 15px 0px 15px;
                        width: calc(100% - 30px);
                    }
                }
            `}</style>
        </AppLayout>
    )
}