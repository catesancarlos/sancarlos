const Footer = () => (
        <div>
            <p className='footer'>en-Ricaurte</p>

            <style jsx>{`
                .footer{
                    padding-left: 15px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    color: #000000CC;
                    font-family: 'Kaushan Script', Geneva, Verdana, sans-serif;
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
