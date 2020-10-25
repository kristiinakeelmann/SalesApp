import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {getChangeText} from "../bank-note-util";
import {BasketService} from "../services/basket-service";

@Component({
    selector: 'app-cash-dialog',
    templateUrl: './cash-dialog.component.html',
    styleUrls: ['./cash-dialog.component.css'],
})
export class CashDialogComponent {

    givenSum: number;
    notesBackList: string [];

    constructor(
        public dialogRef: MatDialogRef<CashDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public basketTotal: any,
        private basketService: BasketService
    ) {
    }

    onClose(): void {
        this.dialogRef.close();
        this.basketService.reset();
    }

    cashBackCalculation(): void {
        let backInCents = this.givenSum * 100 - this.basketTotal * 100;
        this.notesBackList = getChangeText(backInCents);
    }
}
