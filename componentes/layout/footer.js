const Footer = () => (
        <div>
            <p className='footer'>en-Ricaurte</p>

            <style jsx>{`
                .footer{
                    background-color: #ccdae8;
                    padding-left: 15px;
                   
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    color: rgba(0, 0, 0, 0.4);
                    font-family: 'Kaushan Script', Geneva, Verdana, sans-serif;
                    border-top: 1px solid white;
                }

                @media screen and (max-width: 480px){
                    .en-r{
                        padding: 8px;
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    )

export default Footer;
