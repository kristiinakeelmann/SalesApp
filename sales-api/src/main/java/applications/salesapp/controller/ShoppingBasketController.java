package applications.salesapp.controller;

import applications.salesapp.model.BasketDto;
import applications.salesapp.service.ShoppingBasketService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ShoppingBasketController {

    ShoppingBasketService shoppingBasketService;

    @PostMapping("/api/checkout")
    public void completeCheckout(@RequestBody BasketDto basketDto) {
        shoppingBasketService.completeCheckout(basketDto);
    }
}
