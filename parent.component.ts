import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private _dService: DataService) { }
  ngOnInit() {
  }

  sendData(data: string) {
    this._dService.changeData(data);  
  }

}
