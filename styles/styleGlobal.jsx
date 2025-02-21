import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        backgroundColor:'#E0E0D9',
        alignItems:'center',
    },
    ImagemLogo:{
        width:250,
        height:250,
        marginTop:40
    },
    txtEntrar:{
        marginTop:70,
        fontSize:30,
        color:'#3C4A43',
        fontFamily:'Arvo-Regular'
    },
    containerInput:{
        backgroundColor:'#C1C3C4',
        padding:8,
        width:300,
        borderRadius:5,
        marginTop:10
    },
    containerBtn:{
        marginTop:15,
        backgroundColor:'#C1C3C4',
        borderRadius:5,
        alignItems:'center'
    },
    areaBtnLogin:{
        width:200,
        height:50
    },
    txtbtnLogin:{
        padding:8,
        textAlign:'center',
        marginTop:5,
        color:'#3C4A43',
        fontFamily:'Arvo-Regular',
        fontSize:20

    },
    txtcadastro:{
        fontSize:15,
        marginTop:15,
        color:'#3C4A43'
    }
})

export default styles;

