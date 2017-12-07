import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Services*/
import { RouterGaurds } from './app.service.RouterGaurds'
import { AppComponent } from './app.component';
import { AppRouterModule } from '../routers/routers.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ServiceSpecificComponent } from './service-specific/service-specific.component';
import { FeatureComponent } from './feature/feature.component';
import { WorksComponent } from './works/works.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ServiceSpecificComponent,
    FeatureComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [RouterGaurds],
  bootstrap: [AppComponent]
})
export class AppModule { }
