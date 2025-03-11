import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF2({ title, fec, fecha, home }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                res={fecha?.res1}
                pen={fecha?.pen1}
                home={home}
                dia='Domingo'
                fecha='26 Ene'
                hora='09h00'
                genero='M'
                equipos={['Fuerza Divina', 'Newcastells']}
                paralelos={['2 Confir. Ángeles (M)', '1ro Confir. 4 (M)']}
                logos={['2AM', '14M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res2}
                pen={fecha?.pen2}
                home={home}
                dia='Domingo'
                fecha='26 Ene'
                hora='10h00'
                genero='F'
                equipos={['Las Águilas', 'Estrellitas de María']}
                paralelos={['1ro Confir. 1 (F)', '2 Confir. Ángeles (F)']}
                logos={['11F', '2AF']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res3}
                pen={fecha?.pen3}
                home={home}
                dia='Domingo'
                fecha='26 Ene'
                hora='11h00'
                genero='F'
                equipos={['Santa Fé', 'Newcastells']}
                paralelos={['1ro Confir. 2 (F)', '1ro Confir. 4 (F)']}
                logos={['12F', '14F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                pen={fecha?.pen4}
                home={home}
                dia='Domingo'
                fecha='26 Ene'
                hora='12h00'
                genero='M'
                equipos={['Santa Fé', 'Los Angeles Negros']}
                paralelos={['1ro Confir. 2 (M)', '1ro Confir. 3 (M)']}
                logos={['12M', '13M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
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