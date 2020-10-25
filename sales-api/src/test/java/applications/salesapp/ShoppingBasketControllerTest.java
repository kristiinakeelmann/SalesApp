package applications.salesapp;

import applications.salesapp.model.BasketDto;
import applications.salesapp.repository.ItemRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;

public class ShoppingBasketControllerTest extends CommonIntegrationTest{

    @MockBean
    private ItemRepository itemRepository;

    @Test
    void user_can_complete_shopping_basket() {
        Mockito.when(itemRepository.findById(1)).thenReturn(TestUtil.getItem(3));

        BasketDto basketDto = TestUtil.getBasketDto(2);
        assertHttpOk(postShoppingBasket(basketDto));
    }

    @Test
    void user_can_not_complete_shopping_basket_if_quantity_lacking() {
        Mockito.when(itemRepository.findById(1)).thenReturn(TestUtil.getItem(1));

        BasketDto basketDto = TestUtil.getBasketDto(2);
        assertHttpBadRequest(postShoppingBasket(basketDto));
    }
}
