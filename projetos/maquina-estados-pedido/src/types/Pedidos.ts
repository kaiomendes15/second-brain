interface PedidoBase {
    cliente: string;
    dataCriacao: Date;
};

interface PedidoPago extends PedidoBase {
    status: "pago";
    valorPago: number;
}

interface PedidoEmAndamento extends PedidoBase {
    status: "emAndamento";
    prazoPagamento: Date;
}

interface PedidoExpirado extends PedidoBase {
    status: "expirado";
    dataExpiracao: Date;
}

interface PedidoCancelado extends PedidoBase {
    status: "cancelado";
    motivoCancelamento: string;
}

interface PedidoEntregue extends PedidoBase {
    status: "entregue";
    dataEntrega: Date;
}

type Pedido = PedidoPago | PedidoEmAndamento | PedidoExpirado | PedidoCancelado | PedidoEntregue;