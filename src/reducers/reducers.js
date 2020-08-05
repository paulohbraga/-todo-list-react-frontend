import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura',
            done: true
        },{
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            done: false
        },{
            _id: 3,
            description: 'Pagar faculdade',
            done: false
        }] 
    })
});

export default rootReducer;
