import { AppRouter } from '../../routers/AppRouter';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';


describe('Pruebas en <AppRouter/>', () => {
    
    
    test('debe mostrar el login si no está autenticado', () => {
        
        const contextValue = {
            user:{
                logged:false
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>

            </AuthContext.Provider>
        );

        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');

    })

    test('debe mostrar el componente de Marvel si está autenticado', () => {
        
        const contextValue = {
            user:{
                logged: true,
                name: 'Monse',

            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>

            </AuthContext.Provider>
        );

        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);

    })
})
