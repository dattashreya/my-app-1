import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private _dataSubject = new BehaviorSubject<any>(null);
  public currentData = this._dataSubject.asObservable();

  changeData(data: any) {
    this._dataSubject.next(data);  
  }

}
