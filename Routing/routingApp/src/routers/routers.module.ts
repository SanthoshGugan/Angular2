import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ServicesComponent} from '../app/services/services.component';
import {ServiceSpecificComponent} from '../app/service-specific/service-specific.component';
import {HomeComponent} from '../app/home/home.component';
import {FeatureComponent} from '../app/feature/feature.component';
import {WorksComponent} from '../app/works/works.component';


const appRoutes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'Services', component:ServicesComponent},
{
	path: 'Service/:id', 
	component: ServiceSpecificComponent, 
	children: [
		{path: '', component: FeatureComponent, pathMatch:'full'},
		{path: 'feature', component : FeatureComponent},
		{path: 'works', component: WorksComponent}
	]
},
{path: '', component:HomeComponent, pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes,{enableTracing: true})
	],
	exports:[
	RouterModule
	]
})
export class AppRouterModule{}
