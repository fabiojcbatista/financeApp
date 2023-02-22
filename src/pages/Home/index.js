import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [{
    id: 1,
    label: 'Boleto conta luz',
    value: '250,00',
    date: '10/02/2023',
    type: 0 //despesas
},
{
    id: 2,
    label: 'Pix cliente X',
    value: '500,00',
    date: '10/02/2023',
    type: 1 //receitaS/entradas
},
{
    id: 3,
    label: 'Salário',
    value: '2000,00',
    date: '01/02/2023',
    type: 1 //receitas/entrada
}];

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Fabio Jr" />
            <Balance saldo="9.000.00" gastos="-500.00" />
            <Actions/>
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item)=> String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><Movements data={item}/>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14

    },
    list:{
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    }
});