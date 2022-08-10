import {View, Button} from "react-native";
import {useNavigation} from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";

type StackParamList = {
    screenA: undefined;
    screenB: undefined;
}

export function ScreenA() {

    const navigation = useNavigation();


    function openScreen() {
        navigation.navigate('screenB', {name: 'Esse conteudo e da tela A'})
    }

    return (
        <View style={
            {
                flex: 1,
                backgroundColor: '#111',
                justifyContent: "center"
            }
        }>
            {/* <StatusBar backgroundColor="white"/> */}
            <Button title="Ir para B"
                onPress={openScreen}/>
        </View>
    );
}
