System.register(['angular2/core', './cliente', './cep-pipe', './form-aluno-component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1, cep_pipe_1, form_aluno_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            },
            function (cep_pipe_1_1) {
                cep_pipe_1 = cep_pipe_1_1;
            },
            function (form_aluno_component_1_1) {
                form_aluno_component_1 = form_aluno_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = 'Listagem de clientes';
                    this.clientes = [];
                    this.cliente = new cliente_1.Cliente(1, 'Fulano', new Date(1988, 3, 15));
                    this.dataAtual = new Date();
                    this.formato = true;
                    this.cep = '09540934';
                }
                Object.defineProperty(AppComponent.prototype, "formatar", {
                    get: function () {
                        return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.mudarFormato = function () {
                    this.formato = !this.formato;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: '<h1>{{titulo}}</h1> <h2>Cliente selecionado: {{cliente.nome | uppercase}} Birthday: {{cliente.birthday | date}}</h2> <ul><li *ngFor="#cli of clientes" >{{cli.id}}: {{cli.nome}} BirthDay: {{cli.birthday | date }}</li></ul> <p *ngIf="clientes.length < 1">Nenhum cliente encontrado.</p><p>Data atual: {{dataAtual | date:"dd/MM/yyyy"}}</p><p>Data atual 2: {{dataAtual | date:formatar}}<br><button (click)="mudarFormato()">Mudar formato</button></p><p>CEP: {{cep | cep}}</p> <form-aluno></form-aluno>',
                        pipes: [cep_pipe_1.CepPipe],
                        directives: [form_aluno_component_1.FormAlunoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map