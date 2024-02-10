import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  fixedBox: HTMLElement | null = document.getElementById('fixed-box');
   innerImg: HTMLImageElement | null = document.getElementById('inner-img') as HTMLImageElement;
   closeBtn: HTMLElement | null = document.getElementById('closeBtn');

   imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('#slider img');

  
 
  
  
    


}
