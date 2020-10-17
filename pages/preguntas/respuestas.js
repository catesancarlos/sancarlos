import { useEffect, useState } from 'react'
import firebase from '../../services/dBase' 
import AppLayout from '../../componentes/layout/index'
import { useRouter } from 'next/router'

export default function Respuestas(){
    const router = useRouter()
    const [preguntas, setPreguntas] = useState([])

    const getPreguntas = async () => {
        try{
            firebase.firestore().collection('2confa').where('activa', '==', true).onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setPreguntas(docs);
            })
        } catch(error){
            router.push('/')
        }
    }

    useEffect(() => {
        getPreguntas();
    }, []);

    return(
        <AppLayout name='Segundo de Confirmación A' titulo='2 Confirmación A'>
            {
                preguntas && preguntas.map(pregunta =>
                    <div className='container' key={pregunta.id}>
                        <p className='pregunta'>{pregunta.pregunta}</p>
                        <p className='indicacion'>Respuestas:</p>
                        {
                            pregunta.respuestas.map(respuesta =>
                                <p className='respuesta' key={respuesta}>{respuesta}</p>
                            )
                        }
                    </div>
                ) 
            }


            <style jsx>{`
                .container{
                    margin: 20px 60px 50px 60px;
                    padding: 20px 30px;
                    border: 1px solid white;
                    border-radius: 25px;
                }

                .pregunta{
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 25px;
                }

                .indicacion{
                    color: brown;
                    font-size: 17px;
                    margin-bottom: 12px;
                }

                .respuesta{
                    margin: 10px 0;
                    padding: 5px 10px;
                    background: white;
                    border-radius: 5px;
                }


                @media screen and (max-width: 480px){
                    .container{
                        margin: 20px 0;
                        padding: 10px 20px;
                        border: none;
                    }
            `}</style>
        </AppLayout>
    )
}