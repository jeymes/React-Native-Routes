import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'

type ParamsProps ={
    name: string
}

export function ScreenB(){
    const navigation = useNavigation();
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    return(
        <View style={{flex: 1, backgroundColor: '#222', alignItems: 'center', justifyContent:'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>{name}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}