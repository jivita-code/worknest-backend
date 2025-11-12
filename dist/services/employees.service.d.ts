export declare const getEmployeesDropdown: (org_id: string) => Promise<{
    emp_id: string;
    employee_number: string;
    first_name: string;
    last_name: string;
}[]>;
export declare const getAllEmployees: (org_id: string) => Promise<({
    organization: {
        name: string;
        email: string;
    };
    _count: {
        attendances: number;
        leave_requests: number;
        petty_cash_requests: number;
    };
    department: {
        name: string;
        dep_id: string;
    } | null;
    headed_department: {
        name: string;
        dep_id: string;
    } | null;
} & {
    status: string;
    created_at: Date;
    update_at: Date;
    org_id: string;
    email: string;
    password: string;
    phone: string | null;
    emp_id: string;
    dep_id: string | null;
    employee_number: string;
    first_name: string;
    last_name: string;
    profile_photo_url: string | null;
    designation: string | null;
    employment_type: string;
    join_date: Date | null;
    resign_date: Date | null;
})[]>;
export declare const createEmployee: (org_id: string, data: {
    employee_number: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone?: string;
    designation?: string;
    employment_type: string;
    join_date?: Date;
    dep_id?: string;
}) => Promise<{
    status: string;
    created_at: Date;
    update_at: Date;
    email: string;
    phone: string | null;
    department: {
        name: string;
        dep_id: string;
    } | null;
    emp_id: string;
    employee_number: string;
    first_name: string;
    last_name: string;
    designation: string | null;
    employment_type: string;
    join_date: Date | null;
}>;
export interface UpdateEmployeeData {
    employee_number?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    phone?: string;
    designation?: string;
    employment_type?: string;
    join_date?: Date;
    status?: string;
    dep_id?: string;
}
export declare const updateEmployee: (emp_id: string, org_id: string, data: UpdateEmployeeData) => Promise<{
    status: string;
    created_at: Date;
    update_at: Date;
    organization: {
        name: string;
        email: string;
    };
    email: string;
    phone: string | null;
    department: {
        name: string;
        dep_id: string;
    } | null;
    emp_id: string;
    employee_number: string;
    first_name: string;
    last_name: string;
    designation: string | null;
    employment_type: string;
    join_date: Date | null;
    resign_date: Date | null;
    headed_department: {
        name: string;
        dep_id: string;
    } | null;
}>;
export declare const deleteEmployee: (emp_id: string, org_id: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=employees.service.d.ts.map