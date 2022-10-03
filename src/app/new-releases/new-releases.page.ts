import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.page.html',
  styleUrls: ['./new-releases.page.scss'],
})
export class NewReleasesPage implements OnInit {
   items=[
    {src:'../../assets/image-release.png' ,
  cardTitle:'Madison, WI',
  cardcontent:'lorem ipsum'},
  {src:'../../assets/image-release.png' ,
  cardTitle:'Madison, WI',
  cardcontent:'lorem ipsum'},
  {src:'../../assets/image-release.png' ,
  cardTitle:'Madison, WI',
  cardcontent:'lorem ipsum'},
  {src:'../../assets/image-release.png' ,
  cardTitle:'Madison, WI',
  cardcontent:'lorem ipsum'},
  {src:'../../assets/image-release.png' ,
  cardTitle:'Madison, WI',
  cardcontent:'lorem ipsum'},
  ];

  constructor() { }



  ngOnInit() {
  }

}
