import React from "react";
import { View, Text,ScrollView,TouchableOpacity, TouchableHighlight } from "react-native";
import styles from './style'
import Imagens from '../../../../components/image'
import YoutubeIframe from 'react-native-youtube-iframe'


export default function Home(){
    return(
<>
        <View style={styles.container}>
            <Text style={styles.txt}>Seja bem vindo!</Text>
        </View>
        
        <View>
            <ScrollView 
            horizontal
            persistentScrollbar={true}
            >
                <View style={styles.containerImg}>

                    <TouchableOpacity>
                        <View style={styles.areaContainer}>
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/spotify.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    
                    <TouchableOpacity>
                        <View style={styles.areaContainer}>
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/playlist.png')}
                            /> 
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.areaContainer}>
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/yt.png')}
                            /> 
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.areaContainer}>
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/instagram.png')}
                            /> 
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.areaContainer}>
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/musica.png')}
                            /> 
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.areaContainer}> 
                            <Imagens
                            Imagem={require('../../../../assets/images/icons/estudo.png')}
                            /> 

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

            <Text style={styles.txtVideo}>Ultimo vídeo:</Text>

                <YoutubeIframe
                    videoId="YaDdHLLAS08"
                    height={460}
                />
        
        </>

    )
}