import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  /* Input: Permite que o componente receba valores externos quando usado
     na forma declarativa no template de outros componentes. */

  @Input() description;
  @Input() url;

  constructor() { }

  ngOnInit() {
  }

}
