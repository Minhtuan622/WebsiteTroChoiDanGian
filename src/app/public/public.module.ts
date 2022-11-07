import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './components/home/header/header.component';
import { ContentComponent } from './components/home/content/content.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { GameItemComponent } from './components/home/listGame/game-item/game-item.component';
import { ListGameComponent } from './components/home/listGame/list-game.component';
import { ReactComponent } from './components/home/listGame/react/react.component';
import { FilterComponent } from './components/home/listGame/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameInfoComponent } from './components/game-detail/game-info/game-info.component';
import { RelatedGameComponent } from './components/game-detail/related-game/related-game.component';
import { HowToPlayComponent } from './components/game-detail/how-to-play/how-to-play.component';


@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    GameItemComponent,
    ListGameComponent,
    ReactComponent,
    FilterComponent,
    HomeComponent,
    GameDetailComponent,
    GameInfoComponent,
    RelatedGameComponent,
    HowToPlayComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
