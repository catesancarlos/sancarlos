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
            onSnapshot(doc(db, 'campeonato25', 'fecha8'), (doc) => {
                setFecha(doc.data())
            }) 
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido5: e[1] })
        }
        if(e[0]==6){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido6: e[1] })
        }
        if(e[0]==7){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido7: e[1] })
        }
        if(e[0]==8){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido8: e[1] })
        }
        if(e[0]==9){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido9: e[1] })
        }
        if(e[0]==10){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido10: e[1] })
        }
        if(e[0]==11){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { partido11: e[1] })
        }
    }
    
    const handleGoles = async e => {
        if(e[0]==1){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res1: [e[2]=='+' ? fecha.res1[0]+1 : fecha.res1[0]-1, +fecha.res1[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res1: [+fecha.res1[0], e[2]=='+' ? fecha.res1[1]+1 : fecha.res1[1]-1] })
            }
        }
        if(e[0]==2){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res2: [e[2]=='+' ? fecha.res2[0]+1 : fecha.res2[0]-1, +fecha.res2[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res2: [+fecha.res2[0], e[2]=='+' ? fecha.res2[1]+1 : fecha.res2[1]-1] })
            }
        }
        if(e[0]==3){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res3: [e[2]=='+' ? fecha.res3[0]+1 : fecha.res3[0]-1, +fecha.res3[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res3: [+fecha.res3[0], e[2]=='+' ? fecha.res3[1]+1 : fecha.res3[1]-1] })
            }
        }
        if(e[0]==4){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res4: [e[2]=='+' ? fecha.res4[0]+1 : fecha.res4[0]-1, +fecha.res4[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res4: [+fecha.res4[0], e[2]=='+' ? fecha.res4[1]+1 : fecha.res4[1]-1] })
            }
        }
        if(e[0]==5){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res5: [e[2]=='+' ? fecha.res5[0]+1 : fecha.res5[0]-1, +fecha.res5[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res5: [+fecha.res5[0], e[2]=='+' ? fecha.res5[1]+1 : fecha.res5[1]-1] })
            }
        }
        if(e[0]==6){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res6: [e[2]=='+' ? fecha.res6[0]+1 : fecha.res6[0]-1, +fecha.res6[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res6: [+fecha.res6[0], e[2]=='+' ? fecha.res6[1]+1 : fecha.res6[1]-1] })
            }
        }
        if(e[0]==7){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res7: [e[2]=='+' ? fecha.res7[0]+1 : fecha.res7[0]-1, +fecha.res7[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res7: [+fecha.res7[0], e[2]=='+' ? fecha.res7[1]+1 : fecha.res7[1]-1] })
            }
        }
        if(e[0]==8){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res8: [e[2]=='+' ? fecha.res8[0]+1 : fecha.res8[0]-1, +fecha.res8[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res8: [+fecha.res8[0], e[2]=='+' ? fecha.res8[1]+1 : fecha.res8[1]-1] })
            }
        }
        if(e[0]==9){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res9: [e[2]=='+' ? fecha.res9[0]+1 : fecha.res9[0]-1, +fecha.res9[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res9: [+fecha.res9[0], e[2]=='+' ? fecha.res9[1]+1 : fecha.res9[1]-1] })
            }
        }
        if(e[0]==10){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res10: [e[2]=='+' ? fecha.res10[0]+1 : fecha.res10[0]-1, +fecha.res10[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res10: [+fecha.res10[0], e[2]=='+' ? fecha.res10[1]+1 : fecha.res10[1]-1] })
            }
        }
        if(e[0]==7){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res7: [e[2]=='+' ? fecha.res7[0]+1 : fecha.res7[0]-1, +fecha.res7[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res7: [+fecha.res7[0], e[2]=='+' ? fecha.res7[1]+1 : fecha.res7[1]-1] })
            }
        }
        if(e[0]==11){
            if(e[1]==0){  
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res11: [e[2]=='+' ? fecha.res11[0]+1 : fecha.res11[0]-1, +fecha.res11[1]] })
            } else{
                const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { res11: [+fecha.res11[0], e[2]=='+' ? fecha.res11[1]+1 : fecha.res11[1]-1] })
            }
        }
    }

    const handleAgregar = async e => {
        if(e[0]==1){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador1: e[1] })
        }
        if(e[0]==2){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador2: e[1] })
        }
        if(e[0]==3){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador3: e[1] })
        }
        if(e[0]==4){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador4: e[1] })
        }
        if(e[0]==5){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador5: e[1] })
        }
        if(e[0]==6){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador6: e[1] })
        }
        if(e[0]==7){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador7: e[1] })
        }
        if(e[0]==8){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador8: e[1] })
        }
        if(e[0]==9){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador9: e[1] })
        }
        if(e[0]==10){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador10: e[1] })
        }
        if(e[0]==11){
            const docRef = await updateDoc(doc(db, 'campeonato25', 'fecha8'), { jugador11: e[1] })
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
                            control={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
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
