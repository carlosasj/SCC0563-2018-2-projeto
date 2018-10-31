export interface CredentialsUserResponse {
    createdAt: number;
    updatedAt: number;
    id: number;
    email: string;
    isAdmin: boolean;
}
export interface CredentialsResponse {
    user: CredentialsUserResponse;
    token: string;
}
