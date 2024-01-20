import { Component } from '@angular/core';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
  providers: [LoadDataService]
})
export class ClassesComponent {

  classes: any = []

  constructor(private loadDataService: LoadDataService) {
    
    this.loadData();
    
  }

  loadData() {
    console.log("I am called from classes component.");
    this.loadDataService.readFile("./assets/class/class2.json").subscribe(
      (data) => {
        console.log(data);
        this.classes.push(JSON.parse(data.toString()));
      }
    )
  }

}
