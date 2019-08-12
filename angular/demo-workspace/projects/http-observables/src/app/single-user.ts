export interface Data {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface SingleUserDto {
    data: Data;
}
