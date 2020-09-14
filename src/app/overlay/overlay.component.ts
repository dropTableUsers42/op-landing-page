import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateY(100%)' }))
      ]),
    ])
  ]
})
export class OverlayComponent implements OnInit {

  text1 = 'Hello! We are a team of students from IIT and BITS, out to solve a critical problem that we have faced. Everyone dreams of learning and pursuing multiple opportunities outside their campuses while cultivating their interests after entering college. However, most remain limited by the bubble of their choice of peers and constraints in ideas, trying to find their needle-like calling in the vast haystack-like Internet.\n\nAnd thus was born the drive to create '
  text2 = 'The Opportunity Project'
  text3 = ' - or as we love to call it, the OP - something which would chip away at this problem.\n\nThrough The Opportunity Project, we aim to bridge the experiential learning gap and build an exclusive community of like-minded people with the purpose of learning, growing together, and exploring the world. We have curated 1000+ opportunities all across the globe covering six diverse domains and various formats. Together, let’s cross the barrier which holds in our true potential.';

  @Input('show') show: boolean;
  @Output() closeEvent = new EventEmitter<Event>();

  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('overlayTextContainer') overlayTextContainer: ElementRef;
  @ViewChild('overlayText') overlayText: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.overlay?.nativeElement && e.target !== this.overlayText?.nativeElement && e.target !== this.overlayTextContainer?.nativeElement)
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
