import { Component, HostListener, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SharedService } from './shared/core/services/shared.service'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'Assignment Management'
  isMobile!: boolean


  constructor(private sharedService: SharedService) {
  }


  // Code ChatGPT
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth < 768 // Example breakpoint for mobile
    this.sharedService.setIsMobile(this.isMobile)
  }


  ngOnInit() {
    // Initial check
    this.isMobile = window.innerWidth < 768 // Example breakpoint for mobile
    this.sharedService.setIsMobile(this.isMobile)
  }
}
