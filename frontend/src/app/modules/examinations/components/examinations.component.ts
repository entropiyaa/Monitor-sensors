import {Component, Input, OnInit} from '@angular/core';
import {ExaminationService} from "../../../services/examination.service";
import {Examination} from "../../../models/examination";
import {User} from "../../../models/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {

  @Input() public user: User;
  public examinations: Examination[];
  public displayedColumns: string[] = ['type', 'status', 'date'];
  private subscriptions: Subscription[] = [];

  constructor(private examinationService: ExaminationService) {}

  ngOnInit(): void {
    this.getExaminations();
  }

  private getExaminations(): void {
    this.subscriptions.push(this.examinationService.getExaminations(this.user.id)
      .subscribe(examinations => {
        this.examinations = examinations;
      }));
  }

  public addExaminations(examination: Examination): void {
    this.examinations.push(examination);
    console.log('add!!');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
