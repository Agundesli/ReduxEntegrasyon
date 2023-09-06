import React from 'react';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux' 

import reducers from './reducers';
import initialState from './store';

//Bütün projeyi sarmalayacak olan global değişkenleri istenilen sayfa da çağırmamızı sağlayaak provider
const UserProvider = ({children}:any) =>{

    const store = createStore(reducers,initialState)

    return <Provider store={store}>{children}</Provider>;
};
export default UserProvider;