import { FormControl } from "@angular/forms";

export interface Book {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    excerpt: string;
    publishDate: Date;
}

export interface BookAuthors {
    id: number;
    idBook: number;
    firstName: string;
    lastName: string;
}

export interface ITypedForm {
    title: FormControl<string | null>;
    publishDate: FormControl<Date | null>;
}