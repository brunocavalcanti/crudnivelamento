angular
    .module('Pedido')
    .controller('PedidoNovoController', PedidoNovoController)

function PedidoNovoController($scope, PedidoService, ProdutoService) {
    $scope.pedido = {};
    $scope.produto = {};
    $scope.buscarProduto = function(codigo) {
        $scope.produtos = ProdutoService.listarProduto();
    }
    $scope.salvaPedido = function(pedido) {
        PedidoService.salvaPedido(pedido);
    }
    $scope.incluirItem = function(produto) {
        $scope.pedido.itens.push(produto);
    }
    $scope.excluirItem = function(produto) {
        var indice = $scope.pedido.itens.indexOf(produto);
        $scope.pedido.itens.splice(indice, 1);
    }
}