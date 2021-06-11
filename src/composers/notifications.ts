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
}

export const toastMessages = reactive<Toast[]>([]);
export const popupMessage = reactive<Popup>({
  status: "success",
  text: "",
  title: "",
  id: "0",
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

const registerToast = (text: string, status: status, timeout: number) => {
  const id = uuid();
  const msg: Toast = {
    text,
    status,
    id,
  };
  toastMessages.push(msg);
  setTimeout(() => deregisterNotification(id), timeout);
};

const registerPopup = (title: string, status: status, text: string) => {
  const id = uuid();
  const msg: Popup = {
    title,
    status,
    text,
    id,
  };
  Object.assign(popupMessage, msg);
};

export const toast = {
  error(text: string, timeout: number = 5000) {
    registerToast(text, "danger", timeout);
  },
  success(text: string, timeout: number = 5000) {
    registerToast(text, "success", timeout);
  },
  info(text: string, timeout: number = 5000) {
    registerToast(text, "info", timeout);
  },
};

export const popup = {
  error(title: string, text: string) {
    registerPopup(title, "danger", text);
  },
  success(title: string, text: string) {
    registerPopup(title, "success", text);
  },
  info(title: string, text: string) {
    registerPopup(title, "info", text);
  },
};
