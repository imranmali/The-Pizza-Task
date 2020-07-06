package com.pizzaordering.controller;

import com.pizzaordering.entity.Image;
import com.pizzaordering.entity.Item;
import com.pizzaordering.exception.ResourceNotFoundException;
import com.pizzaordering.repository.CategoryRepository;
import com.pizzaordering.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("${basePath}/v1/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/")
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable(value = "id") Long itemId)
            throws ResourceNotFoundException {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + itemId));
        return ResponseEntity.ok().body(item);
    }

    @PostMapping("/")
    public Item createItem(@Valid @RequestBody Item item) throws ResourceNotFoundException {

        for (Image image : item.getImages()) {
            image.setItem(item);
        }
        item.setCategory(categoryRepository.findById(item.getCategory().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id : " + item.getCategory().getId())));

        return itemRepository.save(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long itemId,
                                           @Valid @RequestBody Item itemDetails) throws ResourceNotFoundException {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + itemId));

        item.setDescription(itemDetails.getDescription());
        item.setPrice(itemDetails.getPrice());
        item.setTitle(itemDetails.getTitle());

        item.setCategory(categoryRepository.findById(itemDetails.getCategory().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id : " + itemDetails.getCategory().getId())));

        item.getImages().clear();

        item.getImages().addAll(itemDetails.getImages());

        for (Image image : item.getImages()) {
            image.setItem(item);
        }

        final Item updatedItem = itemRepository.save(item);
        return ResponseEntity.ok(updatedItem);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteItem(@PathVariable(value = "id") Long itemId)
            throws ResourceNotFoundException {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + itemId));

        itemRepository.delete(item);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
