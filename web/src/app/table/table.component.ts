import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public columnNames: string[] = ['valueDate', 'record', 'description'];
  constructor() { }

  ngOnInit(): void {
  }

}
