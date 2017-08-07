import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes/hero.model';
import { AbilityType } from './heroes/ability-type.model';
import { BaseDataBuilder } from './generation-files/base-data-builder';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private RouterModule: Router){ }
  title = 'Test Application';

  
  ngOnInit() {

  }

  
}
