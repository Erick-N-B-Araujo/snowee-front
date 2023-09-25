import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, 
  HttpResponse}
from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { map } from 'jquery';
import { AlertsService } from './alerts.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private alerts: AlertsService,
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          // Operation failed; error is an HttpErrorResponse
          error: (error) => {
            if(error.status == 401){
              this.router.navigate(['/users/login'])
              this.alerts.showAlertDanger("Você não tem permissão para acessar este recurso!")
            }
            else if(error.status == 403){
              this.router.navigate(['/inicio'])
              this.alerts.showAlertDanger("Nivel de permissão insulficiente para alterar este recurso!")
            }
            else if(error.status == 404){
              this.alerts.showAlertDanger("Item não encontrado!")
            }
          }
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          console.log(msg);
        })
      );
  }
}
