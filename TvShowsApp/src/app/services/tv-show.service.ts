// src/app/services/tv-show.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TvShow } from '../models/tv-show/tv-show.module';


@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiUrl = 'http://localhost:8080/api/TvShows';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(tvShow: TvShow): Observable<TvShow> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<TvShow>(this.apiUrl, tvShow, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, tvShow: TvShow): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, tvShow).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
