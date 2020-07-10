package com.pizzaordering.service;

import com.pizzaordering.entity.Item;
import com.pizzaordering.entity.OrderItems;
import com.pizzaordering.entity.Orders;
import com.pizzaordering.model.OrderForm;
import com.pizzaordering.repository.ItemRepository;
import com.pizzaordering.repository.OrderItemsRepository;
import com.pizzaordering.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;

@Service
public class OrderServiceImpl implements OrderService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private OrderRepository orderRepository;
    private OrderItemsRepository orderItemsRepository;
    private ItemRepository itemRepository;

    public OrderServiceImpl(OrderRepository orderRepository, OrderItemsRepository orderItemsRepository, ItemRepository itemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
        this.itemRepository = itemRepository;
    }

    @Override
    public Orders placeOrder(OrderForm orderForm) {

        Orders orders = new Orders();
        orders.setCustomer(orderForm.getCustomer());
        orders.setOrderDate(new Date());
        orders.setPriceEuro(orderForm.getPriceEuro());
        orders.setPriceUsd(orderForm.getPriceUsd());

        orderRepository.save(orders);


        orderForm.getItemIdsAndQuantities().forEach((itemId, quantity) -> {
            OrderItems orderItems = new OrderItems();
            Item item = itemRepository.findById(itemId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Item  " + itemId + " does not exist"));
            orderItems.setItem(item);
            orderItems.setOrders(orders);
            orderItems.setQuantity(quantity);
            orderItems.setTotalPrice(item.getPrice() * quantity);
            orderItemsRepository.save(orderItems);
        });
        logger.info("Order has been made successfully");
        return orders;
    }
}
