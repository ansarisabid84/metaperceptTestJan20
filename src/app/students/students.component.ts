import { Component } from '@angular/core';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  viewProviders: [LoadDataService]
})
export class StudentsComponent {

  students: any = []

  constructor(private loadDataService: LoadDataService) {
    this.loadData()
    
  }

  loadData() {
    this.loadDataService.readFile("./assets/class/class2.json").subscribe(
      (data) => {
        console.log(data);
        this.students.push(JSON.parse(data.toString()));
      }
    )
  }

}
