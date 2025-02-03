import ContEquipos from './ContEquipos'
import Equipo from '../Equipo'

export default function EquiposBiblico(){

    return (
        <ContEquipos nivel='Año Biblico' >
            <Equipo
                nombre='Los Hermanos de Jesus'
                paralelo='Año Bíblico 1 (M)'
                logo='A1M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Las Herederas de Dios'
                paralelo='Año Bíblico 1 (F)'
                logo='A1F'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Los Misioneros'
                paralelo='Año Bíblico 2 (M)'
                logo='A2M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Las Misioneras'
                paralelo='Año Bíblico 2 (F)'
                logo='A2F'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Los Ángeles Bíblicos'
                paralelo='Año Bíblico 3 (M)'
                logo='A3M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Equipo de Dios'
                paralelo='Año Bíblico 4 (M1)'
                logo='A4M'
                color='red'
                borde='red'
                letter='white'
                mas='1'
            />
            <Equipo
                nombre='Equipo Glorioso'
                paralelo='Año Bíblico 4 (M2)'
                logo='A4M'
                color='blue'
                borde='blue'
                letter='white'
                mas='2'
            />
            <Equipo
                nombre='Mujeres de Nazareth'
                paralelo='Año Bíblico 4 (F)'
                logo='A4F'
                color='red'
                borde='red'
                letter='white'
            />
            <Equipo
                nombre='Camino a la Tierra Prometída'
                paralelo='Año Bíblico 5 (M)'
                logo='A5M'
                color='white'
                borde='black'
                letter='black'
            />
            <Equipo
                nombre='Camino a la Tierra Prometída'
                paralelo='Año Bíblico 5 (F)'
                logo='A5F'
                color='white'
                borde='black'
                letter='black'
            />
        </ContEquipos> 
    )
}