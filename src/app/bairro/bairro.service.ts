import { Bairro } from '../model/bairro';

export class BairroService {
    private neighborhood: Bairro[] = [
        { id: 1, idCidade: 1, nome: 'Madalena' },
        { id: 2, idCidade: 1, nome: 'Torre' },
        { id: 3, idCidade: 1, nome: 'Pina' },
        { id: 4, idCidade: 2, nome: 'Casa Caiada' },
        { id: 5, idCidade: 2, nome: 'Bairro Novo' },
        { id: 6, idCidade: 2, nome: 'Jardim Atlântico' },
        { id: 7, idCidade: 3, nome: 'Janga' },
        { id: 8, idCidade: 3, nome: 'Conceição' },
        { id: 9, idCidade: 3, nome: 'Maria Farinha' },
        { id: 10, idCidade: 4, nome: 'Morumbi' },
        { id: 11, idCidade: 4, nome: 'Bom Retiro' },
        { id: 12, idCidade: 4, nome: 'Vila Andrade' },
        { id: 13, idCidade: 5, nome: 'Nova Aliança' },
        { id: 15, idCidade: 6, nome: 'Residencial Granville II' },
        { id: 16, idCidade: 7, nome: 'Antares' },
        { id: 17, idCidade: 8, nome: 'Alto Cruzeiro' },
        { id: 18, idCidade: 9, nome: 'Barragem Xingo' },
      ];

    constructor() { }

    bairros(): Bairro[] {
        return this.neighborhood;
    }
}
