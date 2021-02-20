const ev1data = [
    {
        no: 1,
        pregunta: "Escoja que conductas son autodestructivas y van en contra de nuestra salud y vida",
        respuestas: [
            {
                id: 0,
                name: "Anorexia",
                estado: true
            },
            {
                id: 1,
                name: "Respeto",
                estado: false
            },
            {
                id: 2,
                name: "Alcoholismo",
                estado: true
            },
            {
                id: 3,
                name: "Rebeldía",
                estado: true
            },
            {
                id: 4,
                name: "Comunicación",
                estado: false
            },
            {
                id: 5,
                name: "Suicidio",
                estado: true
            },
            {
                id: 6,
                name: "Buenos habitos",
                estado: false
            },
            {
                id: 7,
                name: "Responsabilidad",
                estado: false
            }
        ]
    },
    {
        no: 2,
        pregunta: "¿Cada persona tiene un valor inmenso y único, cómo se llama ese valor? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Generosidad",
                estado: false
            },
            {
                id: 1,
                name: "Dignidad",
                estado: true
            },
            {
                id: 2,
                name: "Amistad",
                estado: false
            },
            {
                id: 3,
                name: "Amor",
                estado: false
            }
        ]
    },
    {
        no: 3,
        pregunta: "¿Para quién está dirigido el bautismo segun la cita bíblica de Hechos 2, 39? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Para las personas mayores",
                estado: false
            },
            {
                id: 1,
                name: "Para los que tiene pecados",
                estado: false
            },
            {
                id: 2,
                name: "Para ustedes y sus hijos",
                estado: true
            },
            {
                id: 3,
                name: "Para los que quieran convertirse",
                estado: false
            }
        ]
    },
    {
        no: 4,
        pregunta: "La responsabilidad consiste en asumir las consecuencias de nuestros actos",
        respuestas: true
    },
    {
        no: 5,
        pregunta: "¿Cuál es la misión del sacerdote? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Ser un puente con Jesús, para a través de el se perdonen los pecados",
                estado: true
            },
            {
                id: 1,
                name: "Guiar a los cristianos hacia donde el considere bueno",
                estado: false
            },
            {
                id: 2,
                name: "Ayudar a los cristianos a llegar al pecado",
                estado: false
            },
            {
                id: 3,
                name: "Salvar solamente su alma y la de su familia",
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
                name: "Sal de la tierra"
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
                name: "Luz del mundo"
            }
        ],
        contenedores: [
            {
                id: 'b',
                name: "Anuncia el Evangelio a todas las naciones"
            },
            {
                id: 'd',
                name: "Las buenas obras iluminan un mundo lleno de pecado"
            },
            {
                id: 'c',
                name: "Inquieto por conocer, amar e imitar a Jesús"
            },
            {
                id: 'a',
                name: "Da esperanza y sentido al mundo"
            }
        ]
    },
    {
        no: 7,
        pregunta: "Señale 2 aspectos que nos quitan la libertad",
        respuestas: [
            {
                id: 0,
                name: "Cuestionar la vida",
                estado: true
            },
            {
                id: 1,
                name: "Ayudar al projimo",
                estado: false
            },
            {
                id: 2,
                name: "Practicar los mandamientos",
                estado: false
            },
            {
                id: 3,
                name: "Consumir sustancias",
                estado: true
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
                name: "Luz",
                estado: true
            },
            {
                id: 5,
                name: "Incienso",
                estado: false
            },
            {
                id: 6,
                name: "Padrinos",
                estado: false
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
                name: "El pecado original se borra con el bautismo",
                estado: false
            },
            {
                id: 1,
                name: "El pecado original no se borra con el bautismo",
                estado: true
            },
            {
                id: 2,
                name: "En el pecado nominal, muere el alma y me condeno",
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
        pregunta: "¿Qué ocasiona perder el control de la vida? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Alimentarme sanamente",
                estado: false
            },
            {
                id: 1,
                name: "Libertad con responsabilidad",
                estado: false
            },
            {
                id: 2,
                name: "Tener buenos habitos",
                estado: false
            },
            {
                id: 3,
                name: "Consumir drogas",
                estado: true
            }
        ]
    },
    {
        no: 11,
        pregunta: "Un sacramento se divide en dos partes: Liturgia de la palabra y Liturgia de la Eucaristia",
        respuestas: false
    },
    {
        no: 12,
        pregunta: "¿Qué significa tener alma espiritual? [Escoja 2 opciones]",
        respuestas: [
            {
                id: 0,
                name: "El alma no existe",
                estado: false
            },
            {
                id: 1,
                name: "Separación del cuerpo y alma",
                estado: false
            },
            {
                id: 2,
                name: "No perece cuando morimos",
                estado: true
            },
            {
                id: 3,
                name: "Unión de cuerpo y alma",
                estado: true
            }
        ]
    },
    {
        no: 13,
        pregunta: "¿Por qué soy importante para Dios? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Cristo murió en la cruz para salvarme",
                estado: false
            },
            {
                id: 1,
                name: "Valgo la sangre de Cristo",
                estado: false
            },
            {
                id: 2,
                name: "Soy creado a imagen y semejanza de Dios",
                estado: false
            },
            {
                id: 3,
                name: "Todas las anteriores",
                estado: true
            }
        ]
    },
    {
        no: 14,
        pregunta: "La conciencia es una voz interior en el hombre que le lleva a obrar el bien y evitar el mal",
        respuestas: true
    },
    {
        no: 15,
        pregunta: "¿Cómo se llama el libro de Catequesis de Segundo de Confirmación? [Escoja lo correcto]",
        respuestas: [
            {
                id: 0,
                name: "Yo creo, esta es mi fe",
                estado: false
            },
            {
                id: 1,
                name: "Testigos de Jesús en el mundo",
                estado: true
            },
            {
                id: 2,
                name: "Dios nos abraza y nos perdona",
                estado: false
            },
            {
                id: 3,
                name: "Invitados a participar del altar",
                estado: false
            }
        ]
    },
    {
        no: 6,
        pregunta: "Escoja a cada enunciado, si es verdadero o falso",
        respuestas: [
            {
                id: 0,
                name: "Ser luz del mundo es conocer, amar e imitar a Jesús",
                estado: false
            },
            {
                id: 1,
                name: "Misionero es aquel que anuncia el Evangelio a todas las naciones",
                estado: true
            },
            {
                id: 2,
                name: "Un discipulo anuncia el evangelio a todas las naciones",
                estado: false
            },
            {
                id: 3,
                name: "Ser sal de la tierra es dar esperanza y sentido al mundo",
                estado: true
            }
        ]
    }
]

export default ev1data