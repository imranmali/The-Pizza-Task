package com.pizzaordering.model;

import com.pizzaordering.entity.Customer;

import java.util.Map;

public class OrderForm {

    private Map<Long, Integer> itemIdsAndQuantities;
    private Customer customer;
    private float priceEuro;
    private float priceUsd;
    private float deliveryCost;

    public Map<Long, Integer> getItemIdsAndQuantities() {
        return itemIdsAndQuantities;
    }

    public void setItemIdsAndQuantities(Map<Long, Integer> itemIdsAndQuantities) {
        this.itemIdsAndQuantities = itemIdsAndQuantities;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public float getPriceEuro() {
        return priceEuro;
    }

    public void setPriceEuro(float priceEuro) {
        this.priceEuro = priceEuro;
    }

    public float getPriceUsd() {
        return priceUsd;
    }

    public void setPriceUsd(float priceUsd) {
        this.priceUsd = priceUsd;
    }

    public float getDeliveryCost() {
        return deliveryCost;
    }

    public void setDeliveryCost(float deliveryCost) {
        this.deliveryCost = deliveryCost;
    }
}
