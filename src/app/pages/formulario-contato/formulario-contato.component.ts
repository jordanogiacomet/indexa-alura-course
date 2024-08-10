import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparatorComponent } from "../../components/separator/separator.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SeparatorComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit{
  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
  ){};

  ngOnInit() {
    this.inicializarFormulario();
  };

  inicializarFormulario () {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('', Validators.required),
      redes: new FormControl('', Validators.required),
      observacoes: new FormControl('', Validators.required),
    });
  };

  resetarFormularioContato() {
    this.contatoForm.reset();
  };
  
  salvarNovoContato() {
    if(this.contatoForm.invalid){
      return;
    };

    const contatoSalvo = this.contatoForm.value;
    this.contatoService.salvarContato(contatoSalvo);
    
    this.limparFormularioEVoltar();
  };

  cancelarCadastro() {
    this.resetarFormularioContato();
  };

  limparFormularioEVoltar() {
    this.resetarFormularioContato();
    this.router.navigateByUrl('/lista-contatos');
  }
};
