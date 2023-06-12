type Primitive = string | number | boolean | null | undefined;

export type DataType = { [key: string]: Primitive | Primitive[] | { [key: string]: Primitive } }[];

export type ApiResponse<T> = {
    ok: boolean;
    error: string;
    data: T;
};

export type Status = {
    internal_database_connected: boolean;
    owner_exists: boolean;
};

export type UserFormFields = {
    email: string;
    role: string;
    id?: string;
};

export type Role = {
    name: string;
    permissions: string[];
};

export type User = UserFormFields & {
    id: string;
    time_joined: number;
};

export type SqlCommand = "select" | "insert" | "update" | "delete";

export type ChangeStatus = "approved" | "open";

export type ChangeFormFields = {
    id?: string;
    sql?: string;
    status?: ChangeStatus;
    tables?: string[];
    title?: string;
};

export type Change = Required<ChangeFormFields> & {
    created_at: number;
    created_by: User;
    deleted_at: number;
    deleted_by?: User;
    updated_at: number;
    updated_by: User;
    type: SqlCommand;
};
