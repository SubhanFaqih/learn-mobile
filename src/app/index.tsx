import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import LabelInput from '@/components/labelInput';

export default function Index() {
  const [nilai1, setNilai1] = useState('');
  const [nilai2, setNilai2] = useState('');
  const [hasil, setHasil] = useState('');

  const add = () => {
    return setHasil(String(parseInt(nilai1) + parseInt(nilai2)));
  }

  const substraction = () => {
    return setHasil(String(parseInt(nilai1) - parseInt(nilai2)));
  }

  const multiply = () => {
    return setHasil(String(parseInt(nilai1) * parseInt(nilai2)));
  }

  const division = () => {
    return setHasil(String(parseInt(nilai1) / parseInt(nilai2)));
  }
    

  return (
    <View style={styles.container}>
      <LabelInput
        label="Nilai 1"
        placeholder="Masukkan nilai 1"
        value={nilai1}
        onChangeText={setNilai1}
        keyboardType="numeric"
      />

      <LabelInput
        label="Nilai 2"
        placeholder="Masukkan nilai 2"
        value={nilai2}
        onChangeText={setNilai2}
        keyboardType="numeric"
      />

      <Button
        onPress={() => division()}
        title="/"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
      <Button
        onPress={() => multiply()}
        title="x"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
      <Button
        onPress={() => substraction()}
        title="-"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
      <Button
        onPress={() => add()}
        title="+"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text style={styles.resultText}>Hasil: {hasil}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  resultText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});