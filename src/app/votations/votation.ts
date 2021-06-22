export interface Votation {
    id: number;
    user_id: number;
    tag_id: number;
    title: string;
    content: string;
    creation_date: Date;
    closing_date: Date;
}

export interface Tag {
    id: number;
    value: string;
}