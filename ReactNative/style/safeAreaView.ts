/*

A quoi sert safeAreView ?
- - - - - - - - - - - - 

C'est un composant de react-native qui garantie que ton UI reste visible et accessible
dans les zones sûres de l'écran.
notament :
    iPhone avec encoche ou Dynamic Island
    Appareils avec barres système (Android, iOS)


    import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello depuis la zone sûre !</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});


⚠️ Limite :
<SafeAreaView /> ne gère que les marges extérieures. Si tu veux un contrôle plus fin (ex: seulement en haut ou en bas), tu peux utiliser :

js
Copier
Modifier
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();

<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
  ...
  </View>
*/