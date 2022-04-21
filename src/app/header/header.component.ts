import { Category } from './../models/category.model';
import { CategoryService } from './../services/category/category.service';
import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggato:any;
  cart:any = [];
  categories:any = [];
  // tipologieEventi:string[] = ["Concerto", "Sport", "Mostra Museo", "Teatro", "Altre Manifestazioni", "Evento Internazionale", "Prodotto", "Cinema", "Tutti gli eventi"];
  
    toggleDropdownMenu() {
        let dorpdownItems = document.querySelectorAll('.site-dropdown-item');
        dorpdownItems.forEach(item => {
            item.classList.toggle('visibility');
        })
        let dropdownParent = document.getElementById('dropdown-tipologia');
        dropdownParent?.classList.toggle('visibility');

        let evTipologie = document.getElementById('ev-tipologie');
        evTipologie?.classList.toggle('bg-selected');
    }

    closeDropDownMenu() {
      let dorpdownItems = document.querySelectorAll('.site-dropdown-item');
        dorpdownItems.forEach(item => {
            item.classList.remove('visibility');
        })
        let dropdownParent = document.getElementById('dropdown-tipologia');
        dropdownParent?.classList.remove('visibility');

        let evTipologie = document.getElementById('ev-tipologie');
        evTipologie?.classList.remove('bg-selected');
    }

    openCart() {
      let cart = document.getElementById('cart');
      cart?.classList.remove('translate');
    }

    logout() {
      window.sessionStorage.setItem('loggato', "false");
      window.sessionStorage.setItem('whoLog', '');
      window.dispatchEvent( new Event('storage'))
      this.loggato = sessionStorage.getItem('loggato');
    }
    
  constructor(private categoryService: CategoryService) { 
    this.loggato = sessionStorage.getItem('loggato');
    let locCart:any = sessionStorage.getItem('cart');
    this.cart = JSON.parse(locCart);
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.categories = data;  
                  
        },
        error => {
          console.log(error);
        });
  }

  @HostListener('window:storage')
  onStorageChange() {
    this.loggato = sessionStorage.getItem('loggato');
    let locCart:any = sessionStorage.getItem('cart');
    this.cart = JSON.parse(locCart);
    // console.log(this.cart);
  }

  ngOnInit(): void {
  }


}
