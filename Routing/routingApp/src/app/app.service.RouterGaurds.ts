import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class RouterGaurds implements CanActivate{
	canActivate(){
		return true;
	}
} 