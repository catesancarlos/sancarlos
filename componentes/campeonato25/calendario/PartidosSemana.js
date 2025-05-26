import ItemCalendario from './ItemCalendario'

import equipos from '../../../datos/campeonato25/equiposConfirmacion'

export default function PartidosSemana({
    title1,
    title2,
    fecha,
    fec,
    home,
    control,
    onStatus,
    onGoles,
    onAgregar
}){    

    return (
        <>
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                final
                fase='FINAL - Confirmación'
                control={control && control[0]}
                /* now={fecha?.partido1} */
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                extra={fecha?.extra1}
                home={home}
                dia='Domingo'
                fecha='25 Mayo'
                hora='11h00'
                genero='F'
                equipos={[equipos[0].fem, equipos[1].fem]}
                paralelos={[`${equipos[0].par} (F)`, `${equipos[1].par} (F)`]}
                logos={[`${equipos[0].id}F`, `${equipos[1].id}F`]}
                colores={{
                    eq1: equipos[0].cf,
                    eq2: equipos[1].cf
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                final
                fase='FINAL - Confirmación'
                control={control && control[1]}
                /* now={fecha?.partido2} */
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                extra={fecha?.extra2}
                home={home}
                dia='Domingo'
                fecha='25 Mayo'
                hora='12h00'
                genero='M'
                equipos={[equipos[2].mas, equipos[4].mas]}
                paralelos={[`${equipos[2].par} (M)`, `${equipos[4].par} (M)`]}
                logos={[`${equipos[2].id}M`, `${equipos[4].id}M`]}
                colores={{
                    eq1: equipos[2].cm,
                    eq2: equipos[4].cm
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            
            <style jsx>{`
                p{
                    color: #245590;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    p{
                        font-size: 18px;
                        font-size: 400;
                    }
                }
            `}</style>
        </> 
    )
}
