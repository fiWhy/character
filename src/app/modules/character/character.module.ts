import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSceneComponent } from './components/character-scene/character-scene.component';
import { CharacterCanvasComponent } from './components/character-canvas/character-canvas.component';
import { WorkshopComponent } from './components/workshop/workshop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CharacterSceneComponent,
    CharacterCanvasComponent,
    WorkshopComponent
  ],
  exports: [
    CharacterSceneComponent,
    CharacterCanvasComponent,
    WorkshopComponent
  ]
})
export class CharacterModule { }
