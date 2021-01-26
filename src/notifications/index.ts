import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";

export class Toast {
  private _defaults: SweetAlertOptions = {
    position: "bottom-end",
    backdrop: false,
    timerProgressBar: true,
    timer: 10000,
    toast: true,
  }

  public async error(text: string): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      timer: 20000,
      customClass: {
        popup: "toast-container toast-container--danger"
      },
      text
    });
  }

  public async success(text: string): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      customClass: {
        popup: "toast-container toast-container--success"
      },
      text
    });
  }

  public async info(text: string): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      customClass: {
        popup: "toast-container toast-container--info",
      },
      text
    });
  }

  public async warn(text: string): Promise<SweetAlertResult> {
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
  private _defaults: SweetAlertOptions = {
    timer: 10000,
    position: "bottom-end",
    timerProgressBar: true,
    backdrop: false,
    customClass: {
      confirmButton: "button is-primary"
    }
  };

  public async error(title: string, text: string): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      timer: 20000,
      icon: "error",
      title,
      text
    });
  }

  public async success(title = "Success!", text = ""): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      icon: "success",
      title,
      text
    });
  }

  public async info(title: string, text: string): Promise<SweetAlertResult> {
    return await Swal.fire({
      ...this._defaults,
      icon: "info",
      timer: 5000,
      title,
      text
    });
  }

  public async confirmation(title: string): Promise<SweetAlertResult> {
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
