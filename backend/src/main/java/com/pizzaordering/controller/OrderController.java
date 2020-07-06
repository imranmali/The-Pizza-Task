package com.pizzaordering.controller;

import com.pizzaordering.exception.ResourceNotFoundException;
import com.pizzaordering.entity.Orders;
import com.pizzaordering.model.OrderForm;
import com.pizzaordering.repository.OrderRepository;
import com.pizzaordering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("${basePath}/v1/order")
public class OrderController {

	@Autowired
	private OrderRepository orderRepository;

	private OrderService orderService;

	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}

	@GetMapping("/all")
	public List<Orders> getOrders() {
		return orderRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Orders> getOrderById(@PathVariable(value = "id") Long orderId)
			throws ResourceNotFoundException {
		Orders orders = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Orders not found for this id :: " + orderId));
		return ResponseEntity.ok().body(orders);
	}

	@PostMapping("/")
	public ResponseEntity createOrder(@Valid @RequestBody OrderForm orderForm) {

		orderService.placeOrder(orderForm);

		return new ResponseEntity(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") Long orderId)
			throws ResourceNotFoundException {
		Orders orders = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Orders not found for this id :: " + orderId));

		orderRepository.delete(orders);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
