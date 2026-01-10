import equipos from '../../datos/campeonato26/equiposConfirmacion'

import ItemCalendario from '../campeonato26/calendario/ItemCalendario'

export default function PartidoNow({ fecha, home = true }) {

    const configuracionPartidos = [
        { id: 1, dia: 'Sábado', fecha: '10 Enero', hora: '16h20', genero: 'F', eq: [22, 24] },
        { id: 2, dia: 'Domingo', fecha: '11 Enero', hora: '10h00', genero: 'M', eq: [23, 25] },
        { id: 3, dia: 'Domingo', fecha: '11 Enero', hora: '10h40', genero: 'M', eq: [12, 13] },
        { id: 4, dia: 'Domingo', fecha: '11 Enero', hora: '11h20', genero: 'F', eq: [14, 15] },
        { id: 5, dia: 'Domingo', fecha: '11 Enero', hora: '12h00', genero: 'M', eq: [22, 24] },
    ];

    return (
        <section>
            {configuracionPartidos.map((p) => {
                // Verificamos si el partido está activo (status == 1)
                if (fecha?.[`partido${p.id}`] !== 1) return null

                return (
                    <ItemCalendario
                        key={p.id}
                        now={fecha?.[`partido${p.id}`]}
                        res={fecha?.[`res${p.id}`]}
                        jugador={fecha?.[`jugador${p.id}`]}
                        pen={fecha?.[`pen${p.id}`]}
                        extra={fecha?.[`extra${p.id}`]}
                        home={home}
                        fecha={[p.dia, p.fecha, p.hora]}
                        genero={p.genero}
                        equipos={[
                            equipos.find(e => e.no === p.eq[0]), 
                            equipos.find(e => e.no === p.eq[1])
                        ]}
                    />
                )
            })}

            <style jsx>{`
                section{
                    display: flex;
                    opacity: 1;
                    margin: 0 4% 20px 4%;
                    margin: 0 4% 0 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    flex-direction: column;
                    align-items: center;   
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 14px 5px 14px;
                        width: calc(100% - 28px);
                    }
                }
            `}</style>
        </section> 
    )
}