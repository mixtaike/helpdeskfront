import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';
import { TecnicoService } from './../../../services/tecnico.service';
import { ClienteService } from './../../../services/cliente.service';
import { Tecnico } from './../../../models/tecnico';
import { Cliente } from './../../../models/cliente';
import { FormControl, Validators } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  chamado: Chamado = {
    dataAbertura: '',
    dataFechamento: '',
    prioridade: '',
    status: '',
    titulo: '',
    observacoes: '',
    tecnico:'',
    cliente:'',
    nomeCliente: '',
    nomeTecnico: '',

  }

  clientes: Cliente[] = [];
  tecnicos: Tecnico[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource :any;
  prioridade: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  titulo: FormControl = new FormControl(null, [Validators.required])
  observacoes: FormControl = new FormControl(null, [Validators.required])
  tecnico: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])


  constructor(private clienteService: ClienteService,
              private tecnicoService: TecnicoService,
              private chamadoService: ChamadoService,
              private toast: ToastrService,
              private router: Router ){}

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void {
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      this.toast.success('Chamado criado com sucesso', 'Novo chamado');
      this.router.navigate(['chamados']);
    }, ex =>{
      console.log(ex);
      this.toast.clear(ex.console.error.error);


    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta=>{
      this.clientes= resposta;


    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(resposta=>{
      this.tecnicos= resposta;

    })
  }



  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
    this.titulo.valid && this.observacoes.valid &&
    this.cliente.valid && this.tecnico.valid
  }


}
