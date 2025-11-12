export interface CreateDepartmentData {
    name: string;
    head_id?: string;
    parent_department_id?: string;
}
export declare const getDepartmentsDropdown: (org_id: string) => Promise<{
    name: string;
    dep_id: string;
}[]>;
export declare const getAllDepartments: (org_id: string) => Promise<({
    _count: {
        employees: number;
    };
    parent_department: {
        name: string;
        dep_id: string;
    } | null;
    sub_departments: {
        name: string;
        dep_id: string;
    }[];
    head: {
        email: string;
        emp_id: string;
        first_name: string;
        last_name: string;
        designation: string | null;
    } | null;
} & {
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    dep_id: string;
    head_id: string | null;
    parent_department_id: string | null;
})[]>;
export interface UpdateDepartmentData {
    name?: string;
    head_id?: string;
    parent_department_id?: string;
}
export declare const updateDepartment: (dep_id: string, org_id: string, data: UpdateDepartmentData) => Promise<{
    organization: {
        name: string;
        email: string;
    };
    _count: {
        employees: number;
    };
    parent_department: {
        name: string;
        dep_id: string;
    } | null;
    sub_departments: {
        name: string;
        dep_id: string;
    }[];
    head: {
        email: string;
        emp_id: string;
        first_name: string;
        last_name: string;
        designation: string | null;
    } | null;
} & {
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    dep_id: string;
    head_id: string | null;
    parent_department_id: string | null;
}>;
export declare const createDepartment: (org_id: string, data: CreateDepartmentData) => Promise<{
    organization: {
        name: string;
        email: string;
    };
    parent_department: {
        name: string;
        dep_id: string;
    } | null;
    head: {
        email: string;
        emp_id: string;
        first_name: string;
        last_name: string;
    } | null;
} & {
    created_at: Date;
    update_at: Date;
    org_id: string;
    name: string;
    dep_id: string;
    head_id: string | null;
    parent_department_id: string | null;
}>;
export declare const deleteDepartment: (dep_id: string, org_id: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=department.service.d.ts.map