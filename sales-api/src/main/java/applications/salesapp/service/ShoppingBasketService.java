package applications.salesapp.service;

import applications.salesapp.SalesAppBadRequestException;
import applications.salesapp.model.BasketDto;
import applications.salesapp.model.Item;
import applications.salesapp.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ShoppingBasketService {

    ItemRepository itemRepository;

    public void completeCheckout(BasketDto basketDto) {
        List<BasketDto.BasketItem> basketItems = basketDto.getItems();
        log.info("Checking out: {}", basketItems);
        basketItems.forEach(basketItem -> {
            int count = basketItem.getCount();
            Item itemDb = itemRepository.findById(basketItem.getItem().getId());
            if (itemDb.getQuantity() >= count) {
                itemDb.setQuantity(itemDb.getQuantity() - count);
                itemRepository.save(itemDb);
                log.info("Sales completed: {}", itemDb);
            } else {
                throw new SalesAppBadRequestException("Not enough quantity");
            }
        });
    }
}