import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { Router, NavigationEnd } from '@angular/router';
import { getHtmlTagDefinition } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BackendService } from './_services/backend.service';

declare let gtag: Function ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrls: (string | IImage)[] = [
    { url: 'assets/svg/tags/Coding-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Coding' },
    { url: 'assets/svg/tags/Competition-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Competition' },
    { url: 'assets/svg/tags/Conference-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Conference' },
    { url: 'assets/svg/tags/Courses-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Courses' },
    { url: 'assets/svg/tags/Finance1-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Finance' },
    { url: 'assets/svg/tags/Finance2-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Finance' },
    { url: 'assets/svg/tags/Internship-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Internship' },
    { url: 'assets/svg/tags/Scholarship-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Scholarship' },
    { url: 'assets/svg/tags/Workshop-01.svg', backgroundSize: 'contain', backgroundPosition: 'center', caption: 'Workshop' },
  ];

  collegeNames = [
    'IIT Bombay',
    'BITS Pilani - Pilani Campus',
    'IIT Delhi',
    'IIT Kanpur',
    'IIT Guwahati',
    'IIT Kharagpur',
    'IIT Madras',
    'IIT Roorkee',
    'BITS Pilani - Goa Campus',
    'BITS Pilani - Hyderabad Campus',
    'Other'
  ];

  preregForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',  [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    college: new FormControl('',  Validators.required),
    collegeName: new FormControl('')
  } );

  isOverlayOpen = false;

  @ViewChild('toggleButton') toggle: ElementRef;

  constructor(private renderer: Renderer2, private backendService: BackendService) {
    console.log(this.backendService.currentStatusValue);
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

  submitForm(): void {
    console.log('TODO');
    console.log(this.preregForm.value);
    this.backendService.sendPrereg(
      this.preregForm.value.name,
      this.preregForm.value.email,
      this.preregForm.value.college,
      this.preregForm.value.collegeName,
    ).subscribe(ret => {
      console.log('Received');
    });
  }

  get collegeEntered(): string {
    return this.preregForm.value.college;
  }

  get currentStatus(): boolean {
    return this.backendService.currentStatusValue;
  }

}

function otherCollege(collegeKey: string, otherCollegeKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let college = group.controls[collegeKey];
    let otherCollege = group.controls[otherCollegeKey];

    if(college.value === 'Other' && otherCollege.value === '')
    {
      return {collegReq: true};
    }
    return null;
  }
}
