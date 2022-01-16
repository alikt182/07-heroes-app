import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route} from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { Navbar } from '../../ui/Navbar';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en <Navbar/> ', () => {

    const contexValue = {
        dispatch: jest.fn(),
        user:{
            name:'Pedro',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Navbar/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Pedro');

    })


    test('Debe llamar el navigate y el dispatch, con los argumentos', () => {
        
        wrapper.find('button').prop('onClick')();
        
        expect( contexValue.dispatch ).toHaveBeenCalledWith({
            'type': types.logout
        })

        expect( mockNavigate ).toHaveBeenCalledWith('/login', {replace: true} )
        
    })
    
    
    
})
