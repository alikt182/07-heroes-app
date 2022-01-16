import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes/> ', () => {

    const contexValue = {
        user: {
            logged: true,
            name: 'Juanito'
        }
    }

    test('Debe mostrarse correctamente - Marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
        
    })

    test('Debe mostrarse correctamente - DC', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        //expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
        expect(wrapper.find('h1').text().trim()).toBe('DCScreen');
        
    })


        
})
