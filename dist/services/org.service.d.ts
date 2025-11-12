export declare const getOrganizationById: (org_id: string) => Promise<{
    sub_id: string | null;
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    industry: string | null;
    registration_no: string | null;
    address: string | null;
    email: string;
    phone: string | null;
    logo_url: string | null;
} | null>;
export declare const updateOrganization: (org_id: string, data: {
    name?: string;
    industry?: string;
    registration_no?: string;
    address?: string;
    phone?: string;
    logo_url?: string;
}) => Promise<{
    sub_id: string | null;
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    industry: string | null;
    registration_no: string | null;
    address: string | null;
    email: string;
    phone: string | null;
    logo_url: string | null;
}>;
export declare const updateOrganizationPassword: (org_id: string, currentPassword: string, newPassword: string) => Promise<{
    update_at: Date;
    org_id: string;
    name: string;
    email: string;
}>;
export declare const registerOrganizationWithTrial: (data: {
    name: string;
    email: string;
    password: string;
}) => Promise<{
    sub_id: string | null;
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    industry: string | null;
    registration_no: string | null;
    address: string | null;
    email: string;
    phone: string | null;
    logo_url: string | null;
}>;
//# sourceMappingURL=org.service.d.ts.map