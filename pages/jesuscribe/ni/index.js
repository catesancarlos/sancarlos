import JsLayout from '../../../componentes/layout/JsLayout'
import MainPreguntas from '../../../componentes/jesuscribe/MainPreguntas'

const preguntas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]

const preguntasIni = [
    3,  6,  9, 12, 15, 18, 21, 24, 27, 30,
   33, 36, 39, 42, 45, 48, 51, 54, 57, 60,
   63, 66, 69, 72, 75, 78, 81, 84, 87, 90,
   93, 96, 99
]

export default function JesuscribeNi(){

    return(
        <JsLayout 
            titulo='JESUSCRIBE - Nuestra Iglesia'
            name='Jesuscribe'
            categoria='NUESTRA IGLESIA'
            /* onRand={handleRand} */
            back='#B0C0D9'
            preg
        >
            <MainPreguntas
                categoria='ni'
                preguntas={preguntas}
                preguntasIni={preguntasIni}
                rand
            />
        </JsLayout>
    )
}