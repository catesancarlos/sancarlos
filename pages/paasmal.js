import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'
import PartidosSemana from '../componentes/campeonato25/calendario/PartidosSemana'

import db  from '../services/dBase'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha, setFecha] = useState({})

    useEffect(() => {
        if(log){
            onSnapshot(doc(db, 'campeonato25', 'fecha7'), (doc) => {
                setFecha(doc.data())
            }) 
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido5: e[1] })
        }
        if(e[0]==6){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { partido6: e[1] })
        }
    }
    
    const handleGoles = async e => {
        if(e[0]==1){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res1: [e[2]=='+' ? fecha.res1[0]+1 : fecha.res1[0]-1, +fecha.res1[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res1: [+fecha.res1[0], e[2]=='+' ? fecha.res1[1]+1 : fecha.res1[1]-1] })
            }
        }
        if(e[0]==2){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res2: [e[2]=='+' ? fecha.res2[0]+1 : fecha.res2[0]-1, +fecha.res2[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res2: [+fecha.res2[0], e[2]=='+' ? fecha.res2[1]+1 : fecha.res2[1]-1] })
            }
        }
        if(e[0]==3){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res3: [e[2]=='+' ? fecha.res3[0]+1 : fecha.res3[0]-1, +fecha.res3[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res3: [+fecha.res3[0], e[2]=='+' ? fecha.res3[1]+1 : fecha.res3[1]-1] })
            }
        }
        if(e[0]==4){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res4: [e[2]=='+' ? fecha.res4[0]+1 : fecha.res4[0]-1, +fecha.res4[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res4: [+fecha.res4[0], e[2]=='+' ? fecha.res4[1]+1 : fecha.res4[1]-1] })
            }
        }
        if(e[0]==5){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res5: [e[2]=='+' ? fecha.res5[0]+1 : fecha.res5[0]-1, +fecha.res5[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res5: [+fecha.res5[0], e[2]=='+' ? fecha.res5[1]+1 : fecha.res5[1]-1] })
            }
        }
        if(e[0]==6){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res6: [e[2]=='+' ? fecha.res6[0]+1 : fecha.res6[0]-1, +fecha.res6[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { res6: [+fecha.res6[0], e[2]=='+' ? fecha.res6[1]+1 : fecha.res6[1]-1] })
            }
        }
    }

    const handleAgregar = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador5: e[1] })
        }
        if(e[0]==6){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha7'), { jugador6: e[1] })
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                {
                    log ?
                        <PartidosSemana
                            title='Partidos de la semana:'
                            fecha={fecha}
                            control={[1, 2, 3, 4, 5, 6]}
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
