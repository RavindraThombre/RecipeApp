import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiKey:string = 'd7de66eae26449be8fcc6320812e027d';
  constructor(private http:HttpClient) { }

  getSearchResults(query:string):   Observable<any>{
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${this.apiKey}`;
    // const url = `https://api.spoonacular.com/recipes/complexSearch?query=Pa&number=5&apiKey=d7de66eae26449be8fcc6320812e027d`;
    return this.http.get<any>(url);
  }

  getRecipeInformation(id: string): Observable<any> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getInstructions(id: string): Observable<any> {
    const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
