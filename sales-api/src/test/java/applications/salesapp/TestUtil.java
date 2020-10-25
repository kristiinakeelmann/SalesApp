package applications.salesapp;

import applications.salesapp.model.BasketDto;
import applications.salesapp.model.Item;

import java.util.List;

public class TestUtil {

    static Item getItem(int quantity) {
        Item item = new Item();
        item.setId(1);
        item.setName("Ice cream");
        item.setPrice(3);
        item.setQuantity(quantity);
        return item;
    }


    static BasketDto getBasketDto(int count) {
        BasketDto basketDto = new BasketDto();
        BasketDto.BasketItem basketItem = new BasketDto.BasketItem();
        BasketDto.ItemDto itemDto = new BasketDto.ItemDto();
        itemDto.setId(1);
        itemDto.setName("Ice cream");
        itemDto.setPrice(3);
        basketItem.setItem(itemDto);
        basketItem.setCount(count);
        basketDto.setItems(List.of(basketItem));
        return basketDto;
    }
}
