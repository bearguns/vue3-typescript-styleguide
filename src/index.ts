import "./scss/main.scss";
import TxNavbar from "./components/TxNavbar.vue";
import TxSidebar from "./components/TxSidebar.vue";
import TxSidebarLink from "./components/TxSidebarLink.vue";
import TxButton from "./components/TxButton.vue";
import TxCard from "./components/TxCard.vue";
import TxCheckbox from "./components/TxCheckbox.vue";
import TxDropdown from "./components/TxDropdown.vue";
import TxFile from "./components/TxFile.vue";
import TxIcon from "./components/TxIcon.vue";
import TxInput from "./components/TxInput.vue";
import TxLoader from "./components/TxLoader.vue";
import TxModal from "./components/TxModal.vue";
import TxPagination from "./components/TxPagination.vue";
import TxSearch from "./components/TxSearch.vue";
import TxSelect from "./components/TxSelect.vue";
import TxTable from "./components/TxTable.vue";
import TxTabs from "./components/TxTabs.vue";
import TxTitle from "./components/TxTitle.vue";
import { Toast as toast, Popup as popup} from "./notifications/index";
import registerIcons from "./icons";

const Toast = new toast();
const Popup = new popup();

export {
  TxSidebar,
  TxSidebarLink,
  TxNavbar,
  TxButton,
  TxCard,
  TxCheckbox,
  TxDropdown,
  TxFile,
  TxIcon,
  TxInput,
  TxLoader,
  TxModal,
  TxPagination,
  TxSearch,
  TxSelect,
  TxTable,
  TxTabs,
  TxTitle,
  Toast,
  Popup,
  registerIcons
}
