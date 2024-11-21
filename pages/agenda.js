import AppLayout from '../componentes/layout'

export default function Agenda(){

    return(
        <AppLayout titulo='San Carlos - Agenda' name='Agenda'>
            <section>
                <embed 
                    src='/agenda.pdf#zoom=500'
                    type='application/pdf'
                    frameBorder='0'
                    width='1000px'
                    height='500px'
                    style={{borderRadius: '15px'}}
                />
            </section>

            <style jsx>{`
                section{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    overflow: hidden;
                }
            `}</style>
        </AppLayout>
    )
}