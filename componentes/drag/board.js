const Board = ({ no, index, id, className, children }) => {
    
    const drop = e => {
        e.preventDefault()
        const data = e.dataTransfer.getData('transfer')
        e.target.appendChild(document.getElementById(data))

        if(id !== 'dr-0'){
            if(data == id.split('&')[1]) sessionStorage.setItem(`p${no}o${index}`, JSON.stringify([1, data]))
            else sessionStorage.setItem(`p${no}o${index}`, JSON.stringify([0, data]))
        }
    }

    const allowDrop = e => e.preventDefault()

    return (
        <div
            id={id}
            onDrop={drop}
            onDragOver={allowDrop}
            className={className}
        >
            {children}
            <style jsx>{`
                .cont-respuestas{
                    background: rgba(255, 255, 255, 0.5);
                    margin: 10px 0 20px 0;
                    min-height: 44px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 8px 0 0 8px;
                    border-radius: 15px; 
                }

                .board{
                    background: white;
                    margin: 0 0 0 -5px;
                    width: 138px;
                    height: 34px;
                    display: flex;
                    padding: 2px 0;
                    border: 1px dashed black;
                    border-radius: 10px;
                } 
            `}</style>
        </div> 
    )
}

export default Board