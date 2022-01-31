import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('searchInput') searchInput!: ElementRef;

  public results: any;
  public value!: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

    this.searchService.currentResults.subscribe(current => this.results = current);
  }

  onClickSearch(): void {

    this.searchService.getSearchResults(this.searchInput.nativeElement.value);
  }

}
