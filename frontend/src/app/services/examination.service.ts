import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Examination} from "../models/examination";
import {SetupSensor} from "../models/setupSensor";
import {Results} from "../models/results";

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  private examinationUrl = '/api/examinations';

  constructor(private http: HttpClient) {}

  public getExaminations(userId: number): Observable<Examination[]> {
    return this.http.get<Examination[]>(this.examinationUrl + '/user/' + userId);
  }

  public registerExamination(examination: Examination): Observable<Examination> {
    return this.http.post<Examination>(this.examinationUrl + '/register', examination);
  }

  public setupSensors(setupSensors: SetupSensor): Observable<void> {
    return this.http.post<void>(this.examinationUrl + '/setup', setupSensors);
  }

  public startExamination(id: number): Observable<Results[]> {
    return this.http.put<Results[]>(this.examinationUrl + '/start/' + id, null);
  }
}
