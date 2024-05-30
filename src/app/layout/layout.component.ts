import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { SidebarComponent } from './sidebar/sidebar.component'
import { FooterComponent } from './footer/footer.component'
import { MatListItem, MatNavList } from '@angular/material/list'
import { RouterOutlet } from '@angular/router'
import { Subscription } from 'rxjs'
import { SharedService } from '@shared/core/services/shared.service'


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidebarComponent, FooterComponent, MatListItem, MatNavList, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, OnDestroy {

  title: string = 'Assignment Management'

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private sharedService: SharedService,
  ) {
  }


  ngOnInit(): void {
    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile
    })
  }


  ngOnDestroy()
    :
    void {
    if (this.subscription
    ) {
      this.subscription.unsubscribe()
    }
  }


}
