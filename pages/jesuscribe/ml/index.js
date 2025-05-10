import JsLayout from '../../../componentes/layout/JsLayout'
import MainPreguntas from '../../../componentes/jesuscribe/MainPreguntas'

const preguntas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]

const preguntasIni = [
    3,  6,  9, 12, 15, 18, 21, 24, 27, 30
]

export default function JesuscribeMl(){

    return(
        <JsLayout 
            titulo='JESUSCRIBE - Multiple'
            name='Jesuscribe'
            categoria='MULTIPLE'
            /* onRand={handleRand} */
            back='#B0C0D9'
            preg
        >
            <MainPreguntas
                categoria='ml'
                preguntas={preguntas}
                preguntasIni={preguntasIni}
                rand
            >
            </MainPreguntas>
        </JsLayout>
    )
}
