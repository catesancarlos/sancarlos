import {useState, useEffect} from 'react'
import ItemFlechas from './ItemFlechas'

const DosOpciones = ({alumno, no, datos, onNota}) => {
    const [pregunta, setPregunta] = useState(null)
    const [depositos, setDepositos] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [nota3, setNota3] = useState(null)
    const [nota4, setNota4] = useState(null)
    const [nota5, setNota5] = useState(null)
    const [nota6, setNota6] = useState(null)
    
    useEffect(() => {
        setPregunta(datos.pregunta)
        setDepositos(datos.depositos)
        setRespuestas(datos.respuestas)
    })

    useEffect(() => {
        onNota([no, nota1 + nota2 + nota3 + nota4 + nota5 + nota6])
    }, [nota1, nota2, nota3, nota4, nota5, nota6])

    const handleCalificar = item => {
            if(item[0] == 0) setNota1(item[1])
            if(item[0] == 1) setNota2(item[1])
            if(item[0] == 2) setNota3(item[1])
            if(item[0] == 3) setNota4(item[1])
            if(item[0] == 4) setNota5(item[1])
            if(item[0] == 5) setNota6(item[1])
    }

    if(!(pregunta && depositos && respuestas)) { 
        return <div>loading...</div>
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>{pregunta}</p>
            </div>

            <ItemFlechas depositos={depositos} />
            <ItemFlechas opcion={respuestas[0]} onCalificar={handleCalificar} />
            <ItemFlechas opcion={respuestas[1]} onCalificar={handleCalificar} />
            <ItemFlechas opcion={respuestas[2]} onCalificar={handleCalificar} />
            <ItemFlechas opcion={respuestas[3]} onCalificar={handleCalificar} />
            <ItemFlechas opcion={respuestas[4]} onCalificar={handleCalificar} />
            {
                respuestas[5] && <ItemFlechas opcion={respuestas[5]} onCalificar={handleCalificar} />
            }


            <style jsx>{`
                .cont-pregunta{
                    width: 60%;
                    margin: 0 auto;
                    padding: 20px 20px 15px 20px;
                    border: 1px solid white;
                    border-radius: 20px;
                    margin-bottom: 20px;
                }

                .pregunta{
                    color: brown;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    display: flex;
                    margin-bottom: 10px;
                }

                .num{
                    padding-right: 8px;
                }


                @media screen and (max-width: 480px){
                    .cont-pregunta{
                        width: 100%;
                        padding: 0;
                        border: none;
                        border-radius: 0;
                        margin-bottom: 0;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ccdae8;
                    }

                    .pregunta{
                        font-size: 16px;
                        line-height: 20px;
                        padding: 15px 15px 0 15px;
                    }
                }
            `}</style>
        </div> 
    )
}

export default DosOpciones

{/* <div className='cont-opciones'>
    <div className='depositos'>
        { (alumno%2 != 0) ? depositos[0] : depositos[1] }
        { 
            respuestas.map(item => 
                <div className='opciones' key={item.id}>
                    {
                        pos[item.id] == false &&
                        <p className='nombre-opcion'>{item.name}</p>
                    }     
                </div> 
            ) 
        }
    </div>
    <div className='cont-cont'>
        { 
            respuestas.map(item => 
                <div className='opciones' key={item.id}>
                    <p 
                        className='eliminar'
                        onClick={() => {
                            if(item.id == 0) { setPos([false, pos[1], pos[2], pos[3], pos[4]]) }
                            if(item.id == 1) { setPos([pos[0], false, pos[2], pos[3], pos[4]]) }
                            if(item.id == 2) { setPos([pos[0], pos[1], false, pos[3], pos[4]]) }
                            if(item.id == 3) { setPos([pos[0], pos[1], pos[2], false, pos[4]]) }
                            if(item.id == 4) { setPos([pos[0], pos[1], pos[2], pos[3], false]) }
                            setCont(cont + 1)
                        }}
                    >{`<<`}</p>
                    <p className='nombre-opcion'>{item.name}</p>
                    <p 
                        className='eliminar'
                        onClick={() => {
                            if(item.id == 0) { setPos([true, pos[1], pos[2], pos[3], pos[4]]) }
                            if(item.id == 1) { setPos([pos[0], true, pos[2], pos[3], pos[4]]) }
                            if(item.id == 2) { setPos([pos[0], pos[1], true, pos[3], pos[4]]) }
                            if(item.id == 3) { setPos([pos[0], pos[1], pos[2], true, pos[4]]) }
                            if(item.id == 4) { setPos([pos[0], pos[1], pos[2], pos[3], true]) }
                            setCont(cont + 1)
                        }}
                    >{`>>`}</p>
                </div> 
            ) 
        }
    </div>
    <div className='depositos'>
        { (alumno%2 != 0) ? depositos[1] : depositos[0] }
        { 
            respuestas.map(item => 
                <div className='opciones' key={item.id}>
                    {
                        pos[item.id] == true &&
                        <p className='nombre-opcion'>{item.name}</p>
                    } 
                </div> 
            ) 
        }
    </div>
</div> */}