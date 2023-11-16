
    if ('serviceWorker' in navigator) {
        // Cette vérification s'assure que les Service Workers sont pris en charge par le navigateur de l'utilisateur.
        // C'est une bonne pratique pour assurer la compatibilité avec les navigateurs qui ne supportent pas les Service Workers.

        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                // Cette promesse se résout une fois que le Service Worker est enregistré avec succès.
                // Le Service Worker est enregistré à partir du chemin '/service-worker.js'.
                // C'est ici que vous pouvez gérer le succès de l'enregistrement, par exemple, en affichant un message ou en effectuant une autre action.

                console.log('Service Worker registered with scope:', registration.scope);
                // Cette ligne affiche le scope du Service Worker enregistré dans la console.
                // Le 'scope' détermine à partir de quel chemin de votre site le Service Worker peut intercepter les requêtes.
            })
            .catch((error) => {
                // Cette partie du code gère les erreurs qui peuvent survenir lors de la tentative d'enregistrement du Service Worker.
                // Cela peut inclure des erreurs de réseau, des erreurs de chargement du fichier, ou d'autres problèmes liés à l'enregistrement du Service Worker.

                console.error('Service Worker registration failed:', error);
                // Affiche les détails de l'échec de l'enregistrement du Service Worker dans la console.
                // C'est utile pour le débogage et pour comprendre pourquoi l'enregistrement a échoué.
            });
    }
