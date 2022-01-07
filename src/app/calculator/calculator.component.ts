import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number;
  symbol: string;
  count: number;

  ngOnInit() {
    this.symbol = '+';
    this.count = 0;
  }

  operationEvent(s: string) {
    if (this.inp1 && this.inp2) {
      this.symbol = s;
      this.count += 1;
      switch (s) {
        case '+':
          this.result = this.inp1 + this.inp2;
          break;
        case '-':
          this.result = this.inp1 - this.inp2;
          break;
        case '*':
          this.result = this.inp1 * this.inp2;
          break;
        case '/':
          this.result = this.inp1 / this.inp2;
          break;
      }
    }
  }

  restCalculator() {
    this.symbol = '+';
    this.result = null;
    this.inp1 = null;
    this.inp2 = null;
  }
}
