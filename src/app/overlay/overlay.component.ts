import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  text = 'Hello! We are a team of students from IIT and BITS, out to solve a critical problem that we have faced. Everyone dreams of learning, and pursuing multiple opportunities outside their campuses, while cultivating their interests after entering college. However, most remain limited by the bubble of their choice of peers, constraints in ideas, and trying to find their needle-like calling in the vast haystack-like Internet. And thus was born the drive to create The Opportunity Project, something which would chip away at this problem.\n\nProviding access to opportunities all across the globe across six diverse domains, The Opportunity Project aims to eliminate the problem of the bubble which holds in our true potential. We aim to bridge the experiential learning gap and build an exclusive community of like-minded people with the purpose of learning, growing together, and exploring the world.';

  @Input('show') show: boolean;
  @Output() closeEvent = new EventEmitter<Event>();

  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('overlayTextContainer') overlayTextContainer: ElementRef;
  @ViewChild('overlayText') overlayText: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.overlay.nativeElement && e.target !== this.overlayText.nativeElement && e.target !== this.overlayTextContainer.nativeElement)
      {
        this.closeOverlay(e);
      }
    });
   }

  ngOnInit(): void {
  }

  closeOverlay(e: Event): void {
    this.closeEvent.emit(e);
  }

}
