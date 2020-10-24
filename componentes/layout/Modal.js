const Modal = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div{
                background: #000000CC;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
)

export default Modal