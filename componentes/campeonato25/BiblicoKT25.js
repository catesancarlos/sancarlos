import Equipo from './Equipo'
import FormatoBibliFem from './FormatoBibliFem'
import FormatoBibliMas from './FormatoBibliMas'

const BiblicoKT25 = () => {

    return (
        <section>
            <p className='pf1'>Campeonato AÑO BÍBLICO 2025</p>
            <p className='pf2 st'>
                Detalle de formato que se empleara para el campeonato.
            </p>
            <strong className='strongo'>Equipos Participantes</strong>
            <div className='cont-logos'>
                <Equipo
                    nombre='Los Hermanos de Jesus'
                    paralelo='Año Bíblico 1 (M)'
                    logo='A1M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Herederas de Dios'
                    paralelo='Año Bíblico 1 (F)'
                    logo='A1F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Los Misioneros'
                    paralelo='Año Bíblico 2 (M)'
                    logo='A2M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Misioneras'
                    paralelo='Año Bíblico 2 (F)'
                    logo='A2F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Los Ángeles Bíblicos'
                    paralelo='Año Bíblico 3 (M)'
                    logo='A3M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Equipo de Dios'
                    paralelo='Año Bíblico 4 (M1)'
                    logo='A4M'
                    color='red'
                    borde='red'
                    letter='white'
                    mas='1'
                />
                <Equipo
                    nombre='Equipo Glorioso'
                    paralelo='Año Bíblico 4 (M2)'
                    logo='A4M'
                    color='blue'
                    borde='blue'
                    letter='white'
                    mas='2'
                />
                <Equipo
                    nombre='Mujeres de Nazareth'
                    paralelo='Año Bíblico 4 (F)'
                    logo='A4F'
                    color='red'
                    borde='red'
                    letter='white'
                />
                <Equipo
                    nombre='Bíblicos 5'
                    paralelo='Año Bíblico 5 (M)'
                    logo='A5M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Bíblicas 5'
                    paralelo='Año Bíblico 5 (F)'
                    logo='A5F'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <FormatoBibliMas />
            <FormatoBibliFem />
            
            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 15px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
                }

                .strongo{
                    background: #245590;
                    padding: 6px 10px 8px 10px;
                    color: white;
                    text-align: center;
                    letter-spacing: 1px;
                    display: block;
                    border-radius: 8px;
                }

                .cont-logos{
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }

                .st{
                    margin-top: 5px;
                    margin-bottom: 25px;
                }

                .sb{
                    margin-top: 25px;
                }

                .sa{
                    margin-bottom: 0px;
                }

                @media screen and (max-width: 768px){
                    .cont-logos{
                        width: 100%;
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default BiblicoKT25