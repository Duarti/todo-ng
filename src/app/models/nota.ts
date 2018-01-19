import {Tarefa} from './tarefa';

export class Nota {
  id: number;
  titulo: string;
  tarefas: Tarefa[];
  criacao: Date;
  usuario_id: number;

  constructor(id, titulo, tarefas, criacao, usuario_id) {
    this.id = id;
    this.titulo = titulo;
    this.tarefas = tarefas;
    this.criacao = criacao;
    this.usuario_id = usuario_id;
  }
}
