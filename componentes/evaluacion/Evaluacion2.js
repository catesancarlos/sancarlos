import { useState, useEffect } from 'react'
import firebase from '../../services/dBase'
import preguntas1 from '../../datos/ev1data2'
import preguntas2 from '../../datos/ev2data2'
import preguntas3 from '../../datos/ev3data2'
import Tiempo from './tiempo'
import UnaRespuestaNew from './UnaRespuestaNew'
import DosRespuestasNew from './DosRespuestasNew'
import VerdaderoNew from './VerdaderoNew'

export default function Evaluacion2 ({ prueba, onTerminar, fin, sesion, paralelo, persona, data }) {
    const [preguntas, setPreguntas] = useState(null)

    useEffect(() => {
        if(prueba == 1) setPreguntas(preguntas1)
        if(prueba == 2) setPreguntas(preguntas2)
        if(prueba == 0) setPreguntas(preguntas3)
    }, [preguntas])

    if(!preguntas) { 
        return <div>Cargando preguntas...</div>
    }

    const handleTimeOut = e => {
        if(e == true) {
            handleTerminar()
        }
    }

    const handleTerminar = () => {
        var nota1a = sessionStorage.getItem('p1o0') ? JSON.parse(sessionStorage.getItem('p1o0')) : [false, 0]
        var nota1b = sessionStorage.getItem('p1o1') ? JSON.parse(sessionStorage.getItem('p1o1')) : [false, 0]
        var nota1c = sessionStorage.getItem('p1o2') ? JSON.parse(sessionStorage.getItem('p1o2')) : [false, 0]
        var nota1d = sessionStorage.getItem('p1o3') ? JSON.parse(sessionStorage.getItem('p1o3')) : [false, 0]
        var nota2 = sessionStorage.getItem('p2') ? JSON.parse(sessionStorage.getItem('p2')) : [false, false, false, false, 0]
        var nota3 = sessionStorage.getItem('p3') ? JSON.parse(sessionStorage.getItem('p3')) : [false, false, false, false, 0]
        var nota4 = sessionStorage.getItem('p4') ? JSON.parse(sessionStorage.getItem('p4')) : [null, 0]
        var nota5 = sessionStorage.getItem('p5') ? JSON.parse(sessionStorage.getItem('p5')) : [false, false, false, false, 0]
        var nota6 = sessionStorage.getItem('p6') ? JSON.parse(sessionStorage.getItem('p6')) : [false, false, false, false, 0]
        var nota7 = sessionStorage.getItem('p7') ? JSON.parse(sessionStorage.getItem('p7')) : [null, 0]
        var nota8 = sessionStorage.getItem('p8') ? JSON.parse(sessionStorage.getItem('p8')) : [false, false, false, false, 0]
        var nota9a = sessionStorage.getItem('p9o0') ? JSON.parse(sessionStorage.getItem('p9o0')) : [false, 0]
        var nota9b = sessionStorage.getItem('p9o1') ? JSON.parse(sessionStorage.getItem('p9o1')) : [false, 0]
        var nota9c = sessionStorage.getItem('p9o2') ? JSON.parse(sessionStorage.getItem('p9o2')) : [false, 0]
        var nota9d = sessionStorage.getItem('p9o3') ? JSON.parse(sessionStorage.getItem('p9o3')) : [false, 0]
        var nota10 = sessionStorage.getItem('p10') ? JSON.parse(sessionStorage.getItem('p10')) : [false, false, false, false, 0]
        var nota11 = sessionStorage.getItem('p11') ? JSON.parse(sessionStorage.getItem('p11')) : [null, 0]
        var nota12 = sessionStorage.getItem('p12') ? JSON.parse(sessionStorage.getItem('p12')) : [false, false, false, false, 0]
        var nota13 = sessionStorage.getItem('p13') ? JSON.parse(sessionStorage.getItem('p13')) : [null, 0]
        var nota14 = sessionStorage.getItem('p14') ? JSON.parse(sessionStorage.getItem('p14')) : [false, false, false, false, 0]
        firebase.firestore().collection(`${paralelo}`).doc(`${persona}`).set(
            {
                p1o0: nota1a,
                p1o1: nota1b,
                p1o2: nota1c,
                p1o3: nota1d,
                p2: nota2,
                p3: nota3,
                p4: nota4,
                p5: nota5,
                p6: nota6,
                p7: nota7,
                p8: nota8,
                p9o0: nota9a,
                p9o1: nota9b,
                p9o2: nota9c,
                p9o3: nota9d,
                p10: nota10,
                p11: nota11,
                p12: nota12,
                p13: nota13,
                p14: nota14,
            },
            {merge: true}
        )
        onTerminar(nota1a[0] + nota1b[0] + nota1c[0] + nota1d[0] + nota2[0] + nota3[0] + nota4[0] + nota5[0] + nota6[0] + nota7[0] + nota8[0] + nota9a[0] + nota9b[0] + nota9c[0] + nota9d[0] + nota10[0] + nota11[0] + nota12[0] + nota13[0] + nota14[0])
    }

    return(
        <>
            {(sesion != 'catequista') && <Tiempo timeOut={handleTimeOut} fin={fin} conteo={sesion} />}
            {
                sesion == 'catequista' &&
                <div className='info'>
                    {
                        (data.ev2 && data.ev2 != 0) ?
                        <>
                            <p>Calificación:  <strong>{data.ev2}/10</strong></p>
                            <p>Hora de inicio: <strong>{data.inicioev2}</strong></p>
                            <p>Hora de envio: <strong>{data.envioev2}</strong></p>
                        </>
                        : <strong>Esta evaluación no ha sido resuelta todavía</strong>
                    }
                </div>
            }
            <DosRespuestasNew {...preguntas[0]} datos={sesion == 'catequista' ? [data.p1o0, data.p1o1, data.p1o2, data.p1o3] : [null, null, null, null]} />
            <UnaRespuestaNew {...preguntas[1]} datos={sesion == 'catequista' ? data.p2 : null} />
            <UnaRespuestaNew {...preguntas[2]} datos={sesion == 'catequista' ? data.p3 : null} />
            <VerdaderoNew {...preguntas[3]} datos={sesion == 'catequista' ? data.p4 : null} />
            <UnaRespuestaNew {...preguntas[4]} datos={sesion == 'catequista' ? data.p5 : null} />
            <UnaRespuestaNew {...preguntas[5]} datos={sesion == 'catequista' ? data.p6 : null} />
            <VerdaderoNew {...preguntas[6]} datos={sesion == 'catequista' ? data.p7 : null} />
            <UnaRespuestaNew {...preguntas[7]} datos={sesion == 'catequista' ? data.p8 : null} />
            <DosRespuestasNew {...preguntas[8]} datos={sesion == 'catequista' ? [data.p9o0, data.p9o1, data.p9o2, data.p9o3] : [null, null, null, null]} />
            <UnaRespuestaNew {...preguntas[9]} datos={sesion == 'catequista' ? data.p10 : null} />
            <VerdaderoNew {...preguntas[10]} datos={sesion == 'catequista' ? data.p11 : null} />
            <UnaRespuestaNew {...preguntas[11]} datos={sesion == 'catequista' ? data.p12 : null} />
            <VerdaderoNew {...preguntas[12]} datos={sesion == 'catequista' ? data.p13 : null} />
            <UnaRespuestaNew {...preguntas[13]} datos={sesion == 'catequista' ? data.p14 : null} />
            {sesion != 'catequista' && <div className='enviar-boton' onClick={handleTerminar}>Terminar y Enviar</div>}

            <style jsx>{`
                .info{
                    background: rgba(0, 0, 0, 0.5);
                    width: 60%;
                    margin: 0 auto 25px auto;
                    padding: 10px 20px 12px 20px;
                    color: white;
                    text-align: right;
                    border-radius: 20px;
                }

                .enviar-boton{
                    width: 60%;
                    background: brown;
                    font-size: 25px;
                    font-weight: bold;
                    margin: 10px auto 70px auto;
                    text-align: center;
                    color: white;
                    padding: 20px 0;
                    border-radius: 20px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    .info{
                        width: 100%;
                        margin: 0 auto 10px auto;
                        padding: 10px 20px 12px 20px;
                        color: white;
                        border-radius: 20px 20px 0 0;
                    }

                    .enviar-boton{
                        width: 100%;
                        margin: 0 auto 0 auto;
                        font-size: 25px;
                        padding: 25px 0;
                        border-radius: 0 0 25px 25px;
                    }
                }
            `}</style>
        </>
    )
}