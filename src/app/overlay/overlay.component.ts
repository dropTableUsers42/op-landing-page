import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input('show') show: boolean;
  @Output() closeEvent = new EventEmitter<Event>();

  @ViewChild('overlay') overlay: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.overlay.nativeElement)
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
