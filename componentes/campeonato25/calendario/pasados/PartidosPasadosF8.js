import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF8({ title, fec, fecha, home, noTop }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                com
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='15 Mar'
                hora='10h30'
                genero='M'
                equipos={['Niños gerreros de Dios', 'Los elegidos de Dios']}
                paralelos={['Iniciación 1 (M)', 'Iniciación 2 (M)']}
                logos={['I1M', 'I2M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='15 Mar'
                hora='11h40'
                genero='F'
                equipos={['Mensajeras de Dios', 'Las Campeonas del Futbol']}
                paralelos={['1ro Comun. 1 (F)', '1ro Comun. 2 (F)']}
                logos={['11F', '12F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Sábado'
                fecha='15 Mar'
                hora='12h10'
                genero='M'
                equipos={['Mensajeros de Dios', 'Los Campeones del Futbol']}
                paralelos={['1ro Comun. 1 (M)', '1ro Comun. 2 (M)']}
                logos={['11M', '12M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                dia='Sábado'
                fecha='15 Mar'
                hora='16h40'
                genero='M'
                equipos={['Peruanitos de Dios', 'Los Águilas']}
                paralelos={['Conf. Molinopamba (M)', '1ro Confir. 1 (M)']}
                logos={['2MM', '11M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Sábado'
                fecha='15 Mar'
                hora='17h20'
                genero='M'
                equipos={['Traicioneros como Judas', 'Juntos con Cristo FC']}
                paralelos={['2do Confir. 5 (M)', '1 Conf. AB Ángeles (M)']}
                logos={['25M', '1AM']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='08h30'
                genero='F'
                equipos={['Confirmación F.C.', 'Las Galatas 1, 10']}
                paralelos={['2do Confir. 2 (F)', '2do Confir. 1 (F)']}
                logos={['22F', '21F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='09h20'
                genero='F'
                equipos={['Traicioneras como Judas', 'Estrellitas de Maria']}
                paralelos={['2do Confir. 5 (F)', '2 Conf. Ángeles (F)']}
                logos={['25F', '2AF']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='10h10'
                genero='F'
                equipos={['Santa Fé', 'Las Águilas']}
                paralelos={['1ro Confir. 2 (F)', '1ro Confir. 1 (F)']}
                logos={['12F', '11F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='11h00'
                genero='F'
                equipos={['Club GNU', 'Newcastells']}
                paralelos={['2do Confir. 4 (F)', '1ro Confir. 4 (F)']}
                logos={['24F', '14F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res10}
                jugador={fecha?.jugador10}
                pen={fecha?.pen10}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='11h50'
                genero='F'
                equipos={['Génesis', 'Las Ángeles Negros']}
                paralelos={['2do Confir. 3 (F)', '1ro Confir. 3 (F)']}
                logos={['23F', '13F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res11}
                jugador={fecha?.jugador11}
                pen={fecha?.pen11}
                home={home}
                dia='Domingo'
                fecha='16 Mar'
                hora='12h30'
                genero='M'
                equipos={['Los Angelicales', 'Newcastells']}
                paralelos={['AB Conf. Molinopamba (M)', '1ro Confir. 4 (M)']}
                logos={['1MM', '14M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />

            <style jsx>{`
                p{
                    margin-top: ${home ? '30px' : '5px'};
                    color: #000000;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: ${fec ? '2px' : '12px'};
                }

                i{
                    color: #000000;
                    width: 100%;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    p{
                        margin-top: ${home ? '25px' : '0'};
                        font-size: 16px;
                        font-size: 400;
                    }

                    i{
                        font-size: 15px;
                    }
                }
            `}</style>
        </> 
    )
}