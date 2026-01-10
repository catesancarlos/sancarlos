import { useState, useEffect } from 'react'

import AppLayout from '../../componentes/layout'
import PartidosSemana from '../../componentes/campeonato26/calendario/PartidosSemana'

import db  from '../../services/dBase'
import { doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore'

let CAMPEONATO = 'campeonato26'
let FECHA = 'fecha1'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha, setFecha] = useState({})

    useEffect(() => {
        /* if(log){
            onSnapshot(doc(db, CAMPEONATO, FECHA), (doc) => {
                setFecha(doc.data())
            }) 
        } */
        if (log) {
            const unsub = onSnapshot(doc(db, CAMPEONATO, FECHA), (doc) => {
                if (doc.exists()) setFecha(doc.data())
            })
            return () => unsub()
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async e => {
        if(e[0]==1){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido1: e[1] }, { merge: true })
        }
        if(e[0]==2){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido2: e[1] }, { merge: true })
        }
        if(e[0]==3){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido3: e[1] }, { merge: true })
        }
        if(e[0]==4){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido4: e[1] }, { merge: true })
        }
        if(e[0]==5){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido5: e[1] }, { merge: true })
        }
        if(e[0]==6){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido6: e[1] }, { merge: true })
        }
        if(e[0]==7){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido7: e[1] }, { merge: true })
        }
        if(e[0]==8){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido8: e[1] }, { merge: true })
        }
        if(e[0]==9){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido9: e[1] }, { merge: true })
        }
        if(e[0]==10){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { partido10: e[1] }, { merge: true })
        }
    }

    const handleGoles = async ([partidoId, equipoIdx, operacion]) => {
        const key = `res${partidoId}`;
        const currentRes = fecha[key] || [0, 0]; // Fallback por si no existe el dato
        
        // Creamos una copia del resultado actual
        let nuevoResultado = [...currentRes];
        
        // Calculamos el nuevo valor (sumar o restar 1)
        const valorActual = Number(nuevoResultado[equipoIdx]);
        nuevoResultado[equipoIdx] = operacion === '+' ? valorActual + 1 : valorActual - 1;

        // Evitamos goles negativos (opcional)
        if (nuevoResultado[equipoIdx] < 0) nuevoResultado[equipoIdx] = 0;

        try {
            await setDoc(doc(db, CAMPEONATO, FECHA), { 
                [key]: nuevoResultado 
            }, { merge: true });
        } catch (error) {
            console.error("Error actualizando marcador:", error);
        }
    }
    
    /* const handleGoles = async e => {
        if(e[0]==1){
            if(e[1]==0){
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res1: [e[2]=='+' ? fecha.res1[0]+1 : fecha.res1[0]-1, +fecha.res1[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res1: [+fecha.res1[0], e[2]=='+' ? fecha.res1[1]+1 : fecha.res1[1]-1] }, { merge: true })
            }
        }
        if(e[0]==2){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res2: [e[2]=='+' ? fecha.res2[0]+1 : fecha.res2[0]-1, +fecha.res2[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res2: [+fecha.res2[0], e[2]=='+' ? fecha.res2[1]+1 : fecha.res2[1]-1] }, { merge: true })
            }
        }
        if(e[0]==3){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res3: [e[2]=='+' ? fecha.res3[0]+1 : fecha.res3[0]-1, +fecha.res3[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res3: [+fecha.res3[0], e[2]=='+' ? fecha.res3[1]+1 : fecha.res3[1]-1] }, { merge: true })
            }
        }
        if(e[0]==4){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res4: [e[2]=='+' ? fecha.res4[0]+1 : fecha.res4[0]-1, +fecha.res4[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res4: [+fecha.res4[0], e[2]=='+' ? fecha.res4[1]+1 : fecha.res4[1]-1] }, { merge: true })
            }
        }
        if(e[0]==5){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res5: [e[2]=='+' ? fecha.res5[0]+1 : fecha.res5[0]-1, +fecha.res5[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res5: [+fecha.res5[0], e[2]=='+' ? fecha.res5[1]+1 : fecha.res5[1]-1] }, { merge: true })
            }
        }
        if(e[0]==6){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res6: [e[2]=='+' ? fecha.res6[0]+1 : fecha.res6[0]-1, +fecha.res6[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res6: [+fecha.res6[0], e[2]=='+' ? fecha.res6[1]+1 : fecha.res6[1]-1] }, { merge: true })
            }
        }
        if(e[0]==7){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res7: [e[2]=='+' ? fecha.res7[0]+1 : fecha.res7[0]-1, +fecha.res7[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res7: [+fecha.res7[0], e[2]=='+' ? fecha.res7[1]+1 : fecha.res7[1]-1] }, { merge: true })
            }
        }
        if(e[0]==8){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res8: [e[2]=='+' ? fecha.res8[0]+1 : fecha.res8[0]-1, +fecha.res8[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res8: [+fecha.res8[0], e[2]=='+' ? fecha.res8[1]+1 : fecha.res8[1]-1] }, { merge: true })
            }
        }
        if(e[0]==9){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res9: [e[2]=='+' ? fecha.res9[0]+1 : fecha.res9[0]-1, +fecha.res9[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res9: [+fecha.res9[0], e[2]=='+' ? fecha.res9[1]+1 : fecha.res9[1]-1] }, { merge: true })
            }
        }
        if(e[0]==10){
            if(e[1]==0){  
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res10: [e[2]=='+' ? fecha.res10[0]+1 : fecha.res10[0]-1, +fecha.res10[1]] }, { merge: true })
            } else{
                const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { res10: [+fecha.res10[0], e[2]=='+' ? fecha.res10[1]+1 : fecha.res10[1]-1] }, { merge: true })
            }
        }
    } */

    const handleAgregar = async e => {
        if(e[0]==1){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador1: e[1] }, { merge: true })
        }
        if(e[0]==2){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador2: e[1] }, { merge: true })
        }
        if(e[0]==3){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador3: e[1] }, { merge: true })
        }
        if(e[0]==4){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador4: e[1] }, { merge: true })
        }
        if(e[0]==5){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador5: e[1] }, { merge: true })
        }
        if(e[0]==6){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador6: e[1] }, { merge: true })
        }
        if(e[0]==7){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador7: e[1] }, { merge: true })
        }
        if(e[0]==8){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador8: e[1] }, { merge: true })
        }
        if(e[0]==9){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador9: e[1] }, { merge: true })
        }
        if(e[0]==10){
            const docRef = await setDoc(doc(db, CAMPEONATO, FECHA), { jugador10: e[1] }, { merge: true })
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            {console.log(fecha)}
            <section>
                {
                    log ?
                        <PartidosSemana
                            title='Partidos de la semana:'
                            fecha={fecha}
                            control={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            onStatus={handleStatus}
                            onGoles={handleGoles}
                            onAgregar={handleAgregar}
                        />
                    :
                        <div style={{ display: 'flex'}}>
                            <input onChange={handleChange} />
                        </div>
                }
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 0 4%;
                    width: 92%;
                }
            `}</style>
        </AppLayout>
        
    )
}
