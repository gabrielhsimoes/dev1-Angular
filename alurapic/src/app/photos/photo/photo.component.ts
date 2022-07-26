import { Component, Input, OnInit } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  /* Input: Permite que o componente receba valores externos quando usado
     na forma declarativa no template de outros componentes. */
  private _url = '';

  @Input() description;
  @Input() set url(url: string) {
    if(!url.startsWith('data')){
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  get url() {
    return this._url;
  }

}
