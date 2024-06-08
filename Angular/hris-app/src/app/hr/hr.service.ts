import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  constructor(private http: HttpClient) {}
  viewApplications(): Observable<any> {
    return this.http.get<any>(APP_CONSTANTS.BACKEND_URL + 'viewApplications', {
      withCredentials: true,
    });
  }

  viewEmployees(): Observable<any> {
    return this.http.get<any>(APP_CONSTANTS.BACKEND_URL + 'viewEmployees', {
      withCredentials: true,
    });
  }
  viewVacancies(): Observable<any> {
    return this.http.get<any>(APP_CONSTANTS.BACKEND_URL + 'viewVacancies', {
      withCredentials: true,
    });
  }

  postJob(data: any): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'insertJobs', data, {
      withCredentials: true,
    });
  }

  getCount(): Observable<any> {
    return this.http.get<any>(APP_CONSTANTS.BACKEND_URL + 'count', {
      withCredentials: true,
    });
  }

  getSingleApplicant(id: any): Observable<any> {
    return this.http.get<any>(
      APP_CONSTANTS.BACKEND_URL + `viewSingleApplicant/${id}`,
      { withCredentials: true }
    );
  }

  getSingleEmployee(id: any): Observable<any> {
    return this.http.get<any>(
      APP_CONSTANTS.BACKEND_URL + `viewSingleEmployee/${id}`,
      { withCredentials: true }
    );
  }

  updateApplication(id: any, body: any): Observable<any> {
    return this.http.post<any>(
      APP_CONSTANTS.BACKEND_URL + `updateApplication/${id}`,
      body,
      { withCredentials: true }
    );
  }

  toggleVacancy(id: number): Observable<any> {
    return this.http.post<any>(
      APP_CONSTANTS.BACKEND_URL + `toggleVacancy/${id}`,
      {},
      { withCredentials: true }
    );
  }

  sendRoundMail(body: any): Observable<any> {
    return this.http.post<any>(
      APP_CONSTANTS.BACKEND_URL + `sendRoundMail`,
      body,
      { withCredentials: true }
    );
  }

  sendDocumentMail(body: any): Observable<any> {
    return this.http.post<any>(
      APP_CONSTANTS.BACKEND_URL + `sendDocumentMail`,
      body,
      { withCredentials: true }
    );
  }

  sendEmployeeMail(body: any): Observable<any> {
    return this.http.post<any>(
      APP_CONSTANTS.BACKEND_URL + `sendEmployeeMail`,
      body,
      { withCredentials: true }
    );
  }

  getQualificationsOfUser(id: any): Observable<any> {
    return this.http.get<any>(
      APP_CONSTANTS.BACKEND_URL + `getQualificationsOfUser/${id}`,
      { withCredentials: true }
    );
  }

  getJobHistoryOfUser(id: any): Observable<any> {
    return this.http.get<any>(
      APP_CONSTANTS.BACKEND_URL + `getJobHistoryOfUser/${id}`,
      { withCredentials: true }
    );
  }

  AddAnnouncement(data: any): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'addAnnouncement', data, {
      withCredentials: true,
    });
  }

  fetchAllAnnouncement(): Observable<any> {
    return this.http.get<any>(APP_CONSTANTS.BACKEND_URL + `allAnnouncement`, {
      withCredentials: true,
    });
  }

  getEidFromEmail(email: string): Observable<any> {
    return this.http.get(
      APP_CONSTANTS.BACKEND_URL + `getEidFromEmail/${email}`,
      { withCredentials: true }
    );
  }

  empDeptCount(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + `empDeptCount`, {
      withCredentials: true,
    });
  }

  offerLetterMail(body: any): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'offerLetterMail', body, {
      withCredentials: true,
    });
  }

  getNationalHolidays(month: number): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'getHolidays', { month });
  }

  checkDocuments(id: any): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + `checkDocument/${id}`);
  }
}
