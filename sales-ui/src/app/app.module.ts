import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductListComponent} from './product-list/product-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from '@angular/flex-layout';
import {FooterComponent} from "./footer/footer.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {CashDialogComponent} from "./cash-dialog/cash-dialog.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatGridListModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
        ]),
        BrowserAnimationsModule,
        MatCardModule,
        FlexLayoutModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ProductListComponent,
        CashDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/