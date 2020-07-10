
    export interface Customer {
        address: string;
        email: string;
        firstName: string;
        id: number;
        lastName: string;
        phoneNo: string;
    }

    export interface CheckoutModel {
        customer: Customer;
        priceEuro: number;
        priceUsd: number;
        itemIdsAndQuantities:any
    }