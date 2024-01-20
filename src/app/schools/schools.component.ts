import { Component } from '@angular/core';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent {

  schools: any = []

  constructor(private loadDataService: LoadDataService) {
    this.loadData()
    
  }

  loadData() {
    this.loadDataService.readFile("./assets/class/class2.json").subscribe(
      (data) => {
        console.log(data);
        this.schools.push(JSON.parse(data.toString()));
      }
    )
  }

}
