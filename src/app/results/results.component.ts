import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: any;
  value: string = '';

  displayedColumns: string[] = ['avatar_url', 'type', 'login'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
    this.searchService.currentResults.subscribe(current => {
      this.results = current;
      this.dataSource = new MatTableDataSource(current.items) 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }
}

export interface UserData {
  avatar_url: string;
  type: string;
  login: string;
}

