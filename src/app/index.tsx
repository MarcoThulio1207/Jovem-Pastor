import React from "react";
import { View, Text,Image, TextInput, TouchableOpacity, Touchable } from "react-native";
import { Link, router } from "expo-router";
import styles from '../../styles/styleGlobal'



export default function Login(){
    return(
        <View style={styles.containerLogin}>
                
            <Image
            source={require('../../assets/images/Logo/11.png')}
            style={styles.ImagemLogo}
            />
            
            <Text style={styles.txtEntrar}>Entrar</Text>

            <View style={styles.containerInput}>
                <TextInput
                placeholder="E-mail"
                // value={'email'}
                autoCapitalize="none"
                />
            </View>

            <View style={styles.containerInput}>
                <TextInput
                placeholder="Senha"
                // value={'email'}
                autoCapitalize="none"
                secureTextEntry
                />
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity
                style={styles.areaBtnLogin}
                >
                    <Text style={styles.txtbtnLogin}>Login</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                onPress={()=>router.push('./pages/Cadastro')}
                >
                    <Text style={styles.txtcadastro}>Não tem uma conta? Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
