import { useRouter } from 'next/router'

export default function MenuAside({ opciones, section, onSection }){
    const router = useRouter()

    return(
        <div className='menu'>
            {/* Botón "Atrás" condicional */}
            {onSection && (
                <div 
                    className='op-menu op-black' 
                    onClick={() => router.back()}
                >
                    🡠 Atrás
                </div>
            )}

            {opciones.map((opcion) => {
                // 1. Preparamos las propiedades dinámicas
                const isSelected = section === opcion.id
                const className = `op-menu ${onSection && isSelected ? 'active' : ''}`
                
                // 2. Definimos la acción según sea main o no
                const handleClick = !onSection 
                    ? () => router.push(`/campeonato/${opcion.id}`)
                    : () => onSection(opcion.id)

                // 3. Renderizamos un solo div con las propiedades calculadas
                return (
                    <div 
                        key={opcion.id}
                        className={className} 
                        onClick={handleClick}
                    >
                        {opcion.label}
                    </div>
                )
            })}


            <style jsx>{`
                .op-menu{
                    width: 180px;
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                    margin-bottom: 15px;
                    transition: 0.5s ease;
                }

                .op-black{
                    background: black;
                    color: white;
                }

                .active{
                    background: #245590;
                    color: white;
                }

                /* .op-menu:hover{
                    background: #245590;
                    color: white;
                } */

                @media screen and (max-width: 768px){
                    .menu{
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .op-menu{
                        margin: 0 5px 5px 0;
                        width: ${onSection ? 'calc((100% - 15px)/4)' : 'calc((100% - 10px)/3)'};
                        padding: 6px 6px;
                        font-size: 15px;
                    }

                    .op-menu:nth-child(${onSection ? '4n' : '3n'}) {
                        margin: 0 0 5px 0; /* Quita el margen derecho */
                    }
                }
            `}</style>
        </div>
    )
}