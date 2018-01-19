import {Component, Input, OnInit} from '@angular/core';
// import {MenuComponent} from '../menu/menu.component';
import {NotaService} from '../../services/nota.service';
import {Nota} from '../../models/nota';
import {FlashMessageComponent} from '../flash-message/flash-message.component';
import {Tarefa} from '../../models/tarefa';
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  notas: Nota[];
  aberto = false;
  tarefa = new Tarefa();
  nota = new Nota(null, '', [], undefined, null);
  modalNotaAcoes = [
    {
      titulo: 'CANCELAR',
      acao: () => {
        this.aberto = false;
        this.nota = new Nota(null, '', [], undefined, null);
      }
    },
    {
      titulo: 'SALVAR NOTA',
      acao: () => {
        this.salvarNota();
      }
    }
  ];
  errors = {
    titulo: '',
    tarefas: '',
    tituloTarefa: ''
  };
  flashMessage = {
    flashAberto: false,
    flashText: '',
    flashAcoes: []
  };

  atualizacao = '00:00';
  filtro = 'todos';
  paginas = {
    atual: 1,
    total: [1]
  };
  busca = {text: ''};
  atualizar = () => {
    this.getNotas();
  };

  constructor(private notaService: NotaService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.editarNota = this.editarNota.bind(this);
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.filtro = params.filtro ? params.filtro : 'todos';
        this.paginas.atual = params.pagina ? params.pagina : this.paginas.atual;
        this.busca.text = params.q ? params.q : '';
      });
    this.getNotas();
  }

  getNotas() {
    this.router.navigate(['.'], {
      queryParams: {
        filtro: this.filtro,
        pagina: this.paginas.atual,
        q: this.busca.text
      }
    });
    this.notaService.get(this.paginas.atual, this.filtro, this.busca.text)
      .subscribe((data) => {
        this.notas = data.body;
        let paginas = Number.parseInt(data.headers.get('X-Pagination-Page-Count'));
        this.paginas.total = [];
        for (let i = 1; i < paginas + 1; i++) {
          this.paginas.total.push(i);
        }
        this.setAtualizacao();
      });
  }

  setAtualizacao() {
    let data = new Date();
    let hora = data.getHours().toString().length < 2 ? '0' + data.getHours().toString() : data.getHours().toString();
    let min = data.getMinutes().toString().length < 2 ? '0' + data.getMinutes().toString() : data.getMinutes().toString();
    this.atualizacao = hora + ':' + min;
  }

  adicionarTarefa(event) {
    event.preventDefault();
    if (this.tarefa.titulo) {
      this.nota.tarefas.push(this.tarefa);
      this.tarefa = new Tarefa();
      this.errors.tituloTarefa = '';
    } else {
      this.errors.tituloTarefa = 'Adicione um título à tarefa.';
    }
  }

  mudarTituloTarefa(event, tarefa) {
    tarefa.titulo = event.path[0].innerText;
  }

  salvarNotaEvent(event) {
    event.preventDefault();
    this.salvarNota();
  }

  proximaPagina() {
    if (this.paginas.atual < this.paginas.total.length) {
      this.paginas.atual++;
      this.getNotas();
    }
  }

  voltarPagina() {
    if (this.paginas.atual > 1) {
      this.paginas.atual--;
      this.getNotas();
    }
  }

  irParaPagina(i) {
    if (i < this.paginas.total.length + 1 && i > 0) {
      this.paginas.atual = i;
      this.getNotas();
    }
  }

  editarNota(nota) {
    this.nota = nota;
    this.aberto = true;
  }

  salvarNota() {
    let error = false;
    if (this.nota.tarefas.length < 1) {
      this.errors.tarefas = 'Deve haver no mínimo 1 tarefa na nota.';
      error = true;
    } else {
      this.errors.tarefas = '';
    }
    if (!this.nota.titulo) {
      this.errors.titulo = 'Adicione um título à nota.';
      error = true;
    } else {
      this.errors.titulo = '';
    }
    if (!error) {
      if (!this.nota.id) {
        this.notaService.post(this.nota).subscribe(res => {
          if (res) {
            this.mostrarMensagemNotaAdicionada();
          }
        });
      } else {
        this.notaService.patch(this.nota).subscribe(res => {
          if (res) {
            this.mostrarMensagemNotaAdicionada();
          }
        });
      }
    }
  }

  mostrarMensagemNotaAdicionada() {
    this.flashMessage.flashText = 'Nota salva.';
    this.flashMessage.flashAberto = true;
    this.getNotas();
    this.errors.tituloTarefa = '';
    setTimeout(() => {
      this.flashMessage.flashAberto = false;
      this.aberto = false;
      this.nota = new Nota(null, '', [], undefined, null);
    }, 1500);
  }
}
