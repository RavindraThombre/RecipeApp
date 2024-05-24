import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipes: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute,private router:Router, private recipeService:RecipeService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.query = params['query'];
      this.searchRecipes();
    });
      
  }

  searchRecipes(){
    
    this.recipeService.getSearchResults(this.query).subscribe((data: any) => {
      this.recipes = data.results;
    });
  }

  
  viewDetail(id:number){
    this.router.navigate(['/detail',id]);
  }

}
