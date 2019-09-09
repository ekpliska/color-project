import C from '../../../../src/constants';
import { color } from '../../../../src/reducers/colors';

describe('color Reducer', () => {
    
    it('ADD_COLOR success', () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: new Date().toString()
        }
        const results = color(state, action)
        expect(results)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: action.timestamp,
                rating: 0
            })
    })

    it('RATE_COLOR success', () => {})
    
})