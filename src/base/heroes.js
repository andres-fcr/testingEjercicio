import { herores } from "../data/Heroes"

export const personaje = (id) => {
    return herores.find(heroe => heroe.id === id)
}