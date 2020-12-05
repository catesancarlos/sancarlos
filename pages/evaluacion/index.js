import {useEffect} from 'react'
/* import firebase from '../../services/dBase'  */
import AppLayout from '../../componentes/layout'
import Footer from '../../componentes/layout/footer2'

import NoDisponible from '../../componentes/evaluacion/noDisponible'
import MenuParalelos from '../../componentes/evaluacion/MenuParalelos'

const Evaluacion = ({data}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <AppLayout pagina='eval' titulo='Cate San Carlos | Evaluación'>
            {
                false ? 
                <MenuParalelos /> : <NoDisponible />
            }
            <Footer />
        </AppLayout>
    )
}

/* Evaluacion.getInitialProps = async () => {
    const data = await firebase.firestore().collection('controles').doc('prueba').get()
    .then(listo => {
        return (listo.data())
    })
    return {data}
}  */

export default Evaluacion;