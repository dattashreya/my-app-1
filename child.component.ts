import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription, } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  receiveData: any;
  private dataSubscription: Subscription;
  constructor(private _dService: DataService) { }

  ngOnInit() {
    this.dataSubscription = this._dService.currentData.subscribe(d => {
      this.receiveData = d;
    })
  }

  ngOnDestroy(): void {
    if(this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

}
