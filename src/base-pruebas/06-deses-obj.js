
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

export const usContext = ({ clave: nombreClave, edad: anios }) => ({
    nombreClave,
    anios,
    latlng: {
        lat: 14.1232,
        lng: -12.3232
    }
})

const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );