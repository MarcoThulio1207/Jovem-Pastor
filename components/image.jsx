import React  from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Imagens = ({Imagem}) => {
    return(
        <>
        <View style={styles.container}>
            <Image
            source={Imagem}
            style={styles.img}
            />
        </View>
        
        
        </>
    )
}

const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
    },
    container:{
        backgroundColor:'#C1C3C4',
        padding:8,
        borderRadius:10,
    }
})

export default Imagens;