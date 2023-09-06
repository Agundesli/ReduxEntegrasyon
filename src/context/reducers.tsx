//Create edilen storeların, Store da tanımlanan global statelerin güncelleneceği function alanı
//Craete store ilk parametresi burada render edilri ve bu baştan sona bir arrow fonksiyondur
//state ve action’ı parametre alan ve yeni state’i dönen pure bir fonksiyondur.
    //Action’ın type’ına göre ilgili state’i değiştirir ve yeni state’i geri döner.
    //return ederken state parametresi mevcut store içindeki state değerini korur ve değişen satet değerini de yanında vererek proje render edilir.
    
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