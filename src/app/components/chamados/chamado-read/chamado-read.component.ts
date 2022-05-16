import { Component, OnInit,ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';


@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

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




  constructor(
              private chamadoService: ChamadoService,
              private toast: ToastrService,
              private route: ActivatedRoute){}

  ngOnInit(): void {

    this.chamado.id = this.route.snapshot.paramMap.get('id')
    this.findById();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    }
    )
  }

  retornaStatus(status : any): string{
    if (status == '0') {
      return 'ABERTO'
    } else if (status == '1'){
      return 'EM ENDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

  retornaPrioridade(prioridade : any): string{
    if (prioridade == '0') {
      return 'BAIXA'
    } else if (prioridade == '0'){
      return 'MÉDIA'
    } else {
      return 'ALTA'
    }


  }



}
