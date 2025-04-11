import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [form, setForm] = useState({
    namaSekolah: '',
    alamat: '',
    kodePos: '',
    provinsi: '',
    tipeSekolah: 'Negeri',
    jenjang: 'SD',
    noTelp: '',
    email: '',
    facebook: '',
    jumlahSiswa: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    // Validasi simple
    if (!form.namaSekolah || !form.alamat || !form.email) {
      Alert.alert('Error', 'Mohon isi semua field wajib!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulir Pendaftaran Sekolah</Text>

      <Text>Nama Sekolah *</Text>
      <TextInput style={styles.input} value={form.namaSekolah} onChangeText={val => handleChange('namaSekolah', val)} />

      <Text>Alamat *</Text>
      <TextInput style={styles.input} value={form.alamat} onChangeText={val => handleChange('alamat', val)} />

      <Text>Kode Pos</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={form.kodePos} onChangeText={val => handleChange('kodePos', val)} />

      <Text>Provinsi</Text>
      <TextInput style={styles.input} value={form.provinsi} onChangeText={val => handleChange('provinsi', val)} />

      <Text>Tipe Sekolah</Text>
      <Picker selectedValue={form.tipeSekolah} onValueChange={val => handleChange('tipeSekolah', val)} style={styles.input}>
        <Picker.Item label="Negeri" value="Negeri" />
        <Picker.Item label="Swasta" value="Swasta" />
      </Picker>

      <Text>Jenjang</Text>
      <Picker selectedValue={form.jenjang} onValueChange={val => handleChange('jenjang', val)} style={styles.input}>
        <Picker.Item label="SD" value="SD" />
        <Picker.Item label="SMP" value="SMP" />
        <Picker.Item label="SMA" value="SMA" />
      </Picker>

      <Text>No. Telepon</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" value={form.noTelp} onChangeText={val => handleChange('noTelp', val)} />

      <Text>Email *</Text>
      <TextInput style={styles.input} keyboardType="email-address" value={form.email} onChangeText={val => handleChange('email', val)} />

      <Text>Facebook</Text>
      <TextInput style={styles.input} value={form.facebook} onChangeText={val => handleChange('facebook', val)} />

      <Text>Jumlah Siswa</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={form.jumlahSiswa} onChangeText={val => handleChange('jumlahSiswa', val)} />

      <Button title="Submit" onPress={handleSubmit} />

      {submitted && (
        <View style={styles.report}>
          <Text style={styles.reportTitle}>📋 Data Terkirim:</Text>
          {Object.entries(form).map(([key, value]) => (
            <Text key={key}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  report: {
    marginTop: 30,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
  },
  reportTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
