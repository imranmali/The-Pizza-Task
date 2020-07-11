package com.pizzaordering.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Orders extends Auditable<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    @NotNull
    @Column(columnDefinition = "float default 0")
    private float priceUsd;

    @NotNull
    @Column(columnDefinition = "float default 0")
    private float priceEuro;

    @Column(columnDefinition = "float default 0")
    private float deliveryCost;

    @OneToOne(cascade = {CascadeType.ALL})
    private Customer customer;

    @OneToMany(
            cascade = {CascadeType.ALL},
            mappedBy = "orders",
            fetch = FetchType.LAZY
    )
    private Set<OrderItems> orderItems = new HashSet<>();

    public Orders() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public float getPriceUsd() {
        return priceUsd;
    }

    public void setPriceUsd(float priceUsd) {
        this.priceUsd = priceUsd;
    }

    public float getPriceEuro() {
        return priceEuro;
    }

    public void setPriceEuro(float priceEuro) {
        this.priceEuro = priceEuro;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Set<OrderItems> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(Set<OrderItems> orderItems) {
        this.orderItems = orderItems;
    }

    public float getDeliveryCost() {
        return deliveryCost;
    }

    public void setDeliveryCost(float deliveryCost) {
        this.deliveryCost = deliveryCost;
    }
}
