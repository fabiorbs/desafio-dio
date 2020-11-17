import { EventEmitter } from '@angular/core';
import { Estado } from '../model/estado';

export class EstadoService {
    emitirCidades = new EventEmitter();
    emitirBairros = new EventEmitter();

    private states: Estado[] = [
        { id: 1, nome: 'Pernambuco' },
        { id: 2, nome: 'São Paulo' },
        { id: 3, nome: 'Alagoas' }
    ];

    constructor() { }

    estados(): Estado[] {
        return this.states;
    }
}
