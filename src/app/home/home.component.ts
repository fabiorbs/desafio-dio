import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: string;
  homeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.homeForm = this.formBuilder.group({
      estado: [''],
      cidade: [''],
      bairro: ['']
    });
  }

  ngOnInit(): void {
  }

  enviar(): void {
    const estadoTxt = this.homeForm.controls.estado.value ? this.homeForm.controls.estado.value.nome : '';
    const cidadeTxt = this.homeForm.controls.cidade.value ? ', ' + this.homeForm.controls.cidade.value.nome : '';
    const bairroTxt = this.homeForm.controls.bairro.value ? ', ' + this.homeForm.controls.bairro.value.nome : '';

    this.result = 'Endereço: ' + estadoTxt + cidadeTxt + bairroTxt;
  }

  resetarForm(): void {
    this.homeForm.reset();
    this.homeForm.controls.estado.reset();
    this.homeForm.controls.cidade.reset();
    this.homeForm.controls.bairro.reset();
  }
}
