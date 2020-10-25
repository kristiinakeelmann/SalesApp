package applications.salesapp;

import applications.salesapp.model.Item;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ItemControllerTest extends CommonIntegrationTest {

    @Test
    void user_can_get_items_list() {
        List<Item> items = assertOk(getItems());
        assertTrue(items.size() > 0);
    }
}
