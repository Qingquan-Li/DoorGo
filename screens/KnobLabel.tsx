import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import CustomButton from '../components/customPostButton';


export default function Knob({navigation}: {navigation: any})
{
    const [isPullHandler, setPullHandle] = useState<boolean>(false);
    const [isVerticalBarHandle, setVerticalBarHandle] = useState<boolean>(false);
    const [isHorizontalBarHandle, setHorizontalBarHandle] = useState<boolean>(false);
    const [isKnobHandle, setKnobHandle] = useState<boolean>(false);
    const [isNone, setNone] = useState<boolean>(false);

    let proceedToDoorLabel = () => {
      navigation.navigate('Door')
      
    }



  
    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigation.pop(1)} >
          <Text style={styles.backButton}>{'< Previous'} </Text>
        </Pressable>
          
        <Text style={styles.title}> Handle Attributes </Text>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isPullHandler}
            disabled={false} //if they press none then I can make this false eventually
            onValueChange={setPullHandle}
            color={isPullHandler ? '#34eba4' : undefined}
          />
          <Text style={styles.paragraph}>Pull Handle</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={isVerticalBarHandle}
              disabled={false} //if they press none then I can make this false eventually
              onValueChange={setVerticalBarHandle}
              color={isVerticalBarHandle ? '#34eba4' : undefined}
            />
            <Text style={styles.paragraph}>Vertical Bar Handler</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={isHorizontalBarHandle}
              disabled={false} //if they press none then I can make this false eventually
              onValueChange={setHorizontalBarHandle}
              color={isHorizontalBarHandle ? '#34eba4' : undefined}
            />
            <Text style={styles.paragraph}>Horizontal Bar Handle</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={isKnobHandle}
              disabled={false} //if they press none then I can make this false eventually
              onValueChange={setKnobHandle}
              color={isKnobHandle ? '#34eba4' : undefined}
            />
            <Text style={styles.paragraph}>Knob Handle</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={isNone}
              disabled={false} //if they press none then I can make this false eventually
              onValueChange={setNone}
              color={isNone ? '#34eba4' : undefined}
            />
            <Text style={styles.paragraph}>None</Text>
        </View>


          <CustomButton
              title={"Next"}
              onPress={proceedToDoorLabel}
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
      marginBottom: 40,
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