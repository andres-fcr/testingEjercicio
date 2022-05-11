import { shallow } from "enzyme"
import PrimeraApp from "./PrimeraApp"

describe('Prueba <PrimeraApp />', () => {
    test('Validar render de <PrimeraApp/>', () => {
        const saludoA = 'Hola mundo'
        const subitutloA = 'Esto es una prueba'

        const wrapper = shallow(<PrimeraApp saludo={saludoA} subtitulo={subitutloA} />)
        expect(wrapper).toMatchSnapshot()
    })
})