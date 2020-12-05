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
                    margin: 0 2.5px 5px 2.5px;
                    width: 120px;
                    height: 28px;
                    line-height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid brown;
                    border-radius: 10px;
                    cursor: pointer;
                }
            `}</style>

        </div> 
    )
}

export default Card;