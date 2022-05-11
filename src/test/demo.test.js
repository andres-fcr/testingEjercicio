import { isLoggedIn } from "../base/01_var"
import { usuario } from "../base/02_string";
import '@testing-library/jest-dom';
import { getSaludo } from "../base/03_action";
import { getUSer } from "../base/04_object";
import { personaje } from "../base/heroes";
import { herores } from "../data/Heroes";
import { getIdAsync } from "../base/05_promise";
import { getImagen } from "../base/06_async_await";


describe('Pruebas a demo test', () => {
    test('Validar login', () => {
        const isAuthenticated = isLoggedIn

        if (isAuthenticated) {
            console.log('Usuario autenticado');
        } else {
            throw new Error('Usuario no autenticado')
        }
    })
    test('Validar usuario', () => {
        const userValidate = 'Pepito'
        expect(userValidate).toBe(usuario)
    })
    test('Comparar mensajes', () => {
        const nombre = 'Andres'
        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre} eres bienvenido`)
    })
    test('Comparar objetos', () => {
        const user = getUSer()
        const userValidate = {
            name: 'Pepito',
            password: '123456'
        }
        expect(user).toEqual(userValidate)
    })
    test('Validar superheroe', () => {
        const id = 3
        const heroe = personaje(id)
        const filtrado = herores.find(heroe => heroe.id === 3)
        expect(heroe).toBe(filtrado)
    })
    test('Validar superheroe async', (done) => {
        const id = 2
        getIdAsync(id)
            .then(resp => {
                expect(resp).toBe(herores[1])
                done()
            })
    })
    test('Validar url', async ()=> {
        const url = await getImagen()
        expect(typeof url).toBe('string')
     })
})