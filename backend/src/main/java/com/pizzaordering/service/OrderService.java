package com.pizzaordering.service;

import com.pizzaordering.entity.Orders;
import com.pizzaordering.model.OrderForm;

public interface OrderService {

    public Orders placeOrder(OrderForm orderForm);


}
