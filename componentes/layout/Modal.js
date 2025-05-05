const Modal = ({ children, background='rgba(0, 0, 0, 0.8)' }) => (
    <div>
        {children}

        <style jsx>{`
            div{
                background: ${background};
                position: fixed;
                top: 0;
                /* bottom: 100px; */
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