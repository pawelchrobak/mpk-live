import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class MpkDataService {

  private URL_API_LINES: string = "https://www.wroclaw.pl/open-data/api/action/datastore_search_sql?sql=SELECT%20DISTINCT%20%22Nazwa_Linii%22%20FROM%20%2217308285-3977-42f7-81b7-fdd168c210a2%22%20WHERE%20%22Nazwa_Linii%22%20NOT%20LIKE%20%27None%27";
  private URL_API_LOCATION_DATA: string = "https://www.wroclaw.pl/open-data/api/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%2217308285-3977-42f7-81b7-fdd168c210a2%22%20WHERE%20%22Nazwa_Linii%22%20NOT%20LIKE%20%27None%27";

  public getAllLineNumbers() {
    return this.http.jsonp(this.URL_API_LINES, 'callback');
  }

  public getLocationData() {
    return this.http.jsonp(this.URL_API_LOCATION_DATA, 'callback');
  }

  constructor(private http: HttpClient) { }
}
