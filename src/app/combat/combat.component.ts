import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Hero } from "app/heroes/hero.model";


@Component({
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(private RouterModule: Router) { }

  @Input() currentHero: Hero;
  primaryAttack: string

  ngOnInit() {
    this.primaryAttack = this.currentHero.skillset.primaryAbility.name
  }

  toCharacterSheet(){
    this.RouterModule.navigate(['./characterSheet']);
  }

  goodnightSweetPrince(){
    this.RouterModule.navigate(['']);
  }

}
