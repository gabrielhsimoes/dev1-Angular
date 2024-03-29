import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/plataform-detector/platform-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit{


  constructor(private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService) {}

    ngOnInit(): void {

      this.platFormDetector.isPlatformBrowser &&
      this.element.nativeElement.click();
  }
}
