import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BillGatesComponent} from "./bill-gates/bill-gates.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillGatesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Исправлено с 'styleUrl' на 'styleUrls'
})
export class AppComponent {
  title = 'bill-gates-article';
}
