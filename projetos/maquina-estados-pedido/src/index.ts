import { transicionar, verificarValorPago } from './functions';

const pedidoaPagar: PedidoPago = {
    cliente: 'João',
    dataCriacao: new Date(),
    status: 'pago',
    valorPago: 100
};

const eventoPagar: EventoPagar = {
    tipo: 'pagar',
    valorPago: 100,
};

const pedidoAndamento: PedidoEmAndamento = {
    cliente: 'Carlos',
    dataCriacao: new Date(),
    status: 'emAndamento',
    prazoPagamento: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 dia a partir de agora
};

const pedidoaExpirar: PedidoExpirado = {
    cliente: 'Maria',
    dataCriacao: new Date(),
    status: 'expirado',
    dataExpiracao: new Date(),
};

const eventoExpirar: EventoExpirar = {
    tipo: 'expirar',
};

const eventoCancelar: EventoCancelar = {
    tipo: 'cancelar',
    motivoCancelamento: 'Cliente desistiu',
};

const pedidoaCancelar: PedidoCancelado = {
    cliente: 'Pedro',
    dataCriacao: new Date(),
    status: 'cancelado',
    motivoCancelamento: 'Cliente desistiu'
};

const pedidoaEntregar: PedidoEntregue = {
    cliente: 'Ana',
    dataCriacao: new Date(),
    status: 'entregue',
    dataEntrega: new Date(),
};

const eventoEntregar: EventoEntregar = {
    tipo: 'entregar',
    dataEntrega: new Date(),
};

console.log("PAGO -> ENTREGUE");
console.log(transicionar(pedidoaPagar, eventoEntregar));
console.log("EXPIRADO -> CANCELADO");
console.log(transicionar(pedidoaExpirar, eventoCancelar));
console.log("EM ANDAMENTO -> PAGO");
let andamentoParaPago = transicionar(pedidoAndamento, eventoPagar);
console.log(andamentoParaPago);
console.log(`valor pago do pedido: ${verificarValorPago(andamentoParaPago)}`);
console.log("EM ANDAMENTO -> EXPIRADO");
console.log(transicionar(pedidoAndamento, eventoExpirar));
console.log("EM ANDAMENTO -> CANCELADO");
console.log(transicionar(pedidoAndamento, eventoCancelar));
console.log("CANCELADO -> CANCELADO");
try {
    console.log(transicionar(pedidoaCancelar, eventoCancelar));
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
console.log("ENTREGUE -> ENTREGUE");
try {
    console.log(transicionar(pedidoaEntregar, eventoEntregar));

} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}