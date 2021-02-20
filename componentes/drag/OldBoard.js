const Board = ({id, className, children, notaU}) => {

    const drop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data))
        const opcion = data.substr(0, data.indexOf('-'))
        const conte = id.substr(0, id.indexOf('-'))
        console.log(opcion)
        if(id !== 'dr-0'){
            if(opcion == conte){
                notaU('correcto')
                console.log('correcto')
            } else {
                notaU('incorrecto')
                console.log('incorrecto')
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
                    min-height: 38px;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 5px 0 0 5px;
                    border-radius: 15px;
                }

                .board{
                    background: white;
                    margin-right: 5px;
                    width: 126px;
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

export default Board;