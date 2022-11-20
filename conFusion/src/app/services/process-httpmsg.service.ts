import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProcessHTTPMsgService {

    constructor() { }
    public handleError(error: HttpErrorResponse | any) {
        let errMsg: string;
        if(error.error instanceof ErrorEvent) {
            // const body = error.json() || '';
            // const err = body.error || JSON.stringify(body);
            errMsg = error.error.message;
        }
        else
        {
            errMsg = `${error.status} - ${error.statusText || '' } ${error.error}`;
        }
        return throwError(errMsg);
    }
}