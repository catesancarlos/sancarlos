import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'
import PartidosSemana from '../componentes/home/PartidosSemana'

import db  from '../services/dBase'
import { doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha3, setFecha3] = useState({})

    useEffect(() => {
        if(log){
            onSnapshot(doc(db, 'campeonato25', 'fecha3'), (doc) => {
                setFecha3(doc.data())
            }) 
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { partido1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { partido2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { partido3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { partido4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { partido5: e[1] })
        }
    }
    
    const handleGoles = async e => {
        if(e[0]==1){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res1: [e[2]=='+' ? fecha3.res1[0]+1 : fecha3.res1[0]-1, +fecha3.res1[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res1: [+fecha3.res1[0], e[2]=='+' ? fecha3.res1[1]+1 : fecha3.res1[1]-1] })
            }
        }
        if(e[0]==2){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res2: [e[2]=='+' ? fecha3.res2[0]+1 : fecha3.res2[0]-1, +fecha3.res2[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res2: [+fecha3.res2[0], e[2]=='+' ? fecha3.res2[1]+1 : fecha3.res2[1]-1] })
            }
        }
        if(e[0]==3){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res3: [e[2]=='+' ? fecha3.res3[0]+1 : fecha3.res3[0]-1, +fecha3.res3[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res3: [+fecha3.res3[0], e[2]=='+' ? fecha3.res3[1]+1 : fecha3.res3[1]-1] })
            }
        }
        if(e[0]==4){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res4: [e[2]=='+' ? fecha3.res4[0]+1 : fecha3.res4[0]-1, +fecha3.res4[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res4: [+fecha3.res4[0], e[2]=='+' ? fecha3.res4[1]+1 : fecha3.res4[1]-1] })
            }
        }
        if(e[0]==5){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res5: [e[2]=='+' ? fecha3.res5[0]+1 : fecha3.res5[0]-1, +fecha3.res5[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { res5: [+fecha3.res5[0], e[2]=='+' ? fecha3.res5[1]+1 : fecha3.res5[1]-1] })
            }
        }
    }

    const handleAgregar = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { jugador1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { jugador2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { jugador3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { jugador4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha3'), { jugador5: e[1] })
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                {
                    log ?
                        <PartidosSemana
                            title='Partidos de la semana:'
                            fecha={fecha3}
                            control={[1, 2, 3, 4, 5]}
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
