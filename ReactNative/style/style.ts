/**
 * STYLESHEET :
    .create() : Fonction fournie par reactNative pour créer un objet de style optimisé.

        import { StyleSheet } from 'react-native';

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 16,
        },
        title: {
            fontSize: 24,
            color: '#333',
        },
        });
        

    stylesheet.create() apporte plusieurs avantages :
        1) Validations des style. Il vérifie qu'il n'y a pas d'erreurs.
        2) Optimisation des performances. Les styles sont transformées en identifiants numériques (au lieu de gros objet).
           C'est plus rapide lors du rendu de l'app.
        3) Meilleure organisation. Permet de stucturer ton codes avec des styles bien regroupés, à la manière CSS.


        ASTUCES : Tu ne peux pas faire de style dynamiques avec du stylesheet.create() directement. Pour cela, utilise un objet JS en dehors, ou crée une fonction.
            
            const dynamicStyle = (isActive) => ({
                backgroundColor: isActive ? 'green' : 'red',
            });
 */
