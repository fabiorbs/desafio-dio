import { EventEmitter } from '@angular/core';
import { Cidade } from '../model/cidade';

export class CidadeService {
    emitirBairro = new EventEmitter();

    cities: Cidade[] = [
        { id: 1, idEstado: 1, nome: 'Recife' },
        { id: 2, idEstado: 1, nome: 'Olinda' },
        { id: 3, idEstado: 1, nome: 'Paulista' },
        { id: 4, idEstado: 2, nome: 'São Paulo' },
        { id: 5, idEstado: 2, nome: 'Ribeirão Preto' },
        { id: 6, idEstado: 2, nome: 'Catanduva' },
        { id: 7, idEstado: 3, nome: 'Maceió' },
        { id: 8, idEstado: 3, nome: 'Arapiraca' },
        { id: 9, idEstado: 3, nome: 'Piranhas' }
    ];

    constructor() { }

    cidades(): Cidade[] {
        return this.cities;
    }
}
