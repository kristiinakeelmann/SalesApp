import {BasketItemDto} from "./basket-item-dto";

export class Basket {
    items: BasketItem[];
}

export class BasketItem {
    item: BasketItemDto;
    count: number;
}