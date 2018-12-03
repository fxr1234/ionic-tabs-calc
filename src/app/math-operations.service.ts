import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathOperationsService {
  private operations = [
    {
      name: 'addition',
      desc: 'You add two numbers',
      symbol: '+',
    },
    {
      name: 'subtraction',
      desc: 'You subtract one number from another',
      symbol: '-',
    },
    {
      name: 'multiplication',
      desc: 'You multiply one number from another',
      symbol: '\u00D7',
    },
    {
      name: 'division',
      desc: 'You divide one number from another',
      symbol: '\u00F7',
    },
  ]
  constructor() { }
    getOperations() {
    return this.operations;
  }

  getOperationByName(operName: string) {
    return this.operations.find(oper => oper.name === operName);
  }
}
