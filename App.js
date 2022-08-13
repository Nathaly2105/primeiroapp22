import  React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
		  	<Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 1: </Text>
			 <TextInput style={styles.input}/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 2: </Text>
			<TextInput style={styles.input}/>
		  </View>
		  <br></br>
		  <View>
		  	<TouchableOpacity style={styles.botao}>
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
