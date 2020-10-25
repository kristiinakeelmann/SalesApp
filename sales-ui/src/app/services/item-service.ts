import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Item} from "../item";
import {Basket} from "../basket";
import {NotificationService, NotificationType} from './notification-service';
import {CashDialogComponent} from "../cash-dialog/cash-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})

export class ItemService {

    private itemsUrl = "/api/items";
    private checkoutUrl = "/api/checkout"

    items: Item[];

    constructor(private httpClient: HttpClient,
                private dialog: MatDialog,
                private notificationService: NotificationService) {
    }

    fetchItems(): void {
        this.httpClient.get<Item[]>(`${this.itemsUrl}`).subscribe(items => {
            this.items = items;
        });
    }

    checkout(basket: Basket, totalSum: Number) {
        return this.httpClient.post(`${this.checkoutUrl}`, basket)
            .subscribe(
                () => {
                    this.notificationService.notify('Sales successful', NotificationType.success);
                    this.dialog.open(CashDialogComponent, {
                        data: totalSum
                    });
                },
                () => {
                    this.notificationService.notify('Sales unsuccessful: not enough quantity', NotificationType.error);
                }
            );
    }

    getName(id: number): string {
        return this.items.find(item => item.id == id).name;
    }

    getPrice(id: number): string {
        let price = this.items.find(item => item.id == id).price;
        return price + '€';
    }

    getIcon(id: number): string {
        return './assets/icons/' + id + '.png';
    }

}