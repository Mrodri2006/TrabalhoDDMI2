import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import  Modal  from 'react-native-modal';

export default function App() {
   const [visivel, setVisivel] = useState(false);
   const [visivel1, setVisivel1] = useState(false);
   const [visivel2, setVisivel2] = useState(false);

   const [nome,setNome] = useState('');
   const [data,setData] = useState('');
   const [valor,setValor] = useState('');
   
   const trocar = () => {
    setVisivel(!visivel);
   }

    const trocar1 = () => {
    setVisivel1(!visivel1);
   }

    const trocar2 = () => {
    setVisivel2(!visivel2);
   }

  const Limpar = () => {
    setNome('');
    setData('');
    setValor('');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CHAMO</Text>
        <Image source={require('./assets/logo.png')} style={styles.imagemLogo} />

        <TouchableOpacity style={styles.button} onPress={trocar}>
        <Text style={styles.buttonText}>Assistente Administrativo</Text>
      </TouchableOpacity>

      <Modal 
      isVisible={visivel} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text>Quer a vaga?</Text>
        <Text>Informe seus dados</Text> 
        
        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

      <TouchableOpacity  
      style={styles.button}
      onPress={() => { 
          Alert.alert('Enviado');
          Limpar();
        }
      }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.fecharButton} onPress={trocar}>
       <Text style={styles.fecharButtonText}>Fechar</Text>
       </TouchableOpacity>

      </Modal>

        <TouchableOpacity style={styles.button} onPress={trocar1}>
        <Text style={styles.buttonText}>Técnico em Suporte de TI</Text>
        </TouchableOpacity>

      <Modal 
      isVisible={visivel1} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text>Quer a vaga?</Text>
        <Text>Informe seus dados</Text>

        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

        <TouchableOpacity  
         style={styles.button}
         onPress={()=> { Alert.alert('Enviado');
         Limpar();
         }
         }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.fecharButton} onPress={trocar1}>
       <Text style={styles.fecharButtonText}>Fechar</Text>
       </TouchableOpacity>

      </Modal>

        <TouchableOpacity style={styles.button} onPress={trocar2}>
        <Text style={styles.buttonText}>Analista de Marketing Dig</Text>
        </TouchableOpacity>

      <Modal 
      isVisible={visivel2} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text>Quer a vaga?</Text>
        <Text>Informe seus dados</Text>
        
        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

      <TouchableOpacity  
      style={styles.button}
      onPress={()=> { Alert.alert('Enviado');
      Limpar();
       }
      }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fecharButton} onPress={trocar2}>
      <Text style={styles.fecharButtonText}>Fechar</Text>
      </TouchableOpacity>

      </Modal>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor:'#ffffff',
    width: '80%',
    marginTop: 200,
    marginBottom: 200,
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#15caff',
    borderWidth: 5,
    borderRadius: 20,
  },
titleText: {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#1E90FF',
  textShadowColor: '#aaa',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
  fontFamily: 'Poppins-Italic',
  fontStyle: 'italic',
  textAlign: 'center',
  position: 'absolute', 
  top: 40,               
  left: 0,
  right: 0,
},
button: {
  backgroundColor: '#1E90FF',
  paddingVertical: 12,
  paddingHorizontal: 25,
  borderRadius: 10,
  marginVertical: 10,
  alignItems: 'center',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
imagemLogo:{

},
textInput: {
  width: '80%',
  height: 45,
  borderColor: '#1E90FF',
  borderWidth: 2,
  borderRadius: 10,
  paddingHorizontal: 10,
  marginVertical: 8,
  backgroundColor: '#f9f9f9',
  fontSize: 16,
  color: '#333',
},
fecharButton: {
  backgroundColor: '#FF4D4D', 
  paddingVertical: 12,
  paddingHorizontal: 25,
  borderRadius: 10,
  marginTop: 15,
  alignItems: 'center',
  elevation: 3,
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
},

fecharButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

});
