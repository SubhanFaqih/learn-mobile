import { StyleSheet, Text, View } from 'react-native';
export default function Page1() {
  return (
    <View style={styles.container}>
      {/* Header (Merah) */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Header</Text>
      </View>

      {/* Content (Kuning) */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Content</Text>
      </View>

      {/* Footer (Hijau) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
