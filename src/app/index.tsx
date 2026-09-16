import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LabelInput from '@/components/labelInput';

export default function Index() {
  const [nilai1, setNilai1] = useState('');
  const [nilai2, setNilai2] = useState('');
  const num1 = Number(nilai1) || 0;
  const num2 = Number(nilai2) || 0;
  const hasil = num1 * num2;

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

      <Text style={styles.resultText}>Hasil Perkalian: {hasil}</Text>
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