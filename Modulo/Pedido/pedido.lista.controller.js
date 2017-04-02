angular
    .module('Pedido')
    .controller('PedidoListaController', PedidoListaController)

function PedidoListaController($scope, PedidoService) {
    $scope.pedidos = PedidoService.obterPedidos();
}