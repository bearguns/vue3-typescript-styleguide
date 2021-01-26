<template>
  <component :is="component"></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
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
} from "vue-feather-icons";

export default defineComponent({
  name: "AppIcon",
  components: {
    CheckSquareIcon,
    MapIcon,
    MapPinIcon,
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
  },
  props: {
    icon: {
      type: String,
      required: true,
      validator(value) {
        return [
          "check-square",
          "map",
          "map-pin",
          "globe",
          "loader",
          "phone",
          "message",
          "hash",
          "trash",
          "upload",
          "chevron-down",
          "chevron-up",
          "chevrons-left",
          "chevrons-right",
          "search",
          "arrow-down",
          "arrow-up",
          "download",
          "plus",
          "login",
          "dollar",
          "close",
          "power",
          "edit",
        ].includes(value);
      },
    },
    size: {
      type: String,
      required: false,
      default: "1x",
    },
  },
  computed: {
    component(): any {
      switch (this.icon) {
        case "check-square":
          return CheckSquareIcon;
        case "map":
          return MapIcon;
        case "map-pin":
          return MapPinIcon;
        case "globe":
          return GlobeIcon;
        case "loader":
          return LoaderIcon;
        case "phone":
          return PhoneIcon;
        case "message":
          return MessageSquareIcon;
        case "hash":
          return HashIcon;
        case "trash":
          return Trash2Icon;
        case "upload":
          return UploadIcon;
        case "chevron-down":
          return ChevronDownIcon;
        case "chevron-up":
          return ChevronUpIcon;
        case "chevrons-left":
          return ChevronsLeftIcon;
        case "chevrons-right":
          return ChevronsRightIcon;
        case "search":
          return SearchIcon;
        case "arrow-down":
          return ArrowDownIcon;
        case "arrow-up":
          return ArrowUpIcon;
        case "download":
          return DownloadIcon;
        case "plus":
          return PlusSquareIcon;
        case "close":
          return XIcon;
        case "dollar":
          return DollarSignIcon;
        case "login":
          return LogInIcon;
        case "power":
          return PowerIcon;
        case "edit":
          return EditIcon;
        default:
          return CheckSquareIcon;
      }
    },
  },
});
</script>
