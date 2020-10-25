import {Injectable} from "@angular/core";
import {Item} from "../item";
import {Basket, BasketItem} from "../basket";

@Injectable({
    providedIn: 'root'
})

export class BasketService {

    basket: Basket;
    sum: number;

    constructor() {
        this.basket = {
            items: []
        }
    }

    getItemById(id: number, items: Item[]): Item {
        return items.find(item => item.id == id);
    }

    getBasketItemById(id: number): BasketItem {
        return this.basket.items.find(basketItem => basketItem.item.id == id);
    }

    isItemInBasket(id: number): boolean {
        return this.basket.items.filter(basketItem => basketItem.item.id == id).length != 0;
    }

    addToBasket(id: number, items: Item[]): void {
        if (this.isInStock(id, items)) {
            const item = this.getItemById(id, items);
            if (!this.isItemInBasket(id)) {
                const basketItem: BasketItem = {
                    item: item,
                    count: 1,
                }
                this.basket.items.push(basketItem);
            } else {
                const basketItem = this.getBasketItemById(id);
                if (item.quantity > basketItem.count)
                    basketItem.count++;
            }
        }
    }

    getItemCountFromBasket(id: number): number {
        if (this.basket.items.length == 0 || !this.isItemInBasket(id)) {
            return 0;
        }
        return this.getBasketItemById(id).count;
    }

    getTotal(): string {
        return 'Total: ' + this.getTotalSum() + '€';
    }

    getTotalSum(): number {
        let sum = 0;
        this.basket.items.forEach(basketItem => sum += basketItem.item.price * basketItem.count);
        return sum;
    }

    isInStock(id: number, items: Item[]): boolean {
        return items.find(item => item.id == id && item.quantity != 0) != undefined;
    }

    reset(): void {
        this.basket.items = [];
    }

}