import JesuscribeNext from '../../componentes/banners/JesuscribeNext'
import JsLayout from '../../componentes/layout/JsLayout'

export default function Jesuscribe(){

    return(
        <JsLayout 
            titulo='JESUSCRIBE'
            name='Jesuscribe'
            back='#B0C0D9'
            non
        >
            <div className='cont'>
                <strong>BIENVENIDOS</strong>
                <JesuscribeNext />
            </div>

            <style jsx>{`
                .cont{
                    position: relative;
                    margin: 0 10% 0 10%;
                    height: calc(100vh - 86px);
                    width: 80%;
                    padding-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                strong{
                    position: absolute;
                    color: white;
                    top: 105px;
                    left: 7%;
                    font-size: 50px;
                    z-index: 10;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: black;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </JsLayout>
    )
}