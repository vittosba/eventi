import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../services/event/event.service';
import { Eventi } from './../models/eventi.model';
import { ArtistService } from './../services/artist/artist.service';
import { Artist } from './../models/artist.model';
import { ArtistsEventService } from './../services/artistEvent/artists-event.service';
import {  ArtistsEvent } from './../models/artistsEvent.model';
import { CategoryService } from './../services/category/category.service';
import {  Category } from './../models/category.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  registrato:any;
  // eventi:any[] = [
  //   {
  //     id: 0,
  //     img: "https://dynamicmedia.livenationinternational.com/Media/z/y/c/3fd2b481-94df-413e-aefe-924b3b54582f.png?auto=webp&width=1507.2",
  //     title: "Concerto Vasco Rossi",
  //     category: "Concerto",
  //     artisti: ["Vasco Rossi", "Madonna", "Fedez"],
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.",
  //     dettagli: [
  //       {
  //           data: "02 luglio 2022",
  //           orario: "21:30",
  //           citta: "Roma",
  //           luogo: "Colosseo",
  //           prezzo: 20,
  //       },
  //       {
  //         data: "02 maggio 2022",
  //         orario: "21:30",
  //         citta: "Palermo",
  //         luogo: "Cicciobello",
  //         prezzo: 15,
  //     },
  //   ]
  //   },
  //   {
  //     id: 1,
  //     img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
  //     title: "Lazza daje",
  //     category: "Sport",
  //     artisti: ["Lazza"],
  //     description: "Lorem blablabla"
  //   },
  //   {
  //     id: 2,
  //     img: "https://a6p8a2b3.stackpathcdn.com/Df1CvfKFZhzSkq3JmKfF7g-NBAE=/433x325/smart/rockol-img/img/foto/upload/aokiverse.png",
  //     title: "Steve Aoki Tour",
  //     category: "Concerto",
  //     artisti: ["Steve Aoki"],
  //     description: "Ciaco ciaaoaoaoo"
  //   },
  //   {
  //     id: 3,
  //     img: "https://dynamicmedia.livenationinternational.com/Media/z/y/c/3fd2b481-94df-413e-aefe-924b3b54582f.png?auto=webp&width=1507.2",
  //     title: "Concerto Vasco Rossi",
  //     category: "Concerto",
  //     artisti: ["Vasco Rossi"],
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis."
  //   },
  //   {
  //     id: 4,
  //     img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
  //     title: "Lazza daje",
  //     category: "Concerto",
  //     artisti: ["Lazza"],
  //     description: "Lorem blablabla"
  //   },
  //   {
  //     id: 5,
  //     img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
  //     title: "Lazza daje",
  //     category: "Concerto",
  //     artisti: ["Lazza"],
  //     description: "Lorem blablabla"
  //   },
  //   {
  //     id: 6,
  //     img: "https://a6p8a2b3.stackpathcdn.com/Df1CvfKFZhzSkq3JmKfF7g-NBAE=/433x325/smart/rockol-img/img/foto/upload/aokiverse.png",
  //     title: "Steve Aoki Tour",
  //     category: "Concerto",
  //     artisti: ["Steve Aoki"],
  //     description: "Ciaco ciaaoaoaoo"
  //   }
  // ]
  idEvento: string;
  evento:any;
  artists: Artist[] = [];
  artistsEvents: ArtistsEvent[] = [];
  categories: Category[] = [];
  
constructor(private route: ActivatedRoute, private eventService: EventService, private artistService: ArtistService, private artistEventService: ArtistsEventService, private categoryService: CategoryService) {
  this.idEvento = this.route.snapshot.paramMap.get('id')!;
  this.eventService.get(this.idEvento)
      .subscribe(
        data => {
          this.evento = data;   
        },
        error => {
          console.log(error);
        });
  this.registrato = localStorage.getItem('registrato');
  this.artistService.getAll()
    .subscribe(
      data => {
        this.artists = data; 
      },
      error => {
        console.log(error);
    });

    this.artistEventService.getAll()
    .subscribe(
      data => {
        this.artistsEvents = data;    
      },
      error => {
        console.log(error);
    });

    this.categoryService.getAll()
    .subscribe(
      data => {
        this.categories = data;    
      },
      error => {
        console.log(error);
    });
}

addToCart(evento:any, dettaglio:any) {
  // const loc:any = localStorage.getItem('cart')
  let elCart = {
    evento: evento,
    dettaglio: dettaglio
  }

  let cart:any = [];
  if (localStorage.getItem('cart') !== null) {
    let locCart:any = localStorage.getItem('cart');
    cart = JSON.parse(locCart);
  }
  cart.push(elCart);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent( new Event('storage'))
}

findArtist(eventId:number):any {
  let artistEv: any[] = [];
  this.artistsEvents.forEach(artistEvent => {
    if (artistEvent.event === eventId) {
      this.artists.forEach(artist => {
        if (artistEvent.artist === artist.id) {
          artistEv.push(artist);
        }
      });
    }
  });
  return artistEv;
}

  ngOnInit(): void {
  }

  @HostListener('window:storage')
  onStorageChange() {
    this.registrato = localStorage.getItem('registrato');
  }

}
