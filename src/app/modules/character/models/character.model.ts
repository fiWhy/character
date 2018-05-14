import { CharacterHeadModel } from './character-head.model';
import { CharacterLegModel } from './character-leg.model';
import { CharacterHandModel } from './character-hand.model';
import { CharacterBodyModel } from './character-body.model';

export class CharacterModel {
    body: CharacterBodyModel;
    head: CharacterHeadModel;
    legs: [CharacterLegModel, CharacterLegModel];
    hands: [CharacterHandModel, CharacterHandModel];
}
