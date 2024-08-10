import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { Contato } from '../../components/contact/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
  };

  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private router: Router) { };

  verificaSeIdExiste(id: string | null) {
    if (id) {
      return id;
    }
    return null;
  };

  converteEmInteiro(id: string): number {
    return parseInt(id);
  };

  redirecionaUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  buscarPorIdEConverteEmInteiro(id: string | null): Observable<Contato> {
    if (this.verificaSeIdExiste(id)) {
      return this.contatoService.buscarPorId(this.converteEmInteiro(id!));
    }
    throw new Error('ID não existe');
  }

  pegaARotaAtivaPeloId(id: string | null): string | null {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const id = this.pegaARotaAtivaPeloId('id');
    this.buscarPorIdEConverteEmInteiro(id).subscribe((contato) => {
      this.contato = contato;
    })
  };

  excluirContato() {
    this.contatoService.excluirContato(this.contato.id).subscribe(() => {
      this.redirecionaUrl('/lista-contatos');
    });
  }
};
