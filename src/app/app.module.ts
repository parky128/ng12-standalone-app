import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgGenericComponentsModule } from '@al/ng-generic-components';
// import { NgNavigationModule } from '@al/ng-navigation-components';
import { DefaultRouteComponent } from './default-route/default-route.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // NgGenericComponentsModule,
    // NgNavigationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
