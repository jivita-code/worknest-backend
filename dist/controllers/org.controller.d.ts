import { Request, Response, NextFunction } from "express";
export declare const registerOrganization: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getOrganizationProfile: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateOrganization: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateOrganizationPassword: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=org.controller.d.ts.map