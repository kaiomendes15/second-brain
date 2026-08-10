interface EventoPagar {
    tipo: 'pagar';
    valorPago: number;
}

interface EventoExpirar {
    tipo: 'expirar';
}

interface EventoCancelar {
    tipo: 'cancelar';
    motivoCancelamento: string;
}

interface EventoEntregar {
    tipo: 'entregar';
    dataEntrega: Date;
}

type Evento = EventoPagar | EventoExpirar | EventoCancelar | EventoEntregar;