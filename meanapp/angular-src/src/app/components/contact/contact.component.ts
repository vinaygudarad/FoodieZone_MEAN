import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  constructor( private flashMessage:FlashMessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToHomePage(){
    this.flashMessage.show('Thank You for contacting us', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
  }

}
