const ev3data =[
    {
        no: 1,
        pregunta: "Escoja que conductas son autodestructivas y van en contra de nuestra salud y vida",
        respuestas: [
            {
                id: 0,
                name: "Rebeldia",
                estado: true
            },
            {
                id: 1,
                name: "Respeto",
                estado: false
            },
            {
                id: 2,
                name: "Voluntad",
                estado: false
            },
            {
                id: 3,
                name: "Alcoholismo",
                estado: true
            },
            {
                id: 4,
                name: "Comunicación",
                estado: false
            },
            {
                id: 5,
                name: "Anorexia",
                estado: true
            },
            {
                id: 6,
                name: "Responsabilidad",
                estado: false
            },
            {
                id: 7,
                name: "Suicidio",
                estado: true
            }
        ]
    },
    {
        no: 2,
        pregunta: "¿Qué significa que tenemos una alma espiritual? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Solo tenemos un espiritu",
                estado: false
            },
            {
                id: 1,
                name: "Union de cuerpo y alma",
                estado: true
            },
            {
                id: 2,
                name: "Separación de cuerpo y alma",
                estado: false
            },
            {
                id: 3,
                name: "Solo temenos un cuerpo",
                estado: false
            }
        ]
    },
    {
        no: 3,
        pregunta: "¿Según la cita bíblica de Juan 3, 5 nos dice que en el bautismo es necesario? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Renacer de la muerte",
                estado: false
            },
            {
                id: 1,
                name: "Amar al projimo",
                estado: false
            },
            {
                id: 2,
                name: "Renacer del agua y del espíritu",
                estado: true
            },
            {
                id: 3,
                name: "Amar a Dios sobre todas las cosas",
                estado: false
            }
        ]
    },
    {
        no: 4,
        pregunta: "El origen del mal es el pecado original",
        respuestas: true
    },
    {
        no: 5,
        pregunta: "¿Qué es el sacramento de la reconciliación? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Un sacramento de sanación",
                estado: true
            },
            {
                id: 1,
                name: "Un sacramento en el que los esposos se perdonan",
                estado: false
            },
            {
                id: 2,
                name: "Un sacramento en el que recibimos el Espíritu santo",
                estado: false
            },
            {
                id: 3,
                name: "Sacramento de iniciación cristiana",
                estado: false
            }
        ]
    },
    {
        no: 6,
        pregunta: "Arrastre los elementos a la área correcta, según corresponda",
        respuestas: [
            {
                id: 'a',
                name: "Luz del mundo"
            },
            {
                id: 'b',
                name: "Misionero"
            },
            {
                id: 'c',
                name: "Discipulo"
            },
            {
                id: 'd',
                name: "Sal de la tierra"
            }
        ],
        contenedores: [
            {
                id: 'a',
                name: "Las buenas obras iluminan un mundo lleno de pecado"
            },
            {
                id: 'b',
                name: "Anuncia el Evangelio a todas las naciones"
            },
            {
                id: 'd',
                name: "Da esperanza y sentido al mundo"
            },
            {
                id: 'c',
                name: "Inquieto por conocer, amar e imitar a Jesús"
            }
        ]
    },
    {
        no: 7,
        pregunta: "Segun la cita Hechos 2, 42-47, ¿Cuáles son 2 características de los primeros cristianos?",
        respuestas: [
            {
                id: 0,
                name: "Tenían todos los servicios básicos",
                estado: false
            },
            {
                id: 1,
                name: "Acudían a la fracción del pan",
                estado: true
            },
            {
                id: 2,
                name: "Alababan a Dios en todo momento",
                estado: true
            },
            {
                id: 3,
                name: "Compraban los productos en el mercado",
                estado: false
            }
        ]
    },
    {
        no: 8,
        pregunta: "Escoja cuáles son los signos del sacramento del Bautismo",
        respuestas: [
            {
                id: 0,
                name: "Imposición de manos",
                estado: false
            },
            {
                id: 1,
                name: "Paloma",
                estado: false
            },
            {
                id: 2,
                name: "Agua",
                estado: true
            },
            {
                id: 3,
                name: "Vestimenta blanca",
                estado: true
            },
            {
                id: 4,
                name: "Padrinos",
                estado: false
            },
            {
                id: 5,
                name: "Incienso",
                estado: false
            },
            {
                id: 6,
                name: "Luz",
                estado: true
            },
            {
                id: 7,
                name: "Crisma",
                estado: true
            }
        ]
    },
    {
        no: 9,
        pregunta: "Elimine las opciones INCORRECTAS, sobre los tipos de pecados",
        respuestas: [
            {
                id: 0,
                name: "El pecado circunstancial se borra con el bautismo",
                estado: true
            },
            {
                id: 1,
                name: "En el pecado venial, al orar por una persona sus pecados se perdonan",
                estado: false
            },
            {
                id: 2,
                name: "En el pecado mortal, al orar por una persona sus pecados se perdonan",
                estado: true
            },
            {
                id: 3,
                name: "En el pecado mortal, muere el alma y me condeno",
                estado: false
            }
        ]
    },
    {
        no: 10,
        pregunta: "¿Cómo afecta la vida del ser humano, el fumar y consumir alcohol? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Lo hace más libre",
                estado: false
            },
            {
                id: 1,
                name: "Lo esclaviza y acaba con su vida",
                estado: true
            },
            {
                id: 2,
                name: "Lo hace mas aceptable e interesante",
                estado: false
            },
            {
                id: 3,
                name: "Lo ayuda a ser más sociable",
                estado: false
            }
        ]
    },
    {
        no: 11,
        pregunta: "Ser persona significa que somos alguien, no algo, pues la persona solo debe ser amada nunca usada",
        respuestas: true
    },
    {
        no: 12,
        pregunta: "¿Cuál es el sentido de la vida para los cristianos? [Escoja 2 opciones]",
        respuestas: [
            {
                id: 0,
                name: "Conocer y amar a Dios con todo el corazón",
                estado: true
            },
            {
                id: 1,
                name: "Vivir una vida sin ningina enfermedad",
                estado: false
            },
            {
                id: 2,
                name: "Conocer y amar al prójimo como a nosotros mismos",
                estado: true
            },
            {
                id: 3,
                name: "Ahorrar dinero para nuestra vejez",
                estado: false
            }
        ]
    },
    {
        no: 13,
        pregunta: "¿Cuál es la razón más importante por la que nadie debe quitarse la vida? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Causaria dolor a mi familia",
                estado: false
            },
            {
                id: 1,
                name: "Somos creados a imagen y semejanza de Dios",
                estado: false
            },
            {
                id: 2,
                name: "No se el dolor que me cause",
                estado: false
            },
            {
                id: 3,
                name: "La vida es sagrada y solo Dios es el dueño de la vida",
                estado: true
            }
        ]
    },
    {
        no: 14,
        pregunta: "La conciencia es una voz interior en el hombre que le lleva a obrar el mal y evitar el bien",
        respuestas: false
    },
    {
        no: 15,
        pregunta: "¿Cómo se llama el libro de Catequesis de Segundo de Confirmación? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Invitados a participar del altar",
                estado: false
            },
            {
                id: 1,
                name: "Dios nos abraza y nos perdona",
                estado: false
            },
            {
                id: 2,
                name: "Yo creo, esta es mi fe",
                estado: false
            },
            {
                id: 3,
                name: "Testigos de Jesús en el mundo",
                estado: true
            }
        ]
    },
    {
        no: 6,
        pregunta: "Escoja a cada enunciado, si es verdadero o falso",
        respuestas: [
            {
                id: 0,
                name: "Un discipulo anuncia el evangelio a todas las naciones",
                estado: false
            },
            {
                id: 1,
                name: "Ser luz del mundo es conocer, amar e imitar a Jesús",
                estado: false
            },
            {
                id: 2,
                name: "Misionero es aquel que anuncia el Evangelio a todas las naciones",
                estado: true
            },
            {
                id: 3,
                name: "Ser sal de la tierra es dar esperanza y sentido al mundo",
                estado: true
            }
        ]
    }
]

export default ev3data