import * as departmentService from "../services/department.service";
export const getDepartmentsDropdown = async (req, res, next) => {
    try {
        const { org_id } = req.user;
        if (!org_id) {
            return res.status(400).json({ error: "Organization ID not found in token" });
        }
        const departments = await departmentService.getDepartmentsDropdown(org_id);
        res.status(200).json({
            departments,
            message: "Departments retrieved successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
export const getAllDepartments = async (req, res, next) => {
    try {
        const { org_id } = req.user;
        if (!org_id) {
            return res.status(400).json({ error: "Organization ID not found in token" });
        }
        const departments = await departmentService.getAllDepartments(org_id);
        res.status(200).json({
            departments,
            message: "Departments retrieved successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
export const updateDepartment = async (req, res, next) => {
    try {
        const { org_id } = req.user;
        const { dep_id } = req.params;
        if (!org_id) {
            return res.status(400).json({ error: "Organization ID not found in token" });
        }
        if (!dep_id) {
            return res.status(400).json({ error: "Department ID is required" });
        }
        const { name, head_id, parent_department_id } = req.body;
        // Validate that at least one field is provided
        if (name === undefined && head_id === undefined && parent_department_id === undefined) {
            return res.status(400).json({
                error: "At least one field (name, head_id, or parent_department_id) must be provided for update"
            });
        }
        // Validate name if provided
        if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
            return res.status(400).json({
                error: "Department name must be a non-empty string"
            });
        }
        // Validate head_id if provided
        if (head_id !== undefined && typeof head_id !== 'string') {
            return res.status(400).json({
                error: "Head ID must be a string"
            });
        }
        // Validate parent_department_id if provided
        if (parent_department_id !== undefined && typeof parent_department_id !== 'string') {
            return res.status(400).json({
                error: "Parent department ID must be a string"
            });
        }
        const department = await departmentService.updateDepartment(dep_id, org_id, {
            name: name?.trim(),
            head_id,
            parent_department_id,
        });
        res.status(200).json({
            department,
            message: "Department updated successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
export const deleteDepartment = async (req, res, next) => {
    try {
        const { org_id } = req.user;
        const { dep_id } = req.params;
        if (!org_id) {
            return res.status(400).json({ error: "Organization ID not found in token" });
        }
        if (!dep_id) {
            return res.status(400).json({ error: "Department ID is required" });
        }
        const result = await departmentService.deleteDepartment(dep_id, org_id);
        res.status(200).json(result);
    }
    catch (err) {
        next(err);
    }
};
export const createDepartment = async (req, res, next) => {
    try {
        const { org_id } = req.user;
        if (!org_id) {
            return res.status(400).json({ error: "Organization ID not found in token" });
        }
        const { name, head_id, parent_department_id } = req.body;
        // Validate required fields
        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({
                error: "Department name is required and must be a non-empty string"
            });
        }
        // Validate optional fields
        if (head_id && typeof head_id !== 'string') {
            return res.status(400).json({
                error: "Head ID must be a string"
            });
        }
        if (parent_department_id && typeof parent_department_id !== 'string') {
            return res.status(400).json({
                error: "Parent department ID must be a string"
            });
        }
        const department = await departmentService.createDepartment(org_id, {
            name: name.trim(),
            head_id,
            parent_department_id,
        });
        res.status(201).json({
            department,
            message: "Department created successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
