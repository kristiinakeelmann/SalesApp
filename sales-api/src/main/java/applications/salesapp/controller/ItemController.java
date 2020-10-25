package applications.salesapp.controller;

import applications.salesapp.model.Item;
import applications.salesapp.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class ItemController {

    ItemService itemService;

    @GetMapping("/api/items")
    private List<Item> getAllItems() {
        return itemService.getAllItems();
    }

}
