import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isLoading$!: Observable<boolean>;
    private _showLoaderEvents$!: Observable<boolean>;
    private _hideLoaderEvents$!: Observable<boolean>;
    title = 'angular-router-resolve';

    constructor(private router: Router) { }

    ngOnInit(): void {
        this._showLoaderEvents$ = this.router.events.pipe(
            filter(e => e instanceof ResolveStart),
            mapTo(true)
        )

        this._hideLoaderEvents$ = this.router.events.pipe(
            filter(e => e instanceof ResolveEnd),
            mapTo(false)
        )


        this.isLoading$ = merge(this._hideLoaderEvents$, this._showLoaderEvents$);

    }
}
