import JsLayout from '../../componentes/layout/JsLayout'

export default function Jesuscribe(){

    return(
        <JsLayout 
            titulo='JESUSCRIBE'
            name='Jesuscribe'
            back='#B0C0D9'
        >
            <div className='cont'>
                BIENVENIDOS
            </div>

            <style jsx>{`
                .cont{
                    margin: 36px 10% 0 10%;
                    width: 80%;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </JsLayout>
    )
}