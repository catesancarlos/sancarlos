import Router from 'next/router'

const Atras = () => (
    <div>
        <p 
            className='en-r'
            onClick={() => Router.back()}
        >{`<< Atras`}</p>

        <style jsx>{`
            .en-r{
                margin: 0;
                position: fixed;
                bottom: 40px;
                left: 20px;
                background: brown;
                color: white;
                padding: 5px;
                font-size: 20px;
                border-radius: 10px 0 0 10px;
                cursor: pointer;
                z-index: 1;
            }

            @media screen and (max-width: 480px){
                .en-r{
                    font-size: 15px;
                    left: 8px;
                    bottom: 30px;
                }
            }
        `}</style>
    </div>
)

export default Atras;
