import { personaje } from "./heroes"

export const getIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = personaje(id)
            if (p1) {
                resolve(p1)
            } else {
                reject(`No existe un personaje con el id ${id}`)
            }
        }, 2000)
    })
}