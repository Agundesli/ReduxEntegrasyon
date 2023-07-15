//Create edilen storeların, Store da tanımlasnan global statelerin güncelleneceği functiyon alanı

export default function(state:any, action:any){

    switch (action.type) {

        case 'ADD_LIST':

            const {name} = action.payload;
            const newList =[...state.nameList,name];

            return{...state, nameList: newList};
        
        case 'CLEAR_LIST':
            return{...state, nameList:[]};
    
        default:
            return state;
    }
}