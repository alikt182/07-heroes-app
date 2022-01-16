import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/hero/HeroScreen';


const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en HeroScreen', () => {

    test('NO debe mostrar el HeroScreen si no hay un heroe en la URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No hero page</h1>}/>
                </Routes>
            </MemoryRouter>

        );

        expect( wrapper.find('h1').text().trim()).toBe('No hero page');
        
    })

    test('Debe mostrar el HeroScreen si existe un hero y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No hero page</h1>}/>
                </Routes>
            </MemoryRouter>

        );

        expect( wrapper.find('.row').exists()).toBe( true );
        
    })


    test('Debe regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No hero page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith(-1)

        
    })
    
    test('Debe mostrar el NO HERO PAGE si no tenemos un heroe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderQLO']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No hero page</h1>}/>
                </Routes>
            </MemoryRouter>

        );

        expect( wrapper.text() ).toBe('No hero page')
        
    })

    
    
})
