import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit{
  tipologieEventi:string[] = ["Concerto", "Sport", "Mostra Museo", "Teatro", "Altre Manifestazioni", "Evento Internazionale", "Prodotto", "Cinema", "Tutti gli eventi"];
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
  typology: any;
  
constructor(private route: ActivatedRoute, private router: Router) {
  this.typology = this.route.snapshot.paramMap.get('typology')!;
  console.log(this.typology);
}

// ngAfterViewChecked() {
//   this.typology = this.route.snapshot.paramMap.get('typology')!;
//   console.log(this.typology);
// }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.typology = params.get('typology');
    })
  }

  tipologiaEsiste(tipologia:string) {
      let tipologiaVuota = false;
    this.eventi.forEach(evento => {
        if (evento.category === tipologia) {
            tipologiaVuota = true;
        }
    });
    return tipologiaVuota;
  }

}
