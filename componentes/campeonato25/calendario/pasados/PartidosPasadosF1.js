import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF1({ title, fec, fecha, home }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                res={fecha?.res1}
                pen={fecha?.pen1}
                home={home}
                dia='Domingo'
                fecha='19 Ene'
                hora='08h30'
                genero='M'
                equipos={['Confirmación F.C.', 'Los Pastores']}
                paralelos={['2do Confir. 2 (M)', '2do Confir. 3 (M)']}
                logos={['22M', '23M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['blue', 'blue', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res2}
                pen={fecha?.pen2}
                home={home}
                dia='Domingo'
                fecha='19 Ene'
                hora='09h30'
                genero='F'
                equipos={['Las Galatas 1, 10', 'Traicioneras como Judas']}
                paralelos={['2do Confir. 1 (F)', '2do Confir. 5 (F)']}
                logos={['21F', '25F']}
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
                fecha='19 Ene'
                hora='10h30'
                genero='F'
                equipos={['Confirmación F.C.', 'Club GNU']}
                paralelos={['2do Confir. 2 (F)', '2do Confir. 4 (F)']}
                logos={['22F', '24F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                pen={fecha?.pen4}
                home={home}
                dia='Domingo'
                fecha='19 Ene'
                hora='11h30'
                genero='M'
                equipos={['Santos y Religiosos F.C.', 'GDL']}
                paralelos={['2do Confir. 1 (M)', '2do Confir. 4 (M2)']}
                logos={['21M', '24M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[, 2]}
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