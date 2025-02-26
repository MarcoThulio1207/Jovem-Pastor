import React from "react";
import { View, Text,TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "@/styles/styleGlobal";
import { router } from "expo-router";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export default function Cadastro(){
    
    return(
        <View style={styles.containerLogin}>

            <ScrollView>
                <View style={{marginTop:5}}>
                    <Text style={styles.txtCadastre}>Cadastre-se</Text>
                </View>

            <View style={styles.areaCadastro}>
                <Text style={styles.txtInput}>Nome Completo</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    />
                </View>

                <Text style={styles.txtInput}>E-mail</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    />
                </View>

                <Text style={styles.txtInput}>Senha</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    />
                </View>

                <Text style={styles.txtInput}>Repetir Senha</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    />
                </View>

                <Text style={styles.txtInput}>Data de Nascimento</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    />
                </View>


                <View style={{marginTop:25}}>
                    <TouchableOpacity 
                    onPress={()=>router.push('/pages/Cadastro/termos')}
                    style={styles.btnTermos}
                    >
                        <Text style={styles.txtBtnTermos}>Termos de Uso e Privacidade</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity
                    style={styles.btnCadastro}
                    >
                        <Text style={styles.txtBtnCadastro}>Enviar Cadastro</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity
                    onPress={()=>router.back()}
                    style={styles.btnVolta}
                    >
                        <Text style={styles.txtBtnVoltar}>Ou acesse sua conta</Text>
                    </TouchableOpacity>
                </View>


                <View style={{marginBottom:30}}></View>
            </View>
            </ScrollView>
        </View>
    )
}   