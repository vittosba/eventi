import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryService } from './../services/category/category.service';
import {  Category } from './../models/category.model';
import { EventService } from './../services/event/event.service';
import { Eventi } from './../models/eventi.model';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit{
  tipologieEventi:string[] = [
    "Concerto", "Sport", "Mostra Museo", "Teatro", "Altre Manifestazioni", "Evento Internazionale", "Prodotto", "Cinema", "Tutti gli eventi"
  ];
  eventi:any[] = [
    {
      id: 0,
      img: "https://dynamicmedia.livenationinternational.com/Media/z/y/c/3fd2b481-94df-413e-aefe-924b3b54582f.png?auto=webp&width=1507.2",
      title: "Concerto Vasco Rossi",
      category: "Concerto",
      artisti: ["Vasco Rossi", "Madonna", "Fedez"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.",
    },
    {
      id: 1,
      img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
      title: "Lazza daje",
      category: "Sport",
      artisti: ["Lazza"],
      description: "Lorem blablabla"
    },
    {
      id: 2,
      img: "https://a6p8a2b3.stackpathcdn.com/Df1CvfKFZhzSkq3JmKfF7g-NBAE=/433x325/smart/rockol-img/img/foto/upload/aokiverse.png",
      title: "Steve Aoki Tour",
      category: "Concerto",
      artisti: ["Steve Aoki"],
      description: "Ciaco ciaaoaoaoo"
    },
    {
      id: 3,
      img: "https://dynamicmedia.livenationinternational.com/Media/z/y/c/3fd2b481-94df-413e-aefe-924b3b54582f.png?auto=webp&width=1507.2",
      title: "Concerto Vasco Rossi",
      category: "Concerto",
      artisti: ["Vasco Rossi"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis."
    },
    {
      id: 4,
      img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
      title: "Lazza daje",
      category: "Concerto",
      artisti: ["Lazza"],
      description: "Lorem blablabla"
    },
    {
      id: 5,
      img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/lazza-biglietti.jpg",
      title: "Lazza daje",
      category: "Concerto",
      artisti: ["Lazza"],
      description: "Lorem blablabla"
    },
    {
      id: 6,
      img: "https://a6p8a2b3.stackpathcdn.com/Df1CvfKFZhzSkq3JmKfF7g-NBAE=/433x325/smart/rockol-img/img/foto/upload/aokiverse.png",
      title: "Steve Aoki Tour",
      category: "Concerto",
      artisti: ["Steve Aoki"],
      description: "Ciaco ciaaoaoaoo"
    }
  ]
  siteCategory: any;
  categories: Category[] = [];
  events: Eventi[] = [];
  
constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private eventService: EventService) {
  this.siteCategory = this.route.snapshot.paramMap.get('typology')!;
  this.categoryService.getAll()
    .subscribe(
      data => {
        this.categories = data;    
        console.log(this.categories);
      },
      error => {
        console.log(error);
    });
    this.eventService.getAll()
    .subscribe(
      data => {
        this.events = data;   
      },
      error => {
        console.log(error);
      });
}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.siteCategory = params.get('typology');
    })
  }

  categoryExist(category:Category) {
      let categoryOk = false;
    this.events.forEach(event => {
        if (event.category === category.id) {
          categoryOk = true;
        }
    });
    return categoryOk;
  }

  findEvents(siteCategory:any):any {
    let siteEvents: Eventi[] = [];
    this.categories.forEach(category => {
      if (category.name === siteCategory) {
        this.events.forEach(event => {
          if (event.category === category.id) {
            siteEvents.push(event);
          }
        });
      }
    });
    return siteEvents;
  }

}
