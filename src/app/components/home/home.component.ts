import { Component, OnInit } from '@angular/core';
import { ObservablesService } from 'src/app/services/observables.service';
import { RequestService } from 'src/app/services/request.service';
import { combineAll, concatMap, map, mergeMapTo, take } from 'rxjs/operators'
import { combineLatest, merge } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private reqService: RequestService, 
    private observables: ObservablesService
  ) { }
  
  allUsers$ = this.observables.users$.pipe(
    map(data => {
      this.observables.updateCurrentUser(data[0])
      return data    
    })
   )
  currentUser$ = this.observables.currentUser$

  ngOnInit(): void {
    this.reqService.getUsers()
  }

}
