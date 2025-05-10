import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import JsLayout from '../../componentes/layout/JsLayout'
import db  from '../../services/dBase'
import { getDoc, doc, query, collection, where, updateDoc, onSnapshot } from 'firebase/firestore'

export default function Jesuscribe(){
    const router = useRouter()
    const [section, setSection] = useState(1)
    const [auth, setAuth] = useState(null)
    const [footer, setFooter] = useState(true)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const storage = localStorage.getItem('auth')
            if(storage) setAuth(JSON.parse(storage))
        }
    }, [])

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'concurso'), (doc) => {
            setFooter(doc.data().footer)
        }) 
    }, [])

    return(
        <JsLayout 
            titulo='JESUSCRIBE'
            name='Jesuscribe'
            back='#B0C0D9'
            preg={!footer || auth == '4994'}
        >
            {
                (!footer || auth == '4994') ?
                    <div className='cont'>
                        <p className='info'>Categorias:</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/gn')}>GENERAL</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/vd')}>VIDA DE JESÚS</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/ni')}>NUESTRA IGLESIA</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/lt')}>LITURGIA</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/sc')}>SACRAMENTOLOGIA</p>
                        <p className='cat' onClick={() => router.push('/jesuscribe/ml')}>MULTIPLE</p>
                    </div>
                : 'El concurso de 2do de Confirmación se esta desarrolando en este momento. Vuelve luego'
            }

            <style jsx>{`
                .cont{
                    margin: 30px 10% 0 10%;
                    width: 80%;
                }

                .info{
                    font-size: 28px;
                    font-family: 'Lato', sans-serif;
                    font-weight: bold;
                }

                .cat{
                    margin-top: 25px;
                    background: white;
                    padding: 10px 16px;
                    font-size: 24px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    transition: 0.5s ease;
                    cursor: pointer;
                }

                .cat:hover{
                    background: black;
                    color: white;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </JsLayout>
    )
}