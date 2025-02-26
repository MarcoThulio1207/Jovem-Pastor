import React from "react";
import { View, Text,TextInput, ScrollView, TouchableOpacity, } from "react-native";
import styles from "@/styles/styleGlobal";
import { router } from "expo-router";

export default function Termos(){
    return(
        <View>
            <Text style={styles.tituloTermo}>Termos de Uso e Política de Privacidade</Text>

            <ScrollView>

                <Text style={styles.txt}>Última Atualização: 25/02/2025{'\n'}{'\n'}
                    Bem-vindo ao Jovem Pastor! Estes Termos de Uso e a Política de Privacidade regulam o uso do nosso aplicativo de devocional. Ao utilizar o aplicativo, você concorda com os termos aqui estabelecidos. Caso não concorde, recomendamos que não utilize o aplicativo.</Text>

                <Text style={styles.tituloTermo}>1. Termos de Uso</Text>

                <Text style={styles.txt}>1.1. Uso do Aplicativo{'\n'}{'\n'}

                        O Jovem Pastor é um aplicativo voltado para devocionais cristãos, oferecendo conteúdos bíblicos, estudos e recursos espirituais. {'\n'}

                        O usuário deve ter pelo menos 13 anos para utilizar o aplicativo.{'\n'}{'\n'}

                        O uso do aplicativo deve ser feito de maneira responsável, sem violar leis ou direitos de terceiros.{'\n'}{'\n'}

                        1.2. Conteúdo e Direitos Autorais{'\n'}{'\n'}

                        Todo o conteúdo disponibilizado no Jovem Pastor (textos, imagens, vídeos, áudios e outros materiais) é protegido por direitos autorais e de propriedade intelectual.{'\n'}{'\n'}

                        O usuário não pode copiar, distribuir ou modificar o conteúdo do aplicativo sem autorização.{'\n'}{'\n'}

                        1.3. Modificações e Encerramento{'\n'}{'\n'}

                        O aplicativo pode ser atualizado periodicamente, e funcionalidades podem ser adicionadas ou removidas sem aviso prévio.{'\n'}{'\n'}

                        Podemos encerrar o acesso ao aplicativo a qualquer momento caso haja violação dos termos de uso.</Text>


                <Text style={styles.tituloTermo}>2. Política de Privacidade</Text>

                <Text style={styles.txt}>2.1. Coleta de Informações{'\n'}{'\n'}

                    Podemos coletar informações como nome, e-mail e preferências do usuário para melhorar a experiência no aplicativo.{'\n'}{'\n'}

                    O Jovem Pastor não compartilha dados pessoais com terceiros sem o consentimento do usuário.{'\n'}{'\n'}

                    2.2. Uso de Informações{'\n'}{'\n'}

                    As informações coletadas são utilizadas para:{'\n'}{'\n'}

                    Personalizar o conteúdo do devocional.{'\n'}{'\n'}

                    Melhorar a navegação e funcionalidades do aplicativo.{'\n'}

                    Enviar notificações e comunicados relevantes.{'\n'}{'\n'}

                    2.3. Segurança{'\n'}{'\n'}

                    Tomamos medidas de segurança para proteger os dados dos usuários, mas não podemos garantir proteção absoluta contra acessos não autorizados.{'\n'}{'\n'}
                    
                    2.4. Cookies e Tecnologias Semelhantes{'\n'}{'\n'}

                    Podemos utilizar cookies para armazenar preferências do usuário e melhorar a experiência no aplicativo.
                    {'\n'}{'\n'}
                    2.5. Direitos do Usuário{'\n'}{'\n'}

                    O usuário pode solicitar a exclusão de suas informações pessoais a qualquer momento enviando um e-mail para jovempastor7@gmail.com.{'\n'}</Text>

                <Text style={styles.tituloTermo}>3. Contato</Text>

                <Text style={styles.txt}>Caso tenha dúvidas sobre os Termos de Uso ou a Política de Privacidade, entre em contato pelo e-mail: jovempastor7@gmail.com.{'\n'}

                Obrigado por utilizar o Jovem Pastor! Que sua experiência seja edificante!</Text>

                <View style={styles.BtnVoltaCadastro}>
                    <TouchableOpacity
                    style={styles.BtnVoltacadastro}
                    onPress={()=> router.back()}
                    >
                        <Text style={styles.txtVoltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            <View style={{marginTop:60}}></View>

            </ScrollView>
        </View>
    )
}