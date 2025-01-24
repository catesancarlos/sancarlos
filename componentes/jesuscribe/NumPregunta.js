import { useRouter } from 'next/router'

export default function PespOpcion({ pregunta, categoria, active }){
    const router = useRouter()
    
    return(
        <div onClick={() => router.push(`/jesuscribe/${categoria}/p${pregunta}`)}>
            <p>{pregunta}</p>

            <style jsx>{`
                div{
                    background: ${active ? '#000' : '#FFF'};
                    margin: 8px;
                    width: 60px;
                    height: 60px;
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
            `}</style>
        </div>
    )
}