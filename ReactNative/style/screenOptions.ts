/*

Qu'est ce que screenOptions ?
- - - - - - - - - - - - - - -

C'est une prop du composont Stack.Navigator qui permet de modifier l'apparence et le
comportement des écrans.(Header, animations, transitions,...)


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}


Principale options dans screenOptions :
- - - - - - - - - - - - - - - - - - - - 

options                               description
- - - -                               - - - - - - 

headerShown                            affiche ou cache l'en-tête
headerStyle                            style du fond du header
headerTintColor                        Couleur du text et des icones dans le header
animation                              type de transitions
gestureEnabled                         Active ou non le geste de retour
presentation                           mode d'affichage

*/