import {Routes, RouterModule, CanActivate} from '@angular/router';
import {NgModule} from '@angular/core';

/*Services*/
import { RouterGaurds } from '../app/app.service.RouterGaurds';

// Components
import {ServicesComponent} from '../app/services/services.component';
import {ServiceSpecificComponent} from '../app/service-specific/service-specific.component';
import {HomeComponent} from '../app/home/home.component';
import {FeatureComponent} from '../app/feature/feature.component';
import {WorksComponent} from '../app/works/works.component';


const appRoutes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'services', component:ServicesComponent},
{
	path: 'service/:id', 
	component: ServiceSpecificComponent, 
	children: [
		{path: '', component: FeatureComponent, pathMatch:'full'},
		{path: 'feature', component : FeatureComponent, canActivate:['RouterGaurds']},
		{path: 'works', component: WorksComponent},
		{path: '**', component: FeatureComponent}
	]
},
{path: '', component:HomeComponent, pathMatch: 'full'},
{path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes,{enableTracing: true})
	],
	exports:[
	RouterModule
	],
	providers:[RouterGaurds]
})
export class AppRouterModule{}
