const Board = ({id, className, children, notaU}) => {

    const drop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data))
        const posi = id.indexOf('-')
        const conte = id.substr(0, posi)
        if(id !== 'dr-0'){
            if(data == conte){
                notaU('correcto')
            } else {
                notaU('incorrecto')
            }
        }
    }

    const allowDrop = e => {
        e.preventDefault();
    }

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
                    margin: 10px 0 20px 25px;
                    min-height: 30px;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 5px 0 0 5px;
                    border-radius: 15px;
                }

                .board{
                    background: white;
                    width: 110px;
                    height: 30px;
                    border: 1px dashed black;
                    border-radius: 10px;
                } 
            `}</style>

        </div> 
    )
}

export default Board;