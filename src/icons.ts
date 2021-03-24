import {
  HomeIcon,
  CheckSquareIcon,
  MapPinIcon,
  MapIcon,
  GlobeIcon,
  LoaderIcon,
  PhoneIcon,
  MessageSquareIcon,
  HashIcon,
  Trash2Icon,
  UploadIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  SearchIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DownloadIcon,
  PlusSquareIcon,
  LogInIcon,
  DollarSignIcon,
  XIcon,
  PowerIcon,
  EditIcon,
  CommandIcon,
  ActivityIcon,
  CreditCardIcon,
  MenuIcon,
  PieChartIcon,
  TagIcon,
  ServerIcon,
  UserIcon,
  UsersIcon,
  BriefcaseIcon,
  LockIcon,
  DropletIcon
} from "@zhuowenli/vue-feather-icons";

const icons = {
  "HomeIcon": HomeIcon,
  "CheckSquareIcon": CheckSquareIcon,
  "MapPinIcon": MapPinIcon,
  "MapIcon": MapIcon,
  "GlobeIcon": GlobeIcon,
  "LoaderIcon": LoaderIcon,
  "PhoneIcon": PhoneIcon,
  "MessageSquareIcon": MessageSquareIcon,
  "HashIcon": HashIcon,
  "Trash2Icon": Trash2Icon,
  "UploadIcon": UploadIcon,
  "ChevronDownIcon": ChevronDownIcon,
  "ChevronUpIcon": ChevronUpIcon,
  "ChevronsLeftIcon": ChevronsLeftIcon,
  "ChevronsRightIcon": ChevronsRightIcon,
  "SearchIcon": SearchIcon,
  "ArrowDownIcon": ArrowDownIcon,
  "ArrowUpIcon": ArrowUpIcon,
  "DownloadIcon": DownloadIcon,
  "PlusSquareIcon": PlusSquareIcon,
  "LogInIcon": LogInIcon,
  "DollarSignIcon": DollarSignIcon,
  "XIcon": XIcon,
  "PowerIcon": PowerIcon,
  "EditIcon": EditIcon,
  "CommandIcon": CommandIcon,
  "ActivityIcon": ActivityIcon,
  "CreditCardIcon": CreditCardIcon,
  "MenuIcon": MenuIcon,
  "PieChartIcon": PieChartIcon,
  "TagIcon": TagIcon,
  "ServerIcon": ServerIcon,
  "UserIcon": UserIcon,
  "UsersIcon": UsersIcon,
  "BriefcaseIcon": BriefcaseIcon,
  "LockIcon": LockIcon,
  "DropletIcon": DropletIcon
};

export default function registerIcons(app: any): void {
  Object.entries(icons).forEach(([key, value]) => app.component(key, value));
}
