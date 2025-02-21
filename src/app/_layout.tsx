import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { Stack } from 'expo-router';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
 const [loaded, error] = useFonts({
   'Arvo-Regular': require('../../assets/fonts/Arvo-Regular.ttf'),
   'Montserrat-Italic-VariableFont_wght': require('../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
    <Stack>
        <Stack.Screen 
        name='index'
        options={{
          headerShown: false
        }}
        />
    </Stack>
 )
}




