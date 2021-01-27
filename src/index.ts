import "./scss/main.scss";
import AppButton from "./components/AppButton.vue";
import AppCard from "./components/AppCard.vue";
import AppCheckbox from "./components/AppCheckbox.vue";
import AppDropdown from "./components/AppDropdown.vue";
import AppFileInput from "./components/AppFileInput.vue";
import AppIcon from "./components/AppIcon.vue";
import AppInput from "./components/AppInput.vue";
import AppLoader from "./components/AppLoader.vue";
import AppModal from "./components/AppModal.vue";
import AppPagination from "./components/AppPagination.vue";
import AppSearch from "./components/AppSearch.vue";
import AppSelect from "./components/AppSelect.vue";
import AppTable from "./components/AppTable.vue";
import AppTabs from "./components/AppTabs.vue";
import AppTitle from "./components/AppTitle.vue";
import { Toast as toast, Popup as popup} from "./notifications/index";

const Toast = new toast();
const Popup = new popup();

export {
  AppButton,
  AppCard,
  AppCheckbox,
  AppDropdown,
  AppFileInput,
  AppIcon,
  AppInput,
  AppLoader,
  AppModal,
  AppPagination,
  AppSearch,
  AppSelect,
  AppTable,
  AppTabs,
  AppTitle,
  Toast,
  Popup,
}
