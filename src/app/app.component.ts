import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrls: (string | IImage)[] = [
    { url: 'assets/svg/tags/Coding-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Coding', href: '#config' },
    { url: 'assets/svg/tags/Competition-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Competition' },
    { url: 'assets/svg/tags/Conference-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Conference' },
    { url: 'assets/svg/tags/Courses-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Courses' },
    { url: 'assets/svg/tags/Finance1-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Finance' },
    { url: 'assets/svg/tags/Finance2-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Finance' },
    { url: 'assets/svg/tags/Internship-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Internship' },
    { url: 'assets/svg/tags/Scholarship-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Scholarship' },
    { url: 'assets/svg/tags/Workshop-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Workshop' },
  ];

  isOverlayOpen = false;

  @ViewChild('toggleButton') toggle: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  showOverlay(): void{
    this.isOverlayOpen = true;
  }

  closeOverlay(e: Event): void {
    if(e.target !== this.toggle.nativeElement)
    {
      this.isOverlayOpen = false;
    }
  }

}
