import React, {useState, useEffect}from "react";
import { View, Text,TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "@/styles/styleGlobal";
import { router } from "expo-router";



export default function Cadastro(){

    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState("")
    const [email, setEmail] = useState("")
    const [erroEmail, setErroEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erroSenha, setErroSenha] = useState("")
    const [rSenha, setRSenha] = useState("")
    const [erroRSenha, setErroRSenha] = useState("")

    function limpaDados(){
        setNome('')
        setEmail('')
        setSenha('')
        setRSenha('')
    }

    const validar = () =>{
        let error = false;

        setErroNome('');
        setErroEmail('');
        setErroSenha('');
        setErroRSenha('');

        if (nome.trim() === ''){
            setErroNome("Preencha seu nome")
            error = true;
        }

        if (email.trim() === ''){
            setEmail("Preencha seu e-mail corretamente")
            error = true;
        }

        if (senha.length < 8){
            setErroSenha("A senha deve conter no mínimo 08 caracteres")
            error = true;
        }

        if (rSenha.length < 8){
            setErroRSenha("A senha deve conter no mínimo 08 caracteres")
            error = true;
        }

        if (senha !== rSenha){
            setErroSenha("As senhas não se coincidem")
            setErroRSenha("As senhas não se coincidem")
            error = true;
        }

        return !error;
    }


    
    return(
        <View style={styles.containerLogin}>

            <ScrollView>
                <View style={{marginTop:50}}>
                    <Text style={styles.txtCadastre}>Cadastre-se</Text>
                </View>

            <View style={styles.areaCadastro}>
                <Text style={styles.txtInput}>Nome Completo</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    value={nome}
                    onChangeText={(texto) => setNome(texto)}
                    />
                    {erroNome && 
                    <Text style={{color:'red',padding:5, fontSize:5}}>
                        {erroNome}
                    </Text>}
                </View>

                <Text style={styles.txtInput}>E-mail</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    value={email}
                    onChangeText={(texto)=>setEmail(texto)}
                    />
                </View>

                <Text style={styles.txtInput}>Senha</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    value={senha}
                    onChangeText={(texto)=> setSenha(texto)}
                    secureTextEntry
                    />
                </View>

                <Text style={styles.txtInput}>Repetir Senha</Text>
                <View style={styles.areaInput}>
                    <TextInput
                    style={styles.inputCadastro}
                    value={rSenha}
                    onChangeText={(texto)=>setRSenha(texto)}
                    secureTextEntry
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