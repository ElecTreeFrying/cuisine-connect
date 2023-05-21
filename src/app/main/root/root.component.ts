import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './root.config';
import { RootService } from './root.service';
import { RecipesFirestoreService, recipes } from '../common';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  standalone: true, imports, viewProviders
})
export class RootComponent implements OnInit {

  constructor(
    public service: RootService,
    public recipesFirestore: RecipesFirestoreService
  ) { }

  ngOnInit(): void {
    // recipes.forEach(e => this.recipesFirestore.addDoc(e).then((a) => {
    //   console.log('@@@ ', a);
    // }));
  }
  
}
