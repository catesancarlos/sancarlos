/* import { useState, useEffect } from 'react'
import firebase from '../services/dBase' 
import Descripcion from '../componentes/grupo/Descripcion'
import AppLayout from '../componentes/layout'
import Listado from '../componentes/grupo/Listado'

export default function Grupo({ controles, listado }) {
    const [opcion, setOpcion] = useState('descripcion')
    const [grupo, setGrupo] = useState('Segundo de Confirmación A')
    const [isPC, setIsPC] = useState(true)

    useEffect(() => {
        if(window.innerWidth > 1024) setIsPC(true)  
        else setIsPC(false)      
    }, [isPC])

    return(
        <AppLayout name='Segundo de Confirmación A' titulo='2 Confirmación A'>
            <div className='container'>
                <div className='menu'>
                    <p
                        onClick={() => setOpcion('descripcion')}
                    >
                        Descripción
                    </p>
                    <p
                        onClick={() => setOpcion('participantes')}
                    >Participantes</p>
                    
                </div>
                <div className='principal'>
                    {
                        opcion == 'descripcion' ?
                            <Descripcion grupo={grupo} datos={controles} />
                        : opcion == 'participantes' ? 
                            <Listado listado={listado} isPC={isPC} />
                        : 'Principal'
                    }
                </div>
            </div>


            <style jsx>{`
                .container{
                    margin: 0 60px 0 50px;
                    display: flex;
                    justify-content: space-between;
                }

                .menu{
                    width: 20%;       
                }

                .menu p{
                    background: white;
                    color: brown;
                    font-size: 18px;
                    line-height: 1em;
                    padding: 8px 10px 10px 10px;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    cursor: pointer;
                }

                .principal{
                    width: 75%;
                    padding-top: 10px;
                    
                }

                .input-alumno{
                    margin-right: 10px;
                    outline: none;
                    border: none;
                    border: 1px solid black;
                    border-radius: 5px;
                }

                .anchito{
                    width: 90%;
                }

                
            `}</style>
        </AppLayout>
    )
}

Grupo.getInitialProps = async ({query}) => {
    const listado = await firebase.firestore().collection('2confa').get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                nombre: alumno.data().nombre,
                celular: alumno.data().celular
            }); 
        })
        return (alumnos)
    })
    const controles = await firebase.firestore().collection('2confa-controles').doc('info-general').get()
    .then(dato => {
        return (dato.data())
    })
    return {controles, listado}
}   */