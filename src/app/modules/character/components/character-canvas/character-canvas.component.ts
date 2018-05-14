import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-character-canvas',
  templateUrl: './character-canvas.component.html',
  styleUrls: ['./character-canvas.component.scss']
})
export class CharacterCanvasComponent implements OnInit {

  @Input()
  @HostBinding('style.height.px') height = 500;

  constructor() { }

  ngOnInit() {
  }
}
