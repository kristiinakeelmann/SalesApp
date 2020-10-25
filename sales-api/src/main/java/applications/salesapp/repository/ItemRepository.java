package applications.salesapp.repository;

import applications.salesapp.model.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Integer> {

    Item findById(int id);

    List<Item> findAll();

}
