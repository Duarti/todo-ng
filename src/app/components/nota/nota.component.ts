import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../../models/nota';
import {TarefaService} from '../../services/tarefa.service';
import {NotaService} from '../../services/nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  @Input() nota: Nota;
  @Input() flashMessage;
  @Input() atualizar;
  @Input() editar;

  constructor(private tarefaService: TarefaService, private notaService: NotaService) {
  }

  ngOnInit() {
  }

  checkTarefa(tarefa) {
    this.tarefaService.patch(tarefa).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  callFlashDeletarNota() {
    this.flashMessage.flashText = 'Deseja excluir esta nota?';
    this.flashMessage.flashAberto = true;
    this.flashMessage.flashAcoes = [
      {
        titulo: 'NÃO',
        acao: () => {
          this.flashMessage.flashAberto = false;
        },
      },
      {
        titulo: 'SIM',
        acao: () => {
          this.flashMessage.flashAberto = false;
          this.notaService.delete(this.nota)
            .subscribe((data: Response) => {
              this.flashMessage.flashText = 'Excluída.';
              this.flashMessage.flashAcoes = [];
              this.flashMessage.flashAberto = true;
              setTimeout(() => {
                this.flashMessage.flashAberto = false;
              }, 1600);
              this.atualizar();
            });
        }
      }
    ];
  }

  callFlashDeletarTarefa(tarefa) {
    this.flashMessage.flashText = 'Deseja excluir esta tarefa?';
    this.flashMessage.flashAberto = true;
    this.flashMessage.flashAcoes = [
      {
        titulo: 'NÃO',
        acao: () => {
          this.flashMessage.flashAberto = false;
        },
      },
      {
        titulo: 'SIM',
        acao: () => {
          this.flashMessage.flashAberto = false;
          if (this.nota.tarefas.length > 1) {
            this.tarefaService.delete(tarefa)
              .subscribe((data: Response) => {
                this.flashMessage.flashText = 'Excluída.';
                this.atualizar();
              });
          } else {
            this.flashMessage.flashText = 'Não excluída, deve haver no mínimo 1 tarefa na nota.';
          }
          this.flashMessage.flashAcoes = [];
          this.flashMessage.flashAberto = true;
          setTimeout(() => {
            this.flashMessage.flashAberto = false;
          }, 1600);
        }
      }
    ];
  }

}
