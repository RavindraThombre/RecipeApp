import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  recipe: any;
  ingredients: any[] = [];
  instructions: any[] = [];


  constructor(private route:ActivatedRoute, private recipeService:RecipeService){}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.fetchRecipeDetails(id);
    }
  }
    
    fetchRecipeDetails(id:string){
      this.recipeService.getRecipeInformation(id).subscribe(data =>{
        this.recipe = data;
        this.ingredients = data.extendedIngredients;
      });
        
      this.recipeService.getInstructions(id).subscribe(data => {
        this.instructions = data[0]?.steps || [];
      });
    // this.recipeService.getRecipeInformation(id).subscribe(data =>{
    //   this.recipe = data;
    // });
      
    // this.recipeService.getInstructions('id').subscribe(data => {
    //   this.instructions = data[0]?.steps || [];
    // });
  }


}

