import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CidadeService } from '../cidade/cidade.service';
import { Bairro } from '../model/bairro';
import { Cidade } from '../model/cidade';
import { Estado } from '../model/estado';
import { EstadoService } from './estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estados: Estado[];
  bairrosFiltro: Bairro[];
  cidadesFiltro: Cidade[];
  @Input() parentFormGroup: FormGroup;

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
    this.estados = this.estadoService.estados();
  }

  listaCidades(event: any): void {
    this.bairrosFiltro = [];
    this.cidadesFiltro = this.cidadeService.cidades().filter((cidade) => {
      return cidade.idEstado === event.value.id;
    }).sort((a, b) => {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    });

    const estado: Estado = {
      id: event.value,
      nome: event.source.triggerValue
    };

    this.estadoService.emitirCidades.emit(this.cidadesFiltro);
    this.estadoService.emitirBairros.emit([]);
    this.parentFormGroup.controls.cidade.setValue('');
    this.parentFormGroup.controls.bairro.setValue('');
  }
}
