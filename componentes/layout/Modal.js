const Modal = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div{
                background: rgba(0, 0, 0, 0.8);
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