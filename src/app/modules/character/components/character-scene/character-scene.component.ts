import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CharacterModel } from '../../models';

@Component({
  selector: 'app-character-scene',
  templateUrl: './character-scene.component.html',
  styleUrls: ['./character-scene.component.scss']
})
export class CharacterSceneComponent implements OnInit {

  @Input() character: CharacterModel;
  @Input()
  @HostBinding('style.height.px') height = 500;

  constructor() { }

  ngOnInit() { }

}
