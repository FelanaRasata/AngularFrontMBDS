import { Routes } from '@angular/router'
import { LayoutComponent } from '@layout/layout.component'
import { ListAssignmentComponent } from '@pages/assignment/list-assignment/list-assignment.component'
import { AddAssignmentComponent } from '@pages/assignment/add-assignment/add-assignment.component'
import { DetailAssignmentComponent } from '@pages/assignment/detail-assignment/detail-assignment.component'
import { EditAssignmentComponent } from '@pages/assignment/edit-assignment/edit-assignment.component'
import { BackAssignmentComponent } from '@pages/assignment/back-assignment/back-assignment.component'
import { SignInComponent } from '@pages/user/sign-in/sign-in.component'
import { authGuard } from '@shared/core/guards/auth.guard'
import { teacherGuard } from '@shared/core/guards/teacher.guard'
import { studentGuard } from '@shared/core/guards/student.guard'
import {assignmentResolver} from "@shared/core/resolvers/assignment.resolver";
import {assignmentListResolver} from "@shared/core/resolvers/assignment-list.resolver";
import {assignmentConfirmedListResolver} from "@shared/core/resolvers/assignment-confirmed-list.resolver";
import {assignmentToBeConfirmedListResolver} from "@shared/core/resolvers/assignment-to-be-confirmed-list.resolver";


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
    canActivateChild: [authGuard],
    children: [
      {
        path: 'list/:page/:limit',
        resolve: {
          data: assignmentListResolver,
        },
        component: ListAssignmentComponent,
      },
      {
        path: 'add',
        canActivate: [studentGuard],
        component: AddAssignmentComponent,
      },
      {

        path: ':id/detail',
        resolve: {
          data: assignmentResolver,
        },
        component: DetailAssignmentComponent
      },
      {
        path: ':id/edit',
        canActivate: [teacherGuard],
        resolve: {
          data: assignmentResolver,
        },
        component: EditAssignmentComponent,
      },
      {
        path: 'back',
        canActivate: [teacherGuard],
        resolve: {
          dataConfirmed: assignmentConfirmedListResolver,
          dataToBeConfirmed: assignmentToBeConfirmedListResolver,
        },
        component: BackAssignmentComponent,
      },
      {
        path: '',
        redirectTo: 'list/:page/:limit',
        pathMatch: 'full'
      },
    ],
  },
]
