import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventi';

    constructor(private renderer: Renderer2) {
      localStorage.setItem('registrato', "false");
    this.renderer.listen('window', 'click',(e:Event)=>{
        let dropdownParent = document.getElementById('toggleButton');

        if(e.target !== dropdownParent) {
            let dorpdownItems = document.querySelectorAll('.site-dropdown-item');
            dorpdownItems.forEach(item => {
            item.classList.remove('visibility');
            })
            let dropdownParent = document.getElementById('dropdown-tipologia');
            dropdownParent?.classList.remove('visibility');

            let evTipologie = document.getElementById('ev-tipologie');
            evTipologie?.classList.remove('bg-selected');
        }
        });
    }
}
