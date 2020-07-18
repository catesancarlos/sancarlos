const Card = (props) => {

    const drag = e => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

    const noAllowDrop = e => {
        e.stopPropagation();
    }

    return (
        <div 
            id={props.id}
            draggable={true}
            onDragStart={drag}
            onDragOver={noAllowDrop}
            className='card'
        >
            {props.children}            

            <style jsx>{`
                .card{
                    background-color: rgba(142, 56, 56, 0.1);
                    width: 110px;
                    margin: 0 5px 5px 0;
                    padding: 5px 0;
                    text-align: center;
                    border: 1px solid brown;
                    border-radius: 10px;
                    cursor: pointer;
                }
            `}</style>

        </div> 
    )
}

export default Card;