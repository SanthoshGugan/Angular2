import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-service-specific',
  templateUrl: './service-specific.component.html',
  styleUrls: ['./service-specific.component.css']
})
export class ServiceSpecificComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
  	this.route.params.subscribe( data => console.log("Data from url", data.id))
  }

  ngOnInit() {
  }

}
