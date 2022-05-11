import { Tecnico } from './../../../models/tecnico';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] =[
    {id:1,
    nome:'valdir',
    cpf : '123.567.889-10',
    email: 'ola@gmail.com',
    senha:'1234',
    perfis:['0'],
    dataCriacao: '15/02/2020'
  }
  ]


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes' ];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

