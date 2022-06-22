import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Image, Text, View, } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, GoudyBookletter1911_400Regular } from '@expo-google-fonts/goudy-bookletter-1911';


 export default function App() {

  let [fontsLoaded] = useFonts(
    GoudyBookletter1911_400Regular

 );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Tinder do Senac</Text>
      <Text style={styles.titulo2}>Você tem um projeto integrador</Text>
      <Text style={styles.titulo3}>Quer envolver novas areas?</Text>
      <Text style={styles.titulo4}>então vamos encontrar os alunos aqui?</Text>
      <FlatList
      data={pessoas}
      renderItem ={({item}) =>
      

  <View style={styles.pessoas}>
    <View style={styles.nome}>
  <Text>{item.nome}</Text>
 
  <Text>{item.curso}</Text>
  <Text>{item.periodo}</Text>
  <Text>{item.turma}</Text>
  <Text>{item.gosto}</Text>
  <Text>{item.bio}</Text>
  <Image style={styles.img} source={item.img}/>
  
  </View>
 </View>
}
 />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
   backgroundColor:'#E0FFFF',
   textAlign:'center'
  },

  img: {
   width:50,
   height:50,
   borderRadius:300,
   alignItems:'center',
   marginTop:20,
   marginBottom:20,
  
  },

  pessoas:{
    justifyContent:'center',
    alignItems:'flex-start',
    color:'#ffff'
   
  },

  titulo1:{
    fontSize:48,
    marginTop:30,
    fontFamily:'GoudyBookletter1911_400Regular',
    color:'#FF0000',
    
  },

  titulo2:{
    fontSize:20,
    marginTop:10
  },
  titulo3:{
    fontSize:20,
    marginTop:10 
  },
 
  titulo4:{
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },

  nome:{

  },
 
  });
  const pessoas = [
    {
      uid:157,
      nome:'Cauãzinho chavão',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Livia, hosana, laura, Mol e casadas', 
      bio:'Hardware, redes, fazendo programa nois é só o basico, preto lindo, famoso e rico',
      img:require('./assets/fotoperfil/123.jpg')
     
    },
  

  {
    uid:421,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:require('./assets/fotoperfil/brn.png')
  },


{
uid:850,
    name:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img:require('./assets/fotoperfil/PEQUENINO.png')
  },

{
  uid:420,
  nome:'Caio elias',
  curso:'Tecnico de informatica',
  periodo:'Manhã',
  turma:'TI10m',
  gosto:'Hardware,Banco de dados,C#',
  bio:'garoto de programa junior',
  img:require('./assets/fotoperfil/bosonaro.png')
  },
{
  uid:159,
  nome:'Danilo Soares',
  curso: 'Técnico de Informática',
  periodo: 'Manhã',
  turma: 'Ti10',
  gosto:'Hardware,Front-end,Redes,PHP', 
  bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
  img:require('./assets/fotoperfil/silvio.png')
},
{
  uid:69,
  nome:'sasuke',
  curso:'ninja',
  periodo:'manhã',
  turma:'ti12',
  gosto:'sofrer',
  bio:'matar um certo alguem é meu sonho',
  img:require('./assets/fotoperfil/srk.png')
},
]
