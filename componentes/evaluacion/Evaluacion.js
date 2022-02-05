import Tiempo from './tiempo'
import UnaRespuestaNew from './UnaRespuestaNew'
import DosRespuestasNew from './DosRespuestasNew'
import VerdaderoNew from './VerdaderoNew'
import EliminarRespuesta from './EliminarRespuesta'
import Arrastrar from './Arrastrar'

import db  from '../../services/dBase'
import { doc, updateDoc } from 'firebase/firestore'

export default function Evaluacion ({ prueba, onTerminar, fin, sesion, paralelo, persona, alumno, preguntas }) {
    const handleTimeOut = e => {
        if(e == true) {
            handleTerminar()
        }
    }

    const handleTerminar = () => {
        var nota1 = sessionStorage.getItem('p1') ? JSON.parse(sessionStorage.getItem('p1')) : [0, false, false, false, false]
        var nota2a = sessionStorage.getItem('p2o0') ? JSON.parse(sessionStorage.getItem('p2o0')) : [0, false]
        var nota2b = sessionStorage.getItem('p2o1') ? JSON.parse(sessionStorage.getItem('p2o1')) : [0, false]
        var nota2c = sessionStorage.getItem('p2o2') ? JSON.parse(sessionStorage.getItem('p2o2')) : [0, false]
        var nota2d = sessionStorage.getItem('p2o3') ? JSON.parse(sessionStorage.getItem('p2o3')) : [0, false]
        var nota3 = sessionStorage.getItem('p3') ? JSON.parse(sessionStorage.getItem('p3')) : [0, null]
        var nota4a = sessionStorage.getItem('p4o0') ? JSON.parse(sessionStorage.getItem('p4o0')) : [0, false]
        var nota4b = sessionStorage.getItem('p4o1') ? JSON.parse(sessionStorage.getItem('p4o1')) : [0, false]
        var nota4c = sessionStorage.getItem('p4o2') ? JSON.parse(sessionStorage.getItem('p4o2')) : [0, false]
        var nota4d = sessionStorage.getItem('p4o3') ? JSON.parse(sessionStorage.getItem('p4o3')) : [0, false]
        var nota5 = sessionStorage.getItem('p5') ? JSON.parse(sessionStorage.getItem('p5')) : [0, false, false, false, false]
        var nota6a = sessionStorage.getItem('p6o0') ? JSON.parse(sessionStorage.getItem('p6o0')) : [0, null]
        var nota6b = sessionStorage.getItem('p6o1') ? JSON.parse(sessionStorage.getItem('p6o1')) : [0, null]
        var nota6c = sessionStorage.getItem('p6o2') ? JSON.parse(sessionStorage.getItem('p6o2')) : [0, null]
        var nota6d = sessionStorage.getItem('p6o3') ? JSON.parse(sessionStorage.getItem('p6o3')) : [0, null]
        var nota7 = sessionStorage.getItem('p7') ? JSON.parse(sessionStorage.getItem('p7')) : [0, null]
        var nota8a = sessionStorage.getItem('p8o0') ? JSON.parse(sessionStorage.getItem('p8o0')) : [0, false]
        var nota8b = sessionStorage.getItem('p8o1') ? JSON.parse(sessionStorage.getItem('p8o1')) : [0, false]
        var nota8c = sessionStorage.getItem('p8o2') ? JSON.parse(sessionStorage.getItem('p8o2')) : [0, false]
        var nota8d = sessionStorage.getItem('p8o3') ? JSON.parse(sessionStorage.getItem('p8o3')) : [0, false]
        var nota9a = sessionStorage.getItem('p9o0') ? JSON.parse(sessionStorage.getItem('p9o0')) : [0, false]
        var nota9b = sessionStorage.getItem('p9o1') ? JSON.parse(sessionStorage.getItem('p9o1')) : [0, false]
        var nota9c = sessionStorage.getItem('p9o2') ? JSON.parse(sessionStorage.getItem('p9o2')) : [0, false]
        var nota9d = sessionStorage.getItem('p9o3') ? JSON.parse(sessionStorage.getItem('p9o3')) : [0, false]
        var nota10a = sessionStorage.getItem('p10o0') ? JSON.parse(sessionStorage.getItem('p10o0')) : [0, false]
        var nota10b = sessionStorage.getItem('p10o1') ? JSON.parse(sessionStorage.getItem('p10o1')) : [0, false]
        var nota10c = sessionStorage.getItem('p10o2') ? JSON.parse(sessionStorage.getItem('p10o2')) : [0, false]
        var nota10d = sessionStorage.getItem('p10o3') ? JSON.parse(sessionStorage.getItem('p10o3')) : [0, false]
        var nota10e = sessionStorage.getItem('p10o4') ? JSON.parse(sessionStorage.getItem('p10o4')) : [0, false]
        var nota10f = sessionStorage.getItem('p10o5') ? JSON.parse(sessionStorage.getItem('p10o5')) : [0, false]
        var nota11 = sessionStorage.getItem('p11') ? JSON.parse(sessionStorage.getItem('p11')) : [0, false, false, false, false]
        var nota12 = sessionStorage.getItem('p12') ? JSON.parse(sessionStorage.getItem('p12')) : [0, null]
        
        const productoRef = doc(db, `${paralelo}`, `${persona}`)
        updateDoc(productoRef, { 
            p1: nota1,
            p2o0: nota2a,
            p2o1: nota2b,
            p2o2: nota2c,
            p2o3: nota2d,
            p3: nota3,
            p4o0: nota4a,
            p4o1: nota4b,
            p4o2: nota4c,
            p4o3: nota4d,
            p5: nota5,
            p6o0: nota6a,
            p6o1: nota6b,
            p6o2: nota6c,
            p6o3: nota6d,
            p7: nota7,
            p8o0: nota8a,
            p8o1: nota8b,
            p8o2: nota8c,
            p8o3: nota8d,
            p9o0: nota9a,
            p9o1: nota9b,
            p9o2: nota9c,
            p9o3: nota9d,
            p10o0: nota10a,
            p10o1: nota10b,
            p10o2: nota10c,
            p10o3: nota10d,
            p10o4: nota10e,
            p10o5: nota10f,
            p11: nota11,
            p12: nota12,
        })
        onTerminar(nota1[0] + nota2a[0] + nota2b[0] + nota2c[0] + nota2d[0] + nota3[0] + nota4a[0] + nota4b[0] + nota4c[0] + nota4d[0] + nota5[0] + nota6a[0] + nota6b[0] + nota6c[0] + nota6d[0] + nota7[0] + nota8a[0] + nota8b[0] + nota8c[0] + nota8d[0] + nota9a[0] + nota9b[0] + nota9c[0] + nota9d[0] + nota10a[0] + nota10b[0] + nota10c[0] + nota10d[0] + nota10e[0] + nota10f[0] + nota11[0] + nota12[0])
        
    }

    return(
        <>
            {(sesion != 'catequista') && <Tiempo timeOut={handleTimeOut} fin={fin} conteo={sesion} />}
            {
                sesion == 'catequista' &&
                <div className='info'>
                    {
                        (alumno.ev1 && alumno.ev1 != 0) ?
                        <>
                            <p>Calificación:  <strong>{alumno.ev1}/10</strong></p>
                            <p>Hora de inicio: <strong>{alumno.inicioev1}</strong></p>
                            <p>Hora de envio: <strong>{alumno.envioev1}</strong></p>
                        </>
                        : <strong>Esta evaluación no ha sido resuelta todavía</strong>
                    }
                </div>
            }
            <UnaRespuestaNew {...preguntas[0]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p1 : null} />
            <DosRespuestasNew {...preguntas[1]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p2o0, alumno.p2o1, alumno.p2o2, alumno.p2o3] : [null, null, null, null]} />
            <VerdaderoNew {...preguntas[2]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p3 : null} />
            <EliminarRespuesta {...preguntas[3]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p4o0, alumno.p4o1, alumno.p4o2, alumno.p4o3] : [null, null, null, null]} />
            <UnaRespuestaNew {...preguntas[4]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p5 : null} />
            {
                (sesion != 'catequista') ?
                <>{
                    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ?
                    <DosRespuestasNew {...preguntas[12]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p6o0, alumno.p6o1, alumno.p6o2, alumno.p6o3] : [null, null, null, null]} />
                    : 
                    <Arrastrar {...preguntas[5]} datos={sesion == 'catequista' ? [alumno.p6o0, alumno.p6o1, alumno.p6o2, alumno.p6o3] : [null, null, null, null]} />
                }</>
                :
                <>{
                    alumno.mobile ?
                    <DosRespuestasNew {...preguntas[12]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p6o0, alumno.p6o1, alumno.p6o2, alumno.p6o3] : [null, null, null, null]} />
                    : 
                    <Arrastrar {...preguntas[5]} datos={sesion == 'catequista' ? [alumno.p6o0, alumno.p6o1, alumno.p6o2, alumno.p6o3] : [null, null, null, null]} />
                }</>
            }
            <VerdaderoNew {...preguntas[6]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p7 : null} />
            <DosRespuestasNew {...preguntas[7]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p8o0, alumno.p8o1, alumno.p8o2, alumno.p8o3] : [null, null, null, null]} />
            <EliminarRespuesta {...preguntas[8]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p9o0, alumno.p9o1, alumno.p9o2, alumno.p9o3] : [null, null, null, null]} />
            <DosRespuestasNew {...preguntas[9]} prueba={prueba} datos={sesion == 'catequista' ? [alumno.p10o0, alumno.p10o1, alumno.p10o2, alumno.p10o3, alumno.p10o4, alumno.p10o5] : [null, null, null, null, null, null]} />
            <UnaRespuestaNew {...preguntas[10]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p11 : null} />
            <VerdaderoNew {...preguntas[11]} prueba={prueba} datos={sesion == 'catequista' ? alumno.p12 : null} />
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