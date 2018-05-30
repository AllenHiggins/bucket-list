import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  routeId:number;
  goals = [];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { 
    this.route.params.subscribe((res) => {
      this.routeId = res.id;
      console.log("RouteID: " + this.routeId);
    });
  }

  ngOnInit() {
    this.dataService.goal.subscribe((res) => this.goals = res);
  }

  sendMeToHomePage(){
    this.router.navigate(['']);
  }

}
