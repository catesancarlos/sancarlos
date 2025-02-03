import ContEquipos from './ContEquipos'
import Equipo from '../Equipo'

export default function Equipos1Confir(){

    return (
        <ContEquipos nivel='Primero de Confirmación' >
            <Equipo
                nombre='Los Águilas'
                paralelo='1ro Confir. 1 (M)'
                logo='11M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Las Águilas'
                paralelo='1ro Confir. 1 (F)'
                logo='11F'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Santa Fé (M)'
                paralelo='1ro Confir. 2 (M)'
                logo='12M'
                color='black'
                borde='black'
                letter='white'
            />
            <Equipo
                nombre='Santa Fé (F)'
                paralelo='1ro Confir. 2 (F)'
                logo='12F'
                color='black'
                borde='black'
                letter='white'
            />
            <Equipo
                nombre='Los Angeles Negros'
                paralelo='1ro Confir. 3 (M)'
                logo='13M'
                color='black'
                borde='black'
                letter='white'
            />
            <Equipo
                nombre='Las Angeles Negros'
                paralelo='1ro Confir. 3 (F)'
                logo='13F'
                color='black'
                borde='black'
                letter='white'
            />
            <Equipo
                nombre='Newcastels (M)'
                paralelo='1ro Confir. 4 (M)'
                logo='14M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Newcastels (F)'
                paralelo='1ro Confir. 4 (F)'
                logo='14F'
                color='white'
                borde='black'
                letter='black'
            />
        </ContEquipos> 
    )
}