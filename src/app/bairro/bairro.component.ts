import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CidadeService } from '../cidade/cidade.service';
import { EstadoService } from '../estado/estado.service';
import { Bairro } from '../model/bairro';

@Component({
  selector: 'app-bairro',
  templateUrl: './bairro.component.html',
  styleUrls: ['./bairro.component.css']
})
export class BairroComponent implements OnInit {
  bairrosFiltro: Bairro[] = [];
  @Input() parentFormGroup: FormGroup;

  constructor(
    private estadoService: EstadoService,
    private cidadeService: CidadeService
  ) { }

  ngOnInit(): void {
    this.cidadeService.emitirBairro.subscribe(
      (bairros: Bairro[]) => this.bairrosFiltro = bairros
    );

    this.estadoService.emitirBairros.subscribe(
      (bairros: Bairro[]) => this.bairrosFiltro = bairros
    );
  }

  selecionaBairro(event: any): void {
    const bairro: Bairro = {
      id: event.value,
      idCidade: null,
      nome: event.source.triggerValue
    };
  }
}
