import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosSemanaF5({ title, fec, fecha, home }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Domingo'
                fecha='16 Feb'
                hora='09h00'
                genero='F'
                equipos={['Estrellitas de María', 'Las Angeles Negros']}
                paralelos={['Confir. Ángeles (F)', '1ro Confir. 3 (F)']}
                logos={['2AF', '13F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                dia='Domingo'
                fecha='16 Feb'
                hora='10h00'
                genero='F'
                equipos={['Traicioneras como Judas', 'Génesis']}
                paralelos={['2do Confir. 5 (F)', '2do Confir. 3 (F)']}
                logos={['25F', '23F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Domingo'
                fecha='16 Feb'
                hora='11h00'
                genero='M'
                equipos={['Confirmación F.C.', 'GDL']}
                paralelos={['2do Confir. 2 (M)', '2do Confir. 4 (M2)']}
                logos={['22M', '24M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[, 2]}
            />
            <PartidoSoloResultado
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                dia='Domingo'
                fecha='16 Feb'
                hora='12h00'
                genero='F'
                equipos={['Newcastels', 'Las Águilas']}
                paralelos={['1ro Confir. 4 (F)', '1ro Confir. 1 (F)']}
                logos={['14F', '11F']}
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