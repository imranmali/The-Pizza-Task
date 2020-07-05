package com.pizzaordering.controller;

import com.pizzaordering.exception.ResourceNotFoundException;
import com.pizzaordering.model.Item;
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
@RequestMapping("${basePath}/v1")
public class ItemController {
	@Autowired
	private ItemRepository itemRepository;

	@GetMapping("/items")
	public List<Item> getItems() {
		return itemRepository.findAll();
	}

	@GetMapping("/item/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable(value = "id") Long itemId)
			throws ResourceNotFoundException {
		Item item = itemRepository.findById(itemId)
				.orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + itemId));
		return ResponseEntity.ok().body(item);
	}

	@PostMapping("/item")
	public Item createItem(@Valid @RequestBody Item item) {

		return itemRepository.save(item);
	}

	@PutMapping("/item/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long itemId,
			@Valid @RequestBody Item itemDetails) throws ResourceNotFoundException {
		Item item = itemRepository.findById(itemId)
				.orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + itemId));

		item.setDescription(itemDetails.getDescription());
		item.setPrice(itemDetails.getPrice());
		item.setTitle(itemDetails.getTitle());
		final Item updatedItem = itemRepository.save(item);
		return ResponseEntity.ok(updatedItem);
	}

	@DeleteMapping("/item/{id}")
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
