import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {SharedService} from "./shared/services/shared.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'Assignment Management';
  isMobile!: boolean


  constructor(private sharedService: SharedService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth < 768; // Example breakpoint for mobile
    this.sharedService.setIsMobile(this.isMobile);
  }

  ngOnInit() {
    // Initial check
    this.isMobile = window.innerWidth < 768; // Example breakpoint for mobile
    this.sharedService.setIsMobile(this.isMobile);
  }
}
