import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathOperationsService } from '../math-operations.service';
@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
  operation = {}
  constructor(private route: ActivatedRoute, private mathOper: MathOperationsService) { }

  

  ngOnInit() {
    this.getMathOperation();
}
  getMathOperation() {
    const operName = this.route.snapshot.paramMap.get('operName');
    this.operation = this.mathOper.getOperationByName(operName);

  }
}
