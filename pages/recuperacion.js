import { IoIosCheckmarkCircle,IoIosCloseCircle } from 'react-icons/io'
import firebase from '../services/dBase' 
import AppLayout from '../componentes/layout'
import Footer from '../componentes/layout/footer'

const Recuperacion = ({data}) => {
    return (
        <>
            <AppLayout 
                titulo={`San Carlos - 2 Confirmación | Recuperación`}
                name='2DO CONFIRMACIÓN'
            >
                <div className='lista'>
                    <div className='arriba'>
                        <p className='nombre2'></p>
                        <div className='dia'>
                            <p className='nota2'>Martes 15 Junio</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota2'>Miercoles 16 Junio</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota2'>Jueves 17 Junio</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota2'>Viernes 18 Junio</p>
                        </div>
                    </div>
                    <div className='arriba'>
                        <p className='nombre2'>Alumno</p>
                        <div className='dia'>
                            <p className='nota'>Asistencia</p>
                            <p className='nota'>Apuntes</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota'>Asistencia</p>
                            <p className='nota'>Apuntes</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota'>Asistencia</p>
                            <p className='nota'>Apuntes</p>
                        </div>  
                        <div className='dia'>
                            <p className='nota'>Asistencia</p>
                            <p className='nota'>Apuntes</p>
                        </div>
                    </div>
                    {
                        data.map(item => 
                            <div key={item.id} className='alumno'>
                                <p className='nombre'>{item.nombre}</p>
                                <div className='dia'>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[0] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[0] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[1] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[1] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                </div>
                                <div className='dia'>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[2] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[2] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[3] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[3] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                </div>
                                <div className='dia'>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[4] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[4] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[5] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[5] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                </div>
                                <div className='dia'>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[6] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[6] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                    <p className='nota'>
                                        {
                                            (item.notas && item.notas[7] == '1') ? 
                                                <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} /> 
                                                : (item.notas && item.notas[7] == '0') && <IoIosCloseCircle style={{fontSize: '25px', color: 'red'}} />
                                        }
                                    </p>
                                </div>
                            </div>
                        ) 
                    }
                </div>

                <Footer /> 
            </AppLayout>

            <style jsx>{`
                .lista{
                    width: 100%;
                    padding: 0 100px 20px 100px;
                }

                .alumno{
                    background: white;
                    margin: 10px 0;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                }

                .arriba{
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                }

                .nombre{
                    width: 400px;
                    font-size: 20px;
                    padding: 15px 10px 15px 0;
                }

                .nombre2{
                    width: 400px;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 5px 10px 10px 0;
                }

                .dia{
                    display: flex;
                    padding: 0 10px;
                    border-left: 2px solid #ccdae8;
                }

                .nota{
                    width: 80px;
                    font-weight: 300;
                    display: flex;
                    justify-content: center;
                }

                .nota2{
                    width: 160px;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                }

                @media screen and (max-width: 768px){
                    .lista{
                        margin-top: 20px;
                        padding-right: 0;
                        width: 90%;
                    }
    
                    .nombre{
                        font-size: 18px;
                        padding: 12px 10px 12px 0;
                    }
                }
            `}</style>
        </> 
    )
}

Recuperacion.getInitialProps = async () => {
    const data = await firebase.firestore().collection('recuperacion').get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                nombre: alumno.data().nombre,
                notas: alumno.data().notas
            })
        })
        return (alumnos)
    })
    return {data}
}  

export default Recuperacion