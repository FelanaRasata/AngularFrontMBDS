import {Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {ListAssignmentComponent} from "./pages/assignment/list-assignment/list-assignment.component";
import {AddAssignmentComponent} from "./pages/assignment/add-assignment/add-assignment.component";
import {DetailAssignmentComponent} from "./pages/assignment/detail-assignment/detail-assignment.component";
import {EditAssignmentComponent} from "./pages/assignment/edit-assignment/edit-assignment.component";
import {BackAssignmentComponent} from "./pages/assignment/back-assignment/back-assignment.component";
import {SignInComponent} from "./pages/user/sign-in/sign-in.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },

  {
    path: 'sign-in',
    component: SignInComponent
  },

  {
    path: 'assignment',
    component: LayoutComponent,
    children: [
      {
        path: 'list/:page/:size',
        component: ListAssignmentComponent,
      },
      {
        path: 'add',
        component: AddAssignmentComponent,
      },
      {

        path: ':id/detail',
        component: DetailAssignmentComponent
      },
      {
        path: ':id/edit',
        component: EditAssignmentComponent,
        // canActivate: [authGuard]
      },
      {
        path: 'back',
        component: BackAssignmentComponent,
      },
      {
        path: '',
        redirectTo: 'list/:page/:size',
        pathMatch: 'full'
      },
    ],
  },
];
