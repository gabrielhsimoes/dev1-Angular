import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../../../dados/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {


  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferência solicitada!');
    // console.log('Valor: ' +this.valor);
    // console.log('Destino: ' +this.destino);
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
