import ContEquipos from './ContEquipos'
import Equipo from '../Equipo'

export default function EquiposIniciacion(){

    return (
        <ContEquipos nivel='Iniciación' >
            <Equipo
                com
                nombre='Niños Guerreros de Dios'
                paralelo='Iniciación 1 (M)'
                logo='I1M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                com
                nombre='Niñas Guerreras de Dios'
                paralelo='Iniciación 1 (F)'
                logo='I1F'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                com
                nombre='Los elegidos de Dios'
                paralelo='Iniciación 2 (M)'
                logo='I2M'
                color='white'
                borde='black'
                letter='black'
                op
            />
            <Equipo
                com
                nombre='La elegidas de Dios'
                paralelo='Iniciación 2 (F)'
                logo='I2F'
                color='white'
                borde='black'
                letter='black'
                op
            />
            <Equipo
                com
                nombre='Los Reyes'
                paralelo='Iniciación 3 (M)'
                logo='I3M'
                color='blue'
                borde='blue'
                letter='white'
                op
            />
            <Equipo
                com
                nombre='Las Reinas'
                paralelo='Iniciación 3 (F)'
                logo='I4F'
                color='fuchsia'
                borde='fuchsia'
                letter='white'
                op
            />
        </ContEquipos> 
    )
}