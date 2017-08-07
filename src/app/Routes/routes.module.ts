import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

// Components //
import { CombatComponent } from "../combat/combat.component"
import { AppComponent } from "../app.component"
import { CharacterGenerationComponent } from "../character-generation/character-generation.component"

@NgModule({
  imports: [
    RouterModule.forRoot([  
      {
        path: 'combat',
        component: CombatComponent
      },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: "",
        component: CharacterGenerationComponent
    }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesModule { }