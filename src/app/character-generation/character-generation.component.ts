import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero.model';
import { AbilityType } from '../heroes/ability-type.model';
import { BaseDataBuilder } from '../generation-files/base-data-builder';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-generation',
  templateUrl: './character-generation.component.html',
  styleUrls: ['./character-generation.component.css']
})
export class CharacterGenerationComponent implements OnInit {
constructor(private RouterModule: Router){ }
  title = 'Test Application';
  baseDataBuilder:BaseDataBuilder;
  heroOne:Hero;
  heroTwo:Hero;
  heroThree:Hero;
  heroFour:Hero;
  
  ngOnInit() {
    this.baseDataBuilder = new BaseDataBuilder();
    this.heroOne = this.baseDataBuilder.generateHero();
    this.heroTwo = this.baseDataBuilder.generateHero();
    this.heroThree = this.baseDataBuilder.generateHero();
    this.heroFour = this.baseDataBuilder.generateHero();
  }

  reroll(){
    this.heroOne = this.baseDataBuilder.generateHero();
    this.heroTwo = this.baseDataBuilder.generateHero();
    this.heroThree = this.baseDataBuilder.generateHero();
    this.heroFour = this.baseDataBuilder.generateHero();
  }

  toCombat(){
    //TODO: save character in backend
    this.RouterModule.navigate(['./combat']);
  }

}
