import { Category, Item } from "src/app/item/item.model";

    export interface Customer {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        phoneNo: string;
    }

    export interface Image {
        id: number;
        url: string;
    }

    export interface OrderItem {
        id: number;
        quantity: number;
        totalPrice: number;
        item: Item;
    }

    export interface OrderHistory {
        id: number;
        orderDate: Date;
        priceUsd: number;
        priceEuro: number;
        deliveryCost: number;
        customer: Customer;
        orderItems: OrderItem[];
    }

