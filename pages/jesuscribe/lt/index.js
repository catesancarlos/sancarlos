import JsLayout from '../../../componentes/layout/JsLayout'
import MainPreguntas from '../../../componentes/jesuscribe/MainPreguntas'

const preguntas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55
]

const preguntasIni = [
    3,  6,  9, 12, 15, 18, 21, 24, 27, 30,
   33, 36, 39, 42, 45, 48, 51, 54
]

export default function JesuscribeLt(){

    return(
        <JsLayout 
            titulo='JESUSCRIBE - Liturgia'
            name='Jesuscribe'
            categoria='LITURGIA'
            /* onRand={handleRand} */
            back='#B0C0D9'
            preg
        >
            <MainPreguntas
                categoria='lt'
                preguntas={preguntas}
                preguntasIni={preguntasIni}
                rand
            />
        </JsLayout>
    )
}
