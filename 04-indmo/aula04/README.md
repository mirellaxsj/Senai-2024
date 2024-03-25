# Componentes Básicos - Aulao04

|Subpasta|Descrição|
|-|-|
|./lampada|App exemplo com botão que altera uma imagem.|


## Aula
 - 1. Abrir uma nova pasta chamada Aula 04
 - 2. Abrir a pasta com o Visual Code
 - 3. No Terminal executar o comando
      ```cmd
      npm install -g expo
      ```
- 4. Depois o comando
      ```cmd
     px create-expo-app lampada
     ```
- 5. Entrar na Pasta com o comando
       ```cmd
     cd Lampada
      ```
- 6. Executar o comando
     ```cmd
     npm run web
      ```
     
     - 6.1. Pode acontecer o seguinte erro
![image](https://github.com/wellifabio/senai2024/assets/156427878/12465ada-5a92-4e07-ab15-12303a19f6c3)

Neste caso instale estas depencendias
```cmd
npx expo install react-native-web react-dom @expo/metro-runtime 
```

- 7. Desenvolver a aplicação no arquivo **App.js**
```javascript
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch,ImageBackground, ScrollView } from 'react-native';

const  icon = require('./assets/icon.png');
const backgroundImage = require('./assets/background.jpg');

export default function App() {
const [habilitado, setHabilitado] = new useState(false);

const habilitar = () => {
  setHabilitado(!habilitado);
}

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
      <Image
      source={icon}
      style={styles.icon}
      />
      <Switch
      value={habilitado}
      onValueChange={habilitar}
      />
      <Image
      source={{
        uri: (habilitado)
        ? "./assets/lampadaon.png"
        : "./assets/lampadaoff.png"
      }}
      style={[styles.lampada, {opacity: 0.8}]}
      />
      <Image
      source={{
        uri: "https://w7.pngwing.com/pngs/924/553/png-transparent-thirty-one-gift-idea-business-organization-plan-man-service-sticker-musician.png"

      }}
      style={styles.pessoa}
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.5)', // Adicionando transparência ao contêiner
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '68px',
    height: '68px'
  },
  lampada: {
    width: '80px',
    height: '80px'
  },
  pessoa: {
    width: '200px',
    height: '200px'
  }
});
```
## Resultado
![image](https://github.com/wellifabio/senai2024/assets/156427878/39f11149-add0-478e-99ad-1c8b037e2276)
