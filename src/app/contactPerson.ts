export interface IContactPerson {
    id: number;
    deliveryFlag: boolean;
    type?: {
        code: number;
        value: string;
    }
    name: string;
    phoneNumber?: number;
    email: string;
    address: string;
}