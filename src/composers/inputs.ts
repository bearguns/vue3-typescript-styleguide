import { computed } from "vue";

const props = {
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  helpMsg: {
    type: String,
    required: false,
  },
  errorMsg: {
    type: String,
    required: false,
  },
  successMsg: {
    type: String,
    required: false,
  },
  isValid: {
    type: Boolean,
    required: false,
  },
};

export const defaultProps = () => props;

export const classBindings = (props: any) => {
  return computed(() => {
    return {
      "is-danger": props.errorMsg,
      "is-success": props.isValid || props.successMsg,
    };
  });
};
