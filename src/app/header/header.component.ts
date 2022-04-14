import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  registrato:any;
  tipologieEventi:string[] = ["Concerto", "Sport", "Mostra Museo", "Teatro", "Altre Manifestazioni", "Evento Internazionale", "Prodotto", "Cinema", "Tutti gli eventi"];
  
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
  constructor() { 
    this.registrato = localStorage.getItem('registrato');
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.registrato = localStorage.getItem('registrato');
  }

}
