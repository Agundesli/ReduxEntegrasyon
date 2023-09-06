import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { useDispatch } from 'react-redux';
//reducer tetiklemem gerekiyor bunu için dispatcher kullanmam gerekir
//dispactch ile reducer tetiklenir. İçierisinde iki parameter vardır.
    //type: reducer içerisindeki hangi case in çalışacağını buluyor.
    //payload tipinde bir nesne gönderiyoruz
const Primary = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({ type: 'ADD_LIST', payload: { name: text } });
    };

    const handleClean = () => {
        dispatch({type:'CLEAR_LIST'});
    };

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30, padding: 5 }}>Primary</Text>
            <View style={{ borderWidth: 1, margin: 5, borderColor: '#e0e0e0' }}>
                <TextInput value={text} onChangeText={setText} placeholder="İsim Giriniz..." />
            </View>
            <View style={{ margin: 5 }}>

                <Button title="Ekle" onPress={handleAdd} />
            </View>

            <View style={{margin:5}}>
                <Button title="Temizle" onPress={handleClean} />
            </View>


        </SafeAreaView>
    );
};


export default Primary;
