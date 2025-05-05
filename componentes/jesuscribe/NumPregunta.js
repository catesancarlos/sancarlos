import { useRouter } from 'next/router'

export default function NumPregunta({ pregunta, categoria, active, home }){
    const router = useRouter()
    
    return(
        <div onClick={() => router.push(`/jesuscribe/${categoria}/p${pregunta}`)} >
            <p>{pregunta}</p>

            <style jsx>{`
                div{
                    background: ${active ? '#000' : '#FFF'};
                    margin: 8px;
                    width: ${!home ? '60px' : '52px'};
                    height: ${!home ? '60px' : '52px'};
                    padding: 10px;
                    color: ${active ? 'white' : 'black'};
                    font-size: 19px;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    div{
                        margin: 4px;
                        width: ${!home ? '56px' : '26px'};
                        height: ${!home ? '56px' : '26px'};
                        padding: 0;
                        font-size: 19px;
                        border-radius: 8px;
                    }
                }
            `}</style>
        </div>
    )
}