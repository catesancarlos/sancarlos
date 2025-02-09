import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'
import PartidosSemana from '../componentes/home/PartidosSemana'

import db  from '../services/dBase'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha4, setFecha4] = useState({})

    useEffect(() => {
        if(log){
            onSnapshot(doc(db, 'campeonato25', 'fecha4'), (doc) => {
                setFecha4(doc.data())
            }) 
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { partido1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { partido2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { partido3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { partido4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { partido5: e[1] })
        }
    }
    
    const handleGoles = async e => {
        if(e[0]==1){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res1: [e[2]=='+' ? fecha4.res1[0]+1 : fecha4.res1[0]-1, +fecha4.res1[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res1: [+fecha4.res1[0], e[2]=='+' ? fecha4.res1[1]+1 : fecha4.res1[1]-1] })
            }
        }
        if(e[0]==2){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res2: [e[2]=='+' ? fecha4.res2[0]+1 : fecha4.res2[0]-1, +fecha4.res2[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res2: [+fecha4.res2[0], e[2]=='+' ? fecha4.res2[1]+1 : fecha4.res2[1]-1] })
            }
        }
        if(e[0]==3){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res3: [e[2]=='+' ? fecha4.res3[0]+1 : fecha4.res3[0]-1, +fecha4.res3[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res3: [+fecha4.res3[0], e[2]=='+' ? fecha4.res3[1]+1 : fecha4.res3[1]-1] })
            }
        }
        if(e[0]==4){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res4: [e[2]=='+' ? fecha4.res4[0]+1 : fecha4.res4[0]-1, +fecha4.res4[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res4: [+fecha4.res4[0], e[2]=='+' ? fecha4.res4[1]+1 : fecha4.res4[1]-1] })
            }
        }
        if(e[0]==5){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res5: [e[2]=='+' ? fecha4.res5[0]+1 : fecha4.res5[0]-1, +fecha4.res5[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { res5: [+fecha4.res5[0], e[2]=='+' ? fecha4.res5[1]+1 : fecha4.res5[1]-1] })
            }
        }
    }

    const handleAgregar = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { jugador1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { jugador2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { jugador3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { jugador4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha4'), { jugador5: e[1] })
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                {
                    log ?
                        <PartidosSemana
                            title='Partidos de la semana:'
                            fecha={fecha4}
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
