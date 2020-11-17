# desafio-dio

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Servidor de desenvolvimento

Execute ng serve para um servidor de desenvolvimento. Navegue para http://localhost:4200/. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

### Detalhes do desenvolvimento

Este app foi criado para o Desafio Angular 10 - Digital Innovation One.
Foram criados 3 componentes que representam uma lista de seleção (mat-select) de Estados, Cidades e Bairros. Onde cada lista carrega a próxima de acordo com a escolha da antecessora. Ex. Ao selecionar um estado automaticamente a lista de cidades é carregada de acordo om o estado escolhido, bem como com os bairros quando escolhemos uma cidade.
Para isso foram incluídos 3 serviços relacionados aos 3 componentes para disponibilizar os dados nas listas de seleção. Fo incluído também um formGroup para resgatar no componente principal (home) os dados selecionados nos 3 componentes de lista, para poder simular um envio de formulário e dispor na tela, em um mat-card, esses dados.
