import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import CustomButton from '../components/customPostButton';


export default function Misc({navigation}: {navigation: any})
{
    const [hasRamp, setHasRamp] = useState<boolean>(false);
    const [hasSteps, setHasSteps] = useState<boolean>(false);

   
  
    return (
      <View style={styles.container}>

        <Pressable onPress={() => navigation.pop(1)} >
          <Text style={styles.backButton}>{'< Previous'} </Text>
        </Pressable>

        <Text style={styles.title}> Door Attributes </Text>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={hasRamp}
            disabled={false} //if they press none then I can make this false eventually
            onValueChange={setHasRamp}
            color={hasRamp ? '#34eba4' : undefined}
          />
          <Text style={styles.paragraph}>Ramp</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={hasSteps}
              disabled={false} //if they press none then I can make this false eventually
              onValueChange={setHasSteps}
              color={hasSteps ? '#34eba4' : undefined}
            />
            <Text style={styles.paragraph}>Steps</Text>
        </View>
        <CustomButton
              title={"Submit"}
              onPress={() => null}
            />
      </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 80,
      
    },
  
    title: {
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
      marginBottom: 50,
      marginTop: 40,
    },
  
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    checkbox: {
      margin: 8,
      marginLeft: 45
    },
    
    backButton: {
      marginLeft: 10,
      color: '#0055b3',
      fontSize: 20,
      fontWeight: '300'
    },
  });