import { useState } from 'react'
import AppLayout from '../componentes/layout'

import db  from '../services/dBase'
import { doc, setDoc } from 'firebase/firestore'

export default function Ingresar(){
    const [dato, setDato] = useState()
    const [paralelo, setParalelo] = useState()
    const [idd, setIdd] = useState()

    const handleChange = e => setDato(e.target.value)
    const handleIdd = e => setIdd(e.target.value)
    const handleParalelo = e => setParalelo(e.target.value)

    const handleEditar = async () => {
        const docRef = await setDoc(doc(db, paralelo, `${dato.split('\n')[0].split(' ')[0].toLowerCase()}${dato.split('\n')[1].split(' ')[0].toLowerCase()}`), {
                apellido: dato.split('\n')[0],
                nombre: dato.split('\n')[1],
                user: `${dato.split('\n')[0].split(' ')[0].toLowerCase()}${dato.split('\n')[1].split(' ')[0].toLowerCase()}`,
                clave: dato.split('\n')[0].split(' ')[1].toLowerCase(),
                no: +idd,
                bloqueo: false
            }
        )
        setIdd(+idd + 1)
    }
    

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <div className='container'>
                <input onChange={handleParalelo} />
                <input onChange={handleIdd} value={idd ? idd : ''} />
                <textarea
                    rows='10'
                    onChange={handleChange}
                    value={dato ? dato : ''}
                ></textarea>
                <div className='editar' onClick={handleEditar} >
                    Ingresar
                </div>
            </div>

            <style jsx>{`
               
            `}</style>
        </AppLayout>
        
    )
}
