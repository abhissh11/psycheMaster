import { ObjectId } from "mongodb";
export interface User {
    _id?: ObjectId;
    email: string;
    password: string;
    createdAt: Date;
}


export interface Team {
    _id?: ObjectId;
    name: string;
    designation: string;
    createdAt: Date;
}
export interface Testimonials {
    _id?: ObjectId;
    name: string;
    testimonials: string;
    createdAt: Date;
}