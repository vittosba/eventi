import { Component, HostListener, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:storage')
  onStorageChange() {
    if (localStorage.getItem('cart') !== null) {

      let cart:any = localStorage.getItem('cart');
      this.a = JSON.parse(cart);
      console.log(localStorage.getItem('cart'));
      console.log(this.a);
      this.totale = 0;
      this.a.forEach((ev: { dettaglio: { prezzo: number; }; }) => {
        this.totale += ev.dettaglio.prezzo;
      });
    }
  }

  removeEv(i:number) {
    this.a.splice(i, 1);
    console.log(this.a);
    localStorage.setItem('cart', JSON.stringify(this.a));
    window.dispatchEvent( new Event('storage'))
  }

}
