import Equipo from './Equipo'
import FormatoConfFem from './FormatoConfFem'
import FormatoConfMas from './FormatoConfMas'

const ConfirmacionKT25 = () => {

    return (
        <section>
            <p className='pf1'>Campeonato CONFIRMACIÓN 2025</p>
            <p className='pf2 st'>
                Detalle de formato que se empleara para el campeonato.
            </p>
            <strong className='strongo' style={{ marginBottom: '10px' }}>Equipos Participantes</strong>
            <strong>Primero de Confirmación</strong>
            <div className='cont-logos'>
                <Equipo
                    nombre='Los Águilas'
                    paralelo='1ro Confir. 1 (M)'
                    logo='11M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Águilas'
                    paralelo='1ro Confir. 1 (F)'
                    logo='11F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Santa Fé (M)'
                    paralelo='1ro Confir. 2 (M)'
                    logo='12M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Santa Fé (F)'
                    paralelo='1ro Confir. 2 (F)'
                    logo='12F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Los Angeles Negros'
                    paralelo='1ro Confir. 3 (M)'
                    logo='13M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Las Angeles Negros'
                    paralelo='1ro Confir. 3 (F)'
                    logo='13F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Newcastels (M)'
                    paralelo='1ro Confir. 4 (M)'
                    logo='14M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Newcastels (F)'
                    paralelo='1ro Confir. 4 (F)'
                    logo='14F'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <strong>Segundo de Confirmación</strong>
            <div className='cont-logos'>
                <Equipo
                    nombre='Santos y Religiosos F.C.'
                    paralelo='2do Confir. 1 (M)'
                    logo='21M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Galatas 1, 10'
                    paralelo='2do Confir. 1 (F)'
                    logo='21F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Confirmación F.C. (M)'
                    paralelo='2do Confir. 2 (M)'
                    logo='22M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Confirmación F.C. (F)'
                    paralelo='2do Confir. 2 (F)'
                    logo='22F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Los Pastores'
                    paralelo='2do Confir. 3 (M)'
                    logo='23M'
                    color='blue'
                    borde='blue'
                    letter='white'
                />
                <Equipo
                    nombre='Génesis'
                    paralelo='2do Confir. 3 (F)'
                    logo='23F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Predicadores'
                    paralelo='2do Confir. 4 (M)'
                    logo='24M'
                    color='white'
                    borde='black'
                    letter='black'
                    mas='1'
                />
                <Equipo
                    nombre='GDL'
                    paralelo='2do Confir. 4 (M2)'
                    logo='24M'
                    color='white'
                    borde='black'
                    letter='black'
                    mas='2'
                />
                <Equipo
                    nombre='Club GNU'
                    paralelo='2do Confir. 4 (F)'
                    logo='24F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Traicioneros de Judas'
                    paralelo='2do Confir. 5 (M)'
                    logo='25M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Traicioneras de Judas'
                    paralelo='2do Confir. 5 (F)'
                    logo='25F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Fuerza Divina'
                    paralelo='2 Confir. Ángeles (M)'
                    logo='2AM'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Estrellitas de María'
                    paralelo='2 Confir. Ángeles (F)'
                    logo='2AF'
                    color='black'
                    borde='black'
                    letter='white'
                />
            </div>
            <FormatoConfMas />
            <FormatoConfFem />
            
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

export default ConfirmacionKT25