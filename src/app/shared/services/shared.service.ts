import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isMobileSource:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isMobileObservable:Observable<boolean> = this.isMobileSource.asObservable();

  setIsMobile(isMobile: boolean) {
    this.isMobileSource.next(isMobile);
  }
}
