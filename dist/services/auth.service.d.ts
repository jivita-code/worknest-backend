export interface OrganizationLoginData {
    email: string;
    password: string;
}
export interface AuthResponse {
    token: string;
    organization: {
        org_id: string;
        name: string;
        email: string;
        logo_url: string | undefined;
    };
    employee?: {
        emp_id: string;
        first_name: string;
        last_name: string;
        email: string;
    };
}
export declare const login: (data: OrganizationLoginData) => Promise<AuthResponse>;
//# sourceMappingURL=auth.service.d.ts.map