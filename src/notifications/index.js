import Swal from "sweetalert2";
export class Toast {
    constructor() {
        this._defaults = {
            position: "bottom-end",
            backdrop: false,
            timerProgressBar: true,
            timer: 10000,
            toast: true,
        };
    }
    async error(text) {
        return await Swal.fire({
            ...this._defaults,
            timer: 20000,
            customClass: {
                popup: "toast-container toast-container--danger"
            },
            text
        });
    }
    async success(text) {
        return await Swal.fire({
            ...this._defaults,
            customClass: {
                popup: "toast-container toast-container--success"
            },
            text
        });
    }
    async info(text) {
        return await Swal.fire({
            ...this._defaults,
            customClass: {
                popup: "toast-container toast-container--info",
            },
            text
        });
    }
    async warn(text) {
        return await Swal.fire({
            ...this._defaults,
            customClass: {
                popup: "toast-container toast-container--warning",
            },
            text
        });
    }
}
export class Popup {
    constructor() {
        this._defaults = {
            timer: 10000,
            position: "bottom-end",
            timerProgressBar: true,
            backdrop: false,
            customClass: {
                confirmButton: "button is-primary"
            }
        };
    }
    async error(title, text) {
        return await Swal.fire({
            ...this._defaults,
            timer: 20000,
            icon: "error",
            title,
            text
        });
    }
    async success(title = "Success!", text = "") {
        return await Swal.fire({
            ...this._defaults,
            icon: "success",
            title,
            text
        });
    }
    async info(title, text) {
        return await Swal.fire({
            ...this._defaults,
            icon: "info",
            timer: 5000,
            title,
            text
        });
    }
    async confirmation(title) {
        return await Swal.fire({
            ...this._defaults,
            timer: 0,
            backdrop: true,
            position: "center",
            icon: "error",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            title
        });
    }
}
//# sourceMappingURL=index.js.map