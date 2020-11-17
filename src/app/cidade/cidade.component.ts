import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BairroService } from '../bairro/bairro.service';
import { EstadoService } from '../estado/estado.service';
import { Bairro } from '../model/bairro';
import { Cidade } from '../model/cidade';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {
  cidadesFiltro: Cidade[];
  bairrosFiltro: Bairro[];
  @Input() parentFormGroup: FormGroup;

  constructor(
    private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private bairroService: BairroService
  ) { }

  ngOnInit(): void {
    this.estadoService.emitirCidades.subscribe(
      (cidades: Cidade[]) => this.cidadesFiltro = cidades
    );
  }

  listaBairros(event: any): void {
    this.bairrosFiltro = this.bairroService.bairros().filter((bairro) => {
      return bairro.idCidade === event.value.id;
    }).sort((a, b) => {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    });

    const cidade: Cidade = {
      id: event.value,
      idEstado: null,
      nome: event.source.triggerValue
    };

    this.cidadeService.emitirBairro.emit(this.bairrosFiltro);
    this.parentFormGroup.controls.bairro.setValue('');
  }
}
