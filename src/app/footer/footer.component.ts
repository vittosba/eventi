import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  colLinks:any[] = [
    {
      title: "TicketTwo", 
      links: ["Termini e condizioni d'acquisto", "Privacy", "Informativa Cookie"]
    },
    {
      title: "La Società", 
      links: ["Chi siamo", "Lavora con noi"]
    },
    {
      title: "Help e contatti", 
      links: ["Contatti", "Consumatori", "Modalità di pagamento"]
    },
    {
      title: "Servizi", 
      links: ["Newsletter", "Gift Voucher"]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
