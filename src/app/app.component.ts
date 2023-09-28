import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public imgOfTheDay: any = "";

  constructor(private nasaService: NasaService){}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(image => {
      this.imgOfTheDay = image.url
    })
  }
}
