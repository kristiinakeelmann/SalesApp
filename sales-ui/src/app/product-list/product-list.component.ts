import {Component, OnInit} from '@angular/core';

import {ItemService} from "../services/item-service";
import {BasketService} from "../services/basket-service";
import {Item} from "../item";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private itemService: ItemService,
                private basketService: BasketService
    ) {
    }

    ngOnInit() {
        this.itemService.fetchItems();
    }

    getItems(): Item[] {
        return this.itemService.items;
    }

    getName(id: number): string {
        return this.itemService.getName(id);
    }

    getPrice(id: number): string {
        return this.itemService.getPrice(id);
    }

    getIcon(id: number): string {
        return this.itemService.getIcon(id);
    }

    checkout(): void {
        this.itemService.checkout(this.basketService.basket, this.basketService.getTotalSum());
    }

    addToBasket(id: number): void {
        this.basketService.addToBasket(id, this.itemService.items);
    }

    getItemCountFromBasket(id: number): number {
        return this.basketService.getItemCountFromBasket(id);
    }

    getTotal(): string {
        return this.basketService.getTotal();
    }

    isInStock(id: number): boolean {
        return this.basketService.isInStock(id, this.itemService.items);
    }

    reset(): void {
        this.basketService.reset();
    }

}
