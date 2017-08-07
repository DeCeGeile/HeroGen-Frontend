import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './Routes/routes.module';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CombatComponent } from './combat/combat.component';
import { CharacterGenerationComponent } from './character-generation/character-generation.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    CombatComponent,
    CharacterGenerationComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
