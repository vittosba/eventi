import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from './../services/artist/artist.service';
import { Artist } from './../models/artist.model';
import { ArtistsEventService } from './../services/artistEvent/artists-event.service';
import {  ArtistsEvent } from './../models/artistsEvent.model';
import { CategoryService } from './../services/category/category.service';
import {  Category } from './../models/category.model';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent implements OnInit {

  @Input()
    evento: any;

  artists: Artist[] = [];
  artistsEvents: ArtistsEvent[] = [];
  categories: Category[] = [];

  constructor(private artistService: ArtistService, private artistEventService: ArtistsEventService, private categoryService: CategoryService) { 
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

}
