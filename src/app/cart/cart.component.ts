import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  closeCart() {
    let cart = document.getElementById('cart');
    cart?.classList.add('translate');
  }

  a:any = [];
  totale:number = 0;
  loggato:any;
  carrelloCompatto:any = [];


  constructor(private route:Router) {
    this.modCart();
    this.loggato = window.sessionStorage.getItem('loggato');
   }

  ngOnInit(): void {
  }

  @HostListener('window:storage')
  onStorageChange() {
    this.modCart();
    this.loggato = window.sessionStorage.getItem('loggato');
  }

  removeEv(i:number) {
    this.a.splice(i, 1);
    console.log(this.a);
    sessionStorage.setItem('cart', JSON.stringify(this.a));
    window.dispatchEvent( new Event('storage'))
  }

  openPrenotazione() {
    if (this.loggato === 'false') {
      alert('login necessario');
      this.route.navigate(['/login']);
    }
    else {
      this.route.navigate(['/prenotazione']);
    }
  }

  modCart() {
    this.carrelloCompatto = [];
    if (sessionStorage.getItem('cart') !== null) {
      let cart:any = sessionStorage.getItem('cart');
      this.a = JSON.parse(cart);
      this.totale = 0;
      this.a.forEach((ev: { dettaglio: { price: number; id: number }; }) => {
        this.totale += ev.dettaglio.price;
        let evCTrovato = false;
        if (this.carrelloCompatto.length !== 0) {
          this.carrelloCompatto.forEach((evC: { dettaglio: { id: any; }; quantita: number; ev:any }) => {

            if (evC.ev.dettaglio.id === ev.dettaglio.id) {
              evC.quantita += 1;
              evCTrovato = true;
            }
          });
          if (!evCTrovato) {
            this.carrelloCompatto.push({ev, quantita: 1})
          }
        }
        else {
          this.carrelloCompatto.push({ev, quantita: 1})
        }
      });
      
    }
  }

}
