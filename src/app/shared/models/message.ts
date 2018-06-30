
export class message{
    user: string;
    content: string;
    sentBy:string;
    tab?: {
        title: string;
        lien: string;
        prix: number;
        adresse: string;
    }[]
    avatar: string;
    date: string;
}