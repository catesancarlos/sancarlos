import ItemCalendario from './ItemCalendario'

import equipos from '../../../datos/campeonato26/equiposConfirmacion'

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

    const listaPartidos = [
        { id: 1, dia: 'Sábado', fecha: '10 Enero', hora: '16h20', genero: 'F', eq: [22, 24] },
        { id: 2, dia: 'Domingo', fecha: '11 Enero', hora: '10h00', genero: 'M', eq: [23, 25] },
        { id: 3, dia: 'Domingo', fecha: '11 Enero', hora: '10h40', genero: 'M', eq: [12, 13] },
        { id: 4, dia: 'Domingo', fecha: '11 Enero', hora: '11h20', genero: 'F', eq: [14, 15] },
        { id: 5, dia: 'Domingo', fecha: '11 Enero', hora: '12h00', genero: 'M', eq: [22, 24] },
    ];

    return (
        <>
            { title1 && <p>{title1}</p> }
            {listaPartidos.map((p, index) => (
                <ItemCalendario
                    key={p.id}
                    // Usamos el ID para traer los datos correctos de la "fecha" de Firebase
                    control={control && control[index]}
                    now={fecha?.[`partido${p.id}`]}
                    res={fecha?.[`res${p.id}`]}
                    jugador={fecha?.[`jugador${p.id}`]}
                    pen={fecha?.[`pen${p.id}`]}
                    extra={fecha?.[`extra${p.id}`]}
                    // Props comunes o de la configuración
                    home={home}
                    fecha={[p.dia, p.fecha, p.hora]}
                    genero={p.genero}
                    equipos={[
                        equipos.find(e => e.no === p.eq[0]), 
                        equipos.find(e => e.no === p.eq[1])
                    ]}
                    onStatus={onStatus}
                    onGoles={onGoles}
                    onAgregar={onAgregar}
                />
            ))}
            
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