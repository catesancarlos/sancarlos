import { useState, useEffect, useContext } from 'react'
import firebase from '../../services/dBase' 
import {AuthContext} from '../../services/authContext'
import AppLayout from '../../componentes/layout/index'
import Link from 'next/link'
import Login from '../../componentes/Sesion/Login'
import EditarIcon from '../../componentes/iconos/EditarIcon'
import Borrar from '../../componentes/iconos/Borrar'
import Modal from '../../componentes/layout/Modal'

export default function Preguntas(){
    const { logged, user, listo } = useContext(AuthContext)
    const [datos, setDatos] = useState(null)
    const [vacio, setVacio] = useState(false)
    const [modalOpen, setModalOpen] = useState(null)
    const [borrarWarn, setBorrarWarn] = useState(null)

    const getDatos = async () => {
        try{
            let refDatos = firebase.firestore().collection('2confa').where('usuario', '==', user.uid).onSnapshot((querySnapshot) => {
                if(querySnapshot.empty) setVacio(true)
                else{
                    setVacio(false)
                    const docs = []
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    })
                    setDatos(docs)
                }
                
            })
        } catch(error){
            
        }
    }

    const handlePreguntar = e => {
        e.preventDefault()
        const { inputPregunta } = e.target.elements
        
        let refPregunta = firebase.firestore().collection('2confa')
        if(modalOpen.action == 'nuevo'){
            refPregunta.add({
                usuario: user.uid,
                pregunta: inputPregunta.value,
                activa: true
            })
        }
        if(modalOpen.action == 'editar' && modalOpen.inicial != inputPregunta.value){
            refPregunta.doc(`${modalOpen.id}`).update({
                pregunta: inputPregunta.value,
            })
        }
        setModalOpen(null)
    }

    const handleBorrar = pregunta => {
        let borrarPregunta = firebase.firestore().collection('2confa').doc(`${pregunta}`).delete()
        setBorrarWarn(false)
    }

    const handleChange = e => setModalOpen({ ...modalOpen, edit: e.target.value })

    useEffect(() => {
        getDatos()
    }, [logged])


    return(
        <AppLayout titulo='App Preguntas - Cate San Carlos' name='Cate Preguntas' auth>
            <div className='container'>
                {
                    /* !listo */true ? <p style={{textAlign: 'center'}}>...</p> :
                        <>
                        {
                            user ? 
                                <>
                                {
                                    vacio ?
                                        <div className='sin-preguntas'>
                                            <p>Usted no tiene preguntas realizadas.</p>
                                            <p 
                                                className='pregunta hacer-pregunta'
                                                onClick={() => setModalPregunta(true)}
                                            >Escriba una pregunta</p>
                                        </div>
                                    :
                                        !datos ? <p style={{textAlign: 'center'}}>Cargando...</p> :
                                        <>
                                            <div className='nueva-pregunta-cont'>
                                                <p 
                                                    className='nueva-pregunta'
                                                    onClick={() => setModalOpen({ action: 'nuevo' })}
                                                >+ Nueva pregunta</p>
                                            </div>
                                            {
                                                 datos.map(pregunta =>
                                                    <div className='pregunta-cont' key={pregunta.id}>
                                                        <Link
                                                            href={'/preguntas/[idPregunta]'} 
                                                            as={`/preguntas/${pregunta.id}`}
                                                        >
                                                            
                                                            <a className='pregunta'>
                                                                {pregunta.pregunta}
                                                            </a>
                                                        </Link>
                                                        <div className='pregunta-borrar' onClick={() => setModalOpen({
                                                            action: 'editar',
                                                            id: pregunta.id,
                                                            inicial: pregunta.pregunta,
                                                            edit: pregunta.pregunta
                                                        })}>
                                                            <EditarIcon />
                                                        </div>
                                                        <div className='pregunta-borrar' onClick={() => setBorrarWarn(pregunta.id)}>
                                                            <Borrar />
                                                        </div>
                                                        {
                                                            (borrarWarn == pregunta.id) &&
                                                            <div className='borrar-warn'>
                                                                Esta seguro, de eliminar esta pregunta
                                                                <div>
                                                                    <p className='boton-borrar' onClick={() => handleBorrar(pregunta.id)}>Eliminar</p>
                                                                    <p className='cancelar-borrar' onClick={() => setBorrarWarn(null)}>Cancelar</p>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            }
                                        </>   
                                }
                                </>
                            :
                                <Login />
                        }
                        </>
                }
                {
                    modalOpen &&
                    <Modal>
                        <form onSubmit={handlePreguntar} className='modal'>
                            <p onClick={() => setModalOpen(null)} className='cerrar-modal'>X</p>
                            <input
                                className='sesion input-sesion' 
                                type='text' 
                                name='inputPregunta'
                                placeholder='Escriba su pregunta'
                                value={modalOpen.edit ? modalOpen.edit : ''}
                                onChange={handleChange}
                                autoFocus
                                required
                            />
                            <button className='sesion button-sesion'>
                                {modalOpen.action == 'nuevo' ? 'Enviar pregunta' : 'Modificar Pregunta'}
                            </button>
                        </form>
                    </Modal>
                }
            </div>


            <style jsx>{`
                .container{
                    margin: 0 60px;
                }

                .modal{
                    background: white;
                    padding: 30px 25px;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                }

                .sesion{
                    width: 600px;
                    height: 40px;
                    padding: 0 15px;
                    font-size: 22px;
                    outline: none;
                    border: none;
                }

                .input-sesion{
                    padding-left: 10px;
                    font-size: 20px;
                    border-bottom: 2px solid black;
                }

                .button-sesion{
                    margin-top: 20px;
                    background-color: #A52A2A;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 1em;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .cerrar-modal{
                    position: absolute;
                    margin: -45px 0 0 600px;
                    background: brown;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 6px 12px 7px 12px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .pregunta-cont{
                    background: #FFFFFF33;
                    display: flex;
                    align-items: center;
                    border: 1px solid white;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    padding-right: 30px;
                }

                .pregunta{
                    width: 100%;
                    margin-right: 5px;
                    padding: 12px 25px;
                    font-size: 24px;
                    font-weight: bold;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .pregunta-borrar{
                    margin-left: 15px;
                    transition: 0.2s;
                    cursor: pointer;
                }

                .pregunta-borrar:hover{
                    color: #A52A2A;
                }

                .borrar-warn{
                    position: absolute;
                    right: 85px;
                    margin-top: 140px;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                }

                .borrar-warn div{
                    display: flex;
                    margin-top: 15px;
                    justify-content: center;
                }

                .borrar-warn p{
                    width: 100px;
                    margin: 0 5px;
                    padding: 5px 10px;
                    color: white;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .boton-borrar{
                    background: brown;
                }

                .cancelar-borrar{
                    background: gray;
                }

                .sin-preguntas{
                    width: 400px;
                    margin: 50px auto;
                    font-size: 20px;
                    text-align: center;
                }

                .hacer-pregunta{
                    background: #A52A2A;
                    width: 250px;
                    margin: 20px auto 0 auto;
                    padding: 10px;
                    color: white;
                    font-size: 1em;
                    text-align: center;
                    border: none;
                }

                .nueva-pregunta-cont{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    margin-bottom: 20px;
                }

                .nueva-pregunta{
                    padding: 12px 25px;
                    font-weight: bold;
                    border-radius: 20px;
                    cursor: pointer;
                    background: #A52A2A;
                    width: 180px;
                    color: white;
                    font-size: 1em;
                    text-align: center;
                    border: none;
                }


                @media screen and (max-width: 480px){
                    .container{
                        margin: 20px 0;
                        padding: 10px 20px;
                        border: none;
                    }
                }
            `}</style>
        </AppLayout>
    )
}

/* Preguntas.getInitialProps = async (ctx) => {
    try{
        const data = await firebase.firestore().collection('2confa').where('activa', '==', true).get()
        .then(snapshota => {
                const preguntas = []
            snapshota.forEach(pregunta => {
                preguntas.push({
                    id: pregunta.id,
                    pregunta: pregunta.data().pregunta,
                    respuestas: pregunta.data().respuestas,
                })
            })
            return preguntas
        })
        return {data}
    } catch(error){
        ctx.res.writeHead(302, { Location: '/' });
        ctx.res.end()
    }
}   */