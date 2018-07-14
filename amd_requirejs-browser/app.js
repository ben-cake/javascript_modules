// Configuration du chargement des modules
requirejs.config({

    baseUrl: 'node_modules/requirejs',
    paths: {
        app: '../../app'
    }
});

// Point d'entrée du chargement des modules
requirejs(['app/main']);
