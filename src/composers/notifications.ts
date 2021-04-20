import { v4 as uuid } from "uuid";
import { reactive, computed } from "vue";

type status = "success" | "info" | "warning" | "danger";

export interface Toast {
  status: status;
  text: string;
  id: string;
}

interface Popup {
  status: status;
  title: string;
  text: string;
  id: string;
  showConfirm: boolean;
}

export const toastMessages = reactive<Toast[]>([]);
export const popupMessage = reactive<Popup>({
  status: "success",
  text: "",
  title: "",
  id: "0",
  showConfirm: true,
});

function deregisterNotification(id: string) {
  toastMessages.splice(
    toastMessages.findIndex((msg: Toast) => msg.id === id),
    1
  );
}

export function deregisterPopup() {
  popupMessage.title = "";
  popupMessage.text = "";
}

const registerToast = (text: string, status: status, timeout: number = 5000) => {
  const id = uuid();
  const msg: Toast = {
    text,
    status,
    id,
  };
  toastMessages.push(msg);
  setTimeout(() => deregisterNotification(id), timeout);
};

const registerPopup = (title: string, status: status, text: string, showConfirm?: boolean, timeout: number = 0) => {
  const id = uuid();
  const msg: Popup = {
    title,
    status,
    text,
    id,
    showConfirm: showConfirm ? true : false,
  };
  Object.assign(popupMessage, msg);
  if (timeout) {
    setTimeout(() => deregisterPopup(), timeout);
  }
};

export const toast = {
  error(text: string) {
    registerToast(text, "danger");
  },
  success(text: string) {
    registerToast(text, "success");
  },
  info(text: string) {
    registerToast(text, "info");
  },
};

export const popup = {
  error(title: string, text: string, showConfirm?: boolean) {
    registerPopup(title, "danger", text, showConfirm);
  },
  success(title: string, text: string, showConfirm?: boolean) {
    registerPopup(title, "success", text, showConfirm);
  },
  info(title: string, text: string, showConfirm?: boolean) {
    registerPopup(title, "info", text, showConfirm);
  },
};
