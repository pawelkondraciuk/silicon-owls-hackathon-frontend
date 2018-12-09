import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '@owls/tickets';
import { Observable } from 'rxjs';

export const API_BASE = 'http://mrogowski.nazwa.pl:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_BASE}/ticket/`);
  }
}
