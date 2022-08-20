 import  React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState("20");
  const [valor2, setValor2] = useState("3");
  const [resultado, setResultado] = useState();
  function somar(){
	  
	  let r = parseFloat(valor1) + parseFloat(valor2);
	  setResultado(r);
  }
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
		  	<Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 1: </Text>
			 <TextInput 
				 style={styles.input}
				 value={valor1}
				 onChangeText={(valor)=>setValor1(valor)}
				 keyboardType="numeric"//aparece só o teclado numerico
			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 2: </Text>
			<TextInput 
				style={styles.input}
				value={valor2}
				onChangeText={(valor)=>setValor2(valor)}
				keyboardType="numeric"//aparece só o teclado numerico

			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>
			  	 Resultado: {resultado}
			  </Text>
		  </View>
		  <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={somar}	
			>
				<Text style={styles.textoBotao}>SOMAR</Text>  
			</TouchableOpacity>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  margin: 20
	  
  },
	bloco: {
		margintop: 20,
	},
	titulo: {
		
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	input: {
		borderWidth:2,
		fontSize: 20,
		borderRadius: 5
		
	},
	botao: {
		backgroundColor:'#000',
		borderRadius:15,
		width: 90,
		marginLeft: 110
	},
	textoBotao: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	}
	
});
