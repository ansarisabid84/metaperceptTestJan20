import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadDataService } from './load-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LoadDataService]
})
export class AppComponent {

title = 'This is Dashboard Page';

constructor(
  private router: Router,
  private loadDataService: LoadDataService
  ) {
    this.loadDataService.readFile("./assets/class/class1.json").subscribe(
      (data) => {
        console.log("============================")
        console.log(data["id"]);
        console.log("--------------------")
      }
    )
}


getDetails(name:string) {
  this.router.navigate(['/classes']);

}
}
