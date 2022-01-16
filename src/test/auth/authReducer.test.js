import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'


describe('Pruebas en authReducer',()=>{

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer( { logged: false }, {})
        expect( state ).toEqual( {logged: false })
        
    })

    test('Debe autenticar y colocar el "name" de usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Monserrate',
            }
        }
        
        const state = authReducer( { logged: false }, action );

        expect( state ).toEqual({
            logged: true,
            name: 'Monserrate'
        })
    })

    test('Debe borrar el name de usuario y logged en false', () => {

        const action = {
            type: types.logout,
        };

        const state = authReducer({ logged: true , name: 'Monserate'}, action);

        expect( state ).toEqual( { logged: false });
        
    })
    
    
})