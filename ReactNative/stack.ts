/**
 * Qu'est ce qu'une stack en react Native ?
 * 
 * Une stack est un modèle de navigation où les écrans sont empilés les uns au-dessus des autres, comme une pile de carte.
 * Quand tu vas sur un nouvel écran, il est ajouté au sommet de la pile.
 * Quand tu reviens en arrière, l'écran sur haut et retiré et tu reviens sur l'écran d'en dessous.
 * 
 *  import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import { NavigationContainer } from '@react-navigation/native';

    const Stack = createNativeStackNavigator();

    function App() {
        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
            </NavigationContainer>
        );
    }

 * Dans cette exemple, tu commences par Home.
 * Quand tu vas sur Profil, ce dernier est empilé.
 * En appuyant sur "back", tu retournes à Home, comme si tu retirais une carte du dessus de la pile.
 * 
 * Pourquoi on appel ca une stakc ?
 * c'est basé sur la strucutre de données pile (stack) en informatique : 
 *  Tu peux empile(push) des écrans.
 *  Tu peux dépiler(pop) pour revenir en arrière.
 */