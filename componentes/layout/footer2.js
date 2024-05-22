const Footer = () => (
    <div>
        <p className='footer'>Luve</p>

        <style jsx>{`
            .footer{
                background: #ccdae8;
                position: fixed;
                bottom: 0;
                left: 0;
                padding-left: 25px;
                width: 100%;
                height: 35px;
                line-height: 35px;
                font-size: 17px;
                color: rgba(0, 0, 0, 0.4);
                font-family: 'Kaushan Script', cursive;
                border-top: 1px solid white;
                z-index: 1;
            }

            @media screen and (max-width: 480px){
                .footer{                    
                    padding-left: 10px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    border-top: 0.5px solid white;
                }
            }
        `}</style>
    </div>
)

export default Footer;