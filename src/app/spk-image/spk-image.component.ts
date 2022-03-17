import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spk-image',
  templateUrl: './spk-image.component.html',
  styleUrls: ['./spk-image.component.scss']
})
export class SpkImageComponent implements OnInit {

  @Input() src = '';
  @Input() lowSrc = '';

  public imageUrl = 'https://i.imgur.com/EWx6Ao5.jpg';
  constructor() { 
    console.log(this.src);
    
    this.imageUrl = this.src;
  }

  dosomething() {
    // alert('loaded')
  }
  ngOnInit(): void {
  }

}
