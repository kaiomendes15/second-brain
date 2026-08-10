export function transicionar(pedido: Pedido, evento: Evento): Pedido {
    switch (pedido.status) {
        case 'pago':
            switch (evento.tipo) {
                case 'entregar':
                    return { ...pedido, status: 'entregue', dataEntrega: evento.dataEntrega } as PedidoEntregue;
                case 'cancelar':
                    return { ...pedido, status: 'cancelado', motivoCancelamento: evento.motivoCancelamento } as PedidoCancelado;
                default:
                    throw new Error(`Evento não permitido para pedido pago: ${evento.tipo}`);
            }
        case 'emAndamento':
            switch (evento.tipo) { // poderia ter adicionado logica com base no prazoPagamento do pedido em andamento, mas para fins de teste, nao achei necessario
                case 'pagar':
                    return { ...pedido, status: 'pago', valorPago: evento.valorPago } as PedidoPago;
                case 'expirar':
                    return { ...pedido, status: 'expirado', dataExpiracao: new Date() } as PedidoExpirado;
                case 'cancelar':
                    return { ...pedido, status: 'cancelado', motivoCancelamento: evento.motivoCancelamento } as PedidoCancelado;
                default:
                    throw new Error(`Evento não permitido para pedido em andamento: ${evento.tipo}`);
            }
        case 'expirado':
            switch (evento.tipo) {
                case 'cancelar':
                    return { ...pedido, status: 'cancelado', motivoCancelamento: evento.motivoCancelamento } as PedidoCancelado;
                default:
                    throw new Error(`Evento não permitido para pedido expirado: ${evento.tipo}`);
            }
        case 'cancelado':
            throw new Error(`Não é possível transicionar um pedido cancelado.`);
        case 'entregue':
            throw new Error(`Não é possível transicionar um pedido entregue.`);
        default: {
            const _exhaustiveCheck: never = pedido;
            throw new Error(`Status de pedido não tratado: ${JSON.stringify(_exhaustiveCheck)}`);
        }
            
    }
}

export function verificarValorPago(pedido: Pedido): number | null {
    if (ehPago(pedido)) {
        return pedido.valorPago;
    }

    return null;
 }

function ehPago(pedido: Pedido): pedido is Extract<Pedido, { status: "pago" }> {
    return pedido.status === 'pago';
}