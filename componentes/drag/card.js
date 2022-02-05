const Card = ({ id, children }) => {
    const drag = e => e.dataTransfer.setData('transfer', e.target.id)
    const noAllowDrop = e => e.stopPropagation()

    return (
        <div 
            className='card'
            id={id}
            draggable={true}
            onDragStart={drag}
            onDragOver={noAllowDrop}
        >
            {children}        

            <style jsx>{`
                .card{
                    background-color: rgba(142, 56, 56, 0.1);
                    margin: 0 5px 8px 5px;
                    width: 135px;
                    height: 28px;
                    line-height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid brown;
                    border-radius: 8px;
                    cursor: pointer;
                }
            `}</style>
        </div> 
    )
}

export default Card