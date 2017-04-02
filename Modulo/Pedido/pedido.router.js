angular
    .module('Pedido')
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('pedido', {
            url: '/pedido',
            controller: 'PedidoListaController',
            templateUrl: 'Modulo/Pedido/pedido.lista.html'
        })

    .state('pedidonovo', {
        url: '/pedido/novo',
        controller: 'PedidoNovoController',
        templateUrl: 'Modulo/Pedido/pedido.novo.html'
    })
}