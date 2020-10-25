package applications.salesapp;

import applications.salesapp.model.BasketDto;
import applications.salesapp.model.Item;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.annotation.Resource;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public abstract class CommonIntegrationTest {

    @Resource
    TestRestTemplate testRestTemplate;

    public static final String ITEMS_URL = "/api/items";
    public static final String CHECKOUT_URL = "/api/checkout";
    private static final ParameterizedTypeReference<List<Item>> LIST_OF_ITEMS = new ParameterizedTypeReference<>() {
    };

    public ResponseEntity<List<Item>> getItems() {
        return testRestTemplate.exchange(ITEMS_URL, HttpMethod.GET, null, LIST_OF_ITEMS);
    }

    public ResponseEntity<BasketDto> postShoppingBasket(BasketDto basketDto) {
        return testRestTemplate.postForEntity(CHECKOUT_URL, new HttpEntity<>(basketDto), BasketDto.class);
    }

    public <T> T assertOk(ResponseEntity<T> responseEntity) {
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
        return responseEntity.getBody();
    }

    public void assertHttpOk(ResponseEntity responseEntity) {
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    public void assertHttpBadRequest(ResponseEntity responseEntity) {
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

}
