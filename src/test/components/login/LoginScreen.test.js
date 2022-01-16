import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en <LoginScreen/>", () => {
  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contexValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {

    expect(wrapper).toMatchSnapshot();
    
  });

  test("Debe realizar el dipatch y la navegación", () => {

    const handleClick = wrapper.find('button').prop('onClick');
    handleClick(),

    expect( contexValue.dispatch ).toHaveBeenCalledWith({
        type: types.login,
        payload: {
            name: 'Monserrate'
        }
    })

    expect( mockNavigate).toHaveBeenCalledWith('/', {replace: true});
    
    localStorage.setItem('lastPath','/dc')
    
    handleClick();
    
    expect( mockNavigate).toHaveBeenCalledWith('/dc', {replace: true});
  });
});
