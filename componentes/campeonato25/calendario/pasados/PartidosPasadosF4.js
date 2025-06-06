import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF4({ title, fec, fecha, home }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='08 Feb'
                hora='16h40'
                genero='F'
                equipos={['Camino a la Tierra Prometída', 'Las Misioneras']}
                paralelos={['Año Bíblico 5 (F)', 'Año Bíblico 2 (F)']}
                logos={['A5F', 'A2F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='08 Feb'
                hora='17h20'
                genero='F'
                equipos={['Mujeres de Nazareth', 'Las Herederas de Dios']}
                paralelos={['Año Bíblico 4 (F)', 'Año Bíblico 1 (F)']}
                logos={['A4F', 'A1F']}
                colores={{
                    eq1: ['red', 'white', 'white'],
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