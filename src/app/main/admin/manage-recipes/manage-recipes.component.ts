import { Component } from '@angular/core';

import { imports, viewProviders } from './manage-recipes.config';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageRecipesComponent {

}
