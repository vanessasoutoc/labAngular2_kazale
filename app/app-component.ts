import {Component} from 'angular2/core';
import {Cliente} from './cliente';
import {CepPipe} from './cep-pipe';
import {FormAlunoComponent} from './form-aluno-component';

@Component({
    selector: 'meu-app',
    template: '<h1>{{titulo}}</h1> <h2>Cliente selecionado: {{cliente.nome | uppercase}} Birthday: {{cliente.birthday | date}}</h2> <ul><li *ngFor="#cli of clientes" >{{cli.id}}: {{cli.nome}} BirthDay: {{cli.birthday | date }}</li></ul> <p *ngIf="clientes.length < 1">Nenhum cliente encontrado.</p><p>Data atual: {{dataAtual | date:"dd/MM/yyyy"}}</p><p>Data atual 2: {{dataAtual | date:formatar}}<br><button (click)="mudarFormato()">Mudar formato</button></p><p>CEP: {{cep | cep}}</p> <form-aluno></form-aluno>',
    pipes: [CepPipe],
    directives: [FormAlunoComponent]
})
export class AppComponent {
    titulo = 'Listagem de clientes';
   clientes = [];
    cliente = new Cliente(1, 'Fulano', new Date(1988, 3, 15));
    
    dataAtual: Date = new Date();
	formato: boolean = true;
 
	get formatar() {
		return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
	}
 
	mudarFormato() {
		this.formato = !this.formato;
	}
    
    cep: string = '09540934';
}