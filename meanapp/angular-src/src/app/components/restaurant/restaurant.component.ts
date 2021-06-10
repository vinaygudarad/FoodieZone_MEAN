import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private flashMessage:FlashMessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToRestaurant1(){
    this.router.navigate(['/dashboard']);
  }

  goToRestaurant2(){
    this.router.navigate(['/dashboard2']);
  }

  goToRestaurant3(){
    this.router.navigate(['/dashboard3']);
  }
}
