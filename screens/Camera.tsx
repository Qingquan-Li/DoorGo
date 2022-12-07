import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { SafeAreaView } from 'react-native-safe-area-context';

//could make global styles to reuse instead of repetitive code
//logic for none or ommit? ask jake


export default function CameraP({navigation}: {navigation: any}) {

  let cameraRef: any = useRef();



  const [photo, setPhoto] = useState<any>();
  const [type, setType] = useState<any>(CameraType.back); //is it backwards or forwards
  const [hasCameraPermission, setHasCameraPermission] = useState<any>();
  const [hasMediaPermission, setHasMediaPermission] = useState<any>();

  useEffect(() => {
      (async () => {
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          const mediaPermission = await MediaLibrary.requestPermissionsAsync();
          setHasCameraPermission(cameraPermission.status === "granted");
          setHasMediaPermission(mediaPermission.status === "granted");
      })();
  }, []);

  if(hasCameraPermission === undefined)
  {
      return <Text>Requesting Permission</Text>
  }
  else if(!hasCameraPermission)
  {
      return (
          <Text>Access not granted, Please grant permission in settings</Text>
      )
  }


  let toggleCameraType = () => {
      setType((current: CameraType) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const goBack = () => {
    navigation.pop(1);
  }

  const takePicture = async () => {
      try {
          let options = {
              quality: 1,
              base64: true,
              exif: false, //
          };
  
          let newPhoto = await cameraRef.current.takePictureAsync(options);
          setPhoto(newPhoto);  
      } catch (error) {
          console.log(error);
      }
      
  };

  if (photo){
      let sharePic = () => {
          shareAsync(photo.uri).then(() => {
              setPhoto(undefined);
          })
      };

      let savePhoto = async () => {
          MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
              setPhoto(undefined);
          })
      };

      let proceedToKnobLabel = () => {
        navigation.navigate('Knob')
        
      }

      return (
          <SafeAreaView style={styles.container}>
              <Image style={styles.preview} source={{uri: "data:image/jpg;base64," + photo.base64}} />
              {/* <Button title={"share"} onPress={sharePic}/> */}
              {/* {hasMediaPermission ? <Button title={"Save"} onPress={savePhoto}/> : undefined} */}
              <Button title={"Discard"} onPress={()=> setPhoto(undefined) }/>
              <Button title={"Next"}  onPress={proceedToKnobLabel} />
          </SafeAreaView>
      );
  }

return (
  <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.takePicButton} onPress={takePicture} /*and then navigate to attributes*//>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}/>
            {/* <TouchableOpacity style={styles.goBackButton} onPress={goBack} /> */}
                {/* ideally insert icon here but ill let the letter T represent it */}
        </View>
    </Camera>
  </View>
)
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
  
    camera: {
      flex: 1,
    },
  
    takePicButton: {
      marginTop: 'auto',
      justifyContent: 'space-between',
      alignSelf: 'center',
      height: 50,
      width: 50,
      borderRadius: 35,
      backgroundColor: '#ffffffff',
      borderWidth: 3,
      borderColor: '#555555'
    },
  
    text: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  
    flipButton: {
      justifyContent: 'space-between',
      alignSelf: 'flex-end',
      height: 40,
      width: 40,
      backgroundColor: '#ffffff',
      marginBottom: 20,
      marginRight: 40
    },

    goBackButton: {
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
      height: 40,
      width: 40,
      backgroundColor: '#ffffff',
      marginBottom: 20,
      marginRight: 40
    },
  
    flipT: {
      color: '#f5f',
      fontSize: 30,
    },
  
    preview: {
      alignSelf: 'stretch',
      flex: 1,
    },
  })
