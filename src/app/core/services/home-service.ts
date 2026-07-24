import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeData } from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  http = inject(HttpClient);

  getHomeData() {
    return this.http.get<HomeData>('data/home.json');
  }
}

