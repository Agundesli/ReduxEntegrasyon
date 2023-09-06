import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
//global stateleri görübilmek kullanabilmek vs içindse useSelectoru kullanıyoruz
const Secondary = () => {
    const list = useSelector(s => s.nameList);
    return (
        <SafeAreaView>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:24}}>İSİMLER</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={({ item }) => <Text>{item}</Text>} />
        </SafeAreaView>
    );
};


export default Secondary;
