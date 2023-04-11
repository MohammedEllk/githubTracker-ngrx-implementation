import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule, combineReducers} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { FormsModule } from '@angular/forms';

import {USERSReducer} from './reducers/users.reducer'
import { reducers } from './reducers';
import {DepotsReducer} from './reducers/depots.reducer'
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { UsersEffects } from './effects/user.effects';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UserDetailsComponent } from './components/users/details/user-details/user-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { DepotsComponent } from './components/depots/depots.component';
import { FollowersComponent } from './components/followers/followers.component';
import { DepotsEffects } from './effects/depot.effects';
import { DepotDetailsComponent } from './components/depots/depot-details/depot-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    UserDetailsComponent,
    HomeComponent,
    DepotsComponent,
    FollowersComponent,
    DepotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffects,DepotsEffects]),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
