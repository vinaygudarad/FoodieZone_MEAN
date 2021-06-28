import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bakerydashboard',
  templateUrl: './bakerydashboard.component.html',
  styleUrls: ['./bakerydashboard.component.css']
})
export class BakerydashboardComponent implements OnInit {

  constructor(private flashMessage1:FlashMessagesService,private router: Router) { }

  ngOnInit(): void {
  }

  
  isShown: boolean = false ;
  isOrderShown: boolean = false;
  isCardSelected: boolean = false;
  isAddressShown:boolean = false;

  isqty1: boolean = false;
  isqty2: boolean = false;
  isqty3: boolean = false;
  isqty4: boolean = false;
  isqty5: boolean = false;
  isqty6: boolean = false;
  isqty7: boolean = false;

  public qty1:number=0;
  public qty2:number=0;
  public qty3:number=0;
  public qty4:number=0;
  public qty5:number=0;
  public qty6:number=0;
  public qty7:number=0;
  
  public totTime:number=30;
  public dest : String;
  
  public price1:number;
  public price2:number;
  public price3:number;
  public price4:number;
  public price5:number;
  public price6:number;
  public price7:number;

  public result:number;

  totalBill(){
    if(this.dest === "vidyanagar")
        this.totTime=20;
    this.result = this.qty1*70 + this.qty2*100 + this.qty3*25 + this.qty4*60 + this.qty5*90 + this.qty6*20 + this.qty7*35;
    this.toggleOrderShow();
    this.flashMessage1.show('Your Order has been placed successfully', {cssClass: 'alert-success', timeout: 7000});
    this.flashMessage1.show('Your Order will be delivered in ' + this.totTime + ' minutes', {cssClass: 'alert-success', timeout: 7000});
    this.router.navigate(['/restaurants']);
  }

  toggleShow() {
    this.price1=this.qty1*70;
    this.price2=this.qty2*100;
    this.price3=this.qty3*25;
    this.price4=this.qty4*60;
    this.price5=this.qty5*90;
    this.price6=this.qty6*20;
    this.price7=this.qty7*35;
    this.result = this.price1 + this.price2 + this.price3 + this.price4 + this.price5 + this.price6 + this.price7;

    this.isShown = ! this.isShown;
    
    }

    toggleShowAddress(){
      
      this.isAddressShown = !this.isAddressShown;
    }
    toggleOrderShow(){
      this.isOrderShown = !this.isOrderShown;
    }

    toggleShowCard(){
      this.isCardSelected = !this.isCardSelected;
    }

    increment6(){
      this.qty6=this.qty6+1;
      this.isqty6=true;
    }
    decrement6(){
      if(this.qty6 > 0)
        this.qty6=this.qty6-1;
    }

    increment5(){
      this.qty5=this.qty5+1;
      this.isqty5=true;
    }
    decrement5(){
      if(this.qty5 > 0)
        this.qty5=this.qty5-1;
    }

    increment4(){
      this.qty4=this.qty4+1;
      this.isqty4=true;
    }
    decrement4(){
      if(this.qty4 > 0)
        this.qty4=this.qty4-1;
    }

    increment3(){
      this.qty3=this.qty3+1;
      this.isqty3=true;
    }
    decrement3(){
      if(this.qty3 > 0)
        this.qty3=this.qty3-1;
    }

    increment2(){
      this.qty2=this.qty2+1;
      this.isqty2=true;
    }
    decrement2(){
      if(this.qty2 > 0)
        this.qty2=this.qty2-1;
    }

    increment1(){
      this.qty1=this.qty1+1;
      this.isqty1=true;
    }
    decrement1(){
      if(this.qty1 > 0)
        this.qty1=this.qty1-1;
    }

    increment7(){
      this.qty7=this.qty7+1;
      this.isqty7=true;
    }
    decrement7(){
      if(this.qty7 > 0)
        this.qty7=this.qty7-1;
    }

}
