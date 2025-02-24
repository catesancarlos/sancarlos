import { useState, useEffect } from 'react'

export default function NumBingo({ num, erase }){
    const [esc, setEsc] = useState(false)

    useEffect(() => {
        if(erase){
            setEsc(false)
        }
    }, [erase])

    return (
        <article onClick={() => setEsc(!esc)}>
            {num}

            <style jsx>{`
                article{
                    background: ${esc ? 'black' : 'white'};
                    margin: 6px;
                    width: 60px;
                    height: 60px;
                    color: ${!esc ? 'black' : 'white'};
                    font-size: 36px;
                    font-weight: bold;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid black;
                    border-radius: 10px;
                    cursor: pointer;
                }
                   
            `}</style>
        </article> 
    )
}