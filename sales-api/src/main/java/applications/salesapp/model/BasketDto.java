package applications.salesapp.model;

import lombok.Data;

import java.util.List;

@Data
public class BasketDto {

    private List<BasketItem> items;

    @Data
    public static class BasketItem {
        private ItemDto item;
        private int count;
    }

    @Data
    public static class ItemDto {
        private int id;
        private String name;
        private int price;
    }


}