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

            {
                /* { <p className='titulo-menu'>CONFIRMACIÓN</p>
                <div className='menu'>
                        
                <div className='option'>
                    <Link href='/informacion' legacyBehavior>
                        <a className='name-option'>Libros Catequesis</a>
                    </Link>
                    <p className='name-option' onClick={() => setLibro(true)}>Libros Catequesis</p>
                    <p className='descripcion'>
                        Visualiza o descarga los libros para la Catequesis.
                    </p>
                </div>
                {
                    libro ? 
                        <div className='libro-biblia'>
                            <p onClick={() => setLibro(false)} className='cerrar-libros'>X</p>
                            <div className='libros'>
                                {
                                    arrayLibros.map(item => 
                                        <Link href={`/libros/${item.id}.pdf`} key={item.id} legacyBehavior>
                                            <a target='_blank' className='name-libro'>{item.nombre}</a>
                                        </Link>
                                    )
                                }
                            </div>
                            <a 
                                href='https://www.sanpablo.es/biblia-latinoamericana'
                                className='name-libro biblia-boton'
                                target='_blank'
                            >
                                Biblia<br/>Latinoamericana
                            </a>
                        </div>
                    :
                        <>
                            {
                                !ev &&
                                <>
                                    <div className='option'>
                                                gg<div className='name-option recupera' onClick={() => setEv(true)}>gg
                                            <Link href='/confirmacion' legacyBehavior>
                                                <a className='name-option recupera'>
                                                    <p className='nuevo'>Padrinos</p>
                                                    2 Confirmación
                                                </a>
                                            </Link> 
                                            gg</div>gg
                                        <p className='descripcion'>
                                            Espacio dedicado para el nivel se Segundo de Confirmación
                                        </p>
                                    </div>
                                    <div className='option'>
                                            <Link href='/catequistas' legacyBehavior>
                                                <a className='name-option recupera'>
                                                    CATEQUISTAS
                                                </a>
                                            </Link> 
                                        <p className='descripcion'>
                                            Conoce a los Catequistas de la parroquia de Ricaurte
                                        </p>
                                    </div>
                                </>
                            }
                            {
                                ev &&
                                <div className='option'>
                                    <p onClick={() => setEv(false)} className='cerrar-libros'>X</p>
                                    <Link href='/confirmacion' legacyBehavior>
                                        <a className='name-option sub-option sub-arriba'>Dar la Evaluación</a>
                                    </Link> 
                                    <Link href='/recuperacion' legacyBehavior>
                                        <a className='name-option sub-option'>Clases de recuperación</a>
                                    </Link> 
                                </div> 
                            }
                        </>
                }
            </div> */
            }

            <style jsx>{`
               
            `}</style>
        </AppLayout>
        
    )
}
