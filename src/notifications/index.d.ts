import { SweetAlertResult } from "sweetalert2";
export declare class Toast {
    private _defaults;
    error(text: string): Promise<SweetAlertResult>;
    success(text: string): Promise<SweetAlertResult>;
    info(text: string): Promise<SweetAlertResult>;
    warn(text: string): Promise<SweetAlertResult>;
}
export declare class Popup {
    private _defaults;
    error(title: string, text: string): Promise<SweetAlertResult>;
    success(title?: string, text?: string): Promise<SweetAlertResult>;
    info(title: string, text: string): Promise<SweetAlertResult>;
    confirmation(title: string): Promise<SweetAlertResult>;
}
