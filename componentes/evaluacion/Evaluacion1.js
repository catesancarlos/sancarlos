import { useState, useEffect } from 'react'
import preguntas1 from '../../datos/ev1data'
import preguntas2 from '../../datos/ev2data'
import preguntas3 from '../../datos/ev3data'
import Tiempo from './tiempo'
import UnaRespuesta from './UnaRespuesta'
import DosRespuestas from './DosRespuestas'
import Verdadero from './Verdadero'
import VariosVerdadero from './VariosVerdadero'
import OpcionesMalla from './OpcionesMalla'
import Arrastrar from './Arrastrar'
import Eliminar from './eliminar'

export default function Evaluacion1 ({ prueba, onTerminar, fin, conteo }) {
    const [preguntas, setPreguntas] = useState(null)
    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [nota3, setNota3] = useState(null)
    const [nota4, setNota4] = useState(null)
    const [nota5, setNota5] = useState(null)
    const [nota6, setNota6] = useState(null)
    const [nota7, setNota7] = useState(null)
    const [nota8, setNota8] = useState(null)
    const [nota9, setNota9] = useState(null)
    const [nota10, setNota10] = useState(null)
    const [nota11, setNota11] = useState(null)
    const [nota12, setNota12] = useState(null)
    const [nota13, setNota13] = useState(null)
    const [nota14, setNota14] = useState(null)
    const [nota15, setNota15] = useState(null)

    useEffect(() => {
        if(prueba == 1) setPreguntas(preguntas1)
        if(prueba == 2) setPreguntas(preguntas2)
        if(prueba == 0) setPreguntas(preguntas3)
    }, [preguntas])

    if(!preguntas) { 
        return <div>Cargando preguntas...</div>
    }

    const handleCalificar = e => {
        if(e[0] == 1){setNota1(e[1])}
        if(e[0] == 2){setNota2(e[1])}
        if(e[0] == 3){setNota3(e[1])}
        if(e[0] == 4){setNota4(e[1])}
        if(e[0] == 5){setNota5(e[1])}
        if(e[0] == 6){setNota6(e[1])}
        if(e[0] == 7){setNota7(e[1])}
        if(e[0] == 8){setNota8(e[1])}
        if(e[0] == 9){setNota9(e[1])}
        if(e[0] == 10){setNota10(e[1])}
        if(e[0] == 11){setNota11(e[1])}
        if(e[0] == 12){setNota12(e[1])}
        if(e[0] == 13){setNota13(e[1])}
        if(e[0] == 14){setNota14(e[1])}
        if(e[0] == 15){setNota15(e[1])}
    }

    const handleTimeOut = e => {
        if(e == true) {
            handleTerminar()
        }
    }

    const handleTerminar = () => {
        onTerminar(nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12 + nota13 + nota14 + nota15)
    }

    return(
        <>
            {/* <div style={{ position: 'fixed'}}>
                {nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12 + nota13 + nota14 + nota15}
            </div> */}
            {conteo && <Tiempo timeOut={handleTimeOut} fin={fin} conteo={conteo} />}
            <OpcionesMalla {...preguntas[0]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[1]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[2]} onNota={handleCalificar} />
            <Verdadero {...preguntas[3]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[4]} onNota={handleCalificar} />
            {
                (screen.availWidth > 1024) ? <Arrastrar {...preguntas[5]} onNota={handleCalificar} />
                : <VariosVerdadero {...preguntas[15]} onNota={handleCalificar} />
            }
            <DosRespuestas {...preguntas[6]} onNota={handleCalificar} />
            <OpcionesMalla {...preguntas[7]} onNota={handleCalificar} />
            <Eliminar {...preguntas[8]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[9]} onNota={handleCalificar} />
            <Verdadero {...preguntas[10]} onNota={handleCalificar} />
            <DosRespuestas {...preguntas[11]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[12]} onNota={handleCalificar} />
            <Verdadero {...preguntas[13]} onNota={handleCalificar} />
            <UnaRespuesta {...preguntas[14]} onNota={handleCalificar} />
            <div className='enviar-boton' onClick={handleTerminar}>Terminar y Enviar</div>
            

            <style jsx>{`
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