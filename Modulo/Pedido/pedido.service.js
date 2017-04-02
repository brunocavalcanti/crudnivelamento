angular
    .module('Pedido')
    .factory('PedidoService', PedidoService)

function PedidoService() {
    var pedidos = [];
    var factory = {
        obterPedidos: obterPedidos,
        salvarPedido: salvarPedido
    }

    function obterPedidos() {
        return pedidos;
    }

    function salvarPedido(pedido) {
        pedidos.push(pedido)
    }

    return factory;
}