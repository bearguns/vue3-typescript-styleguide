import { computed, PropType } from "vue";

export const errors = {
  blank: "This field cannot be blank.",
  emailInvalid: "Email address is not valid.",
  numeric: "Field must only contain numbers.",
  alpha: "Field must only contain letters.",
  exclude(exclude: string[]) {
    return `This field cannot contain these characters: ${exclude.join(",")}`;
  },
  includeStrict(include: string[]) {
    return `This field must include these character(s): ${include.join(",")}`;
  },
  include(include: string[]) {
    return `This field must include at least one of these characters: ${include.join(",")}`;
  },
  long(max: number) {
    return `Must be ${max} or fewer characters.`;
  },
  short(min: number) {
    return `Must be at least ${min} characters.`;
  },
};

export type Allow = "alpha" | "numeric" | "alphanumeric";

export type InputValue = string | number;

export interface Include {
  chars: string[];
  strict?: boolean;
}

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
  success: {
    type: Boolean,
    required: false,
  },
  allow: {
    type: String as PropType<Allow>,
    required: false,
    default: "alphanumeric",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  include: {
    type: Object as PropType<Include>,
    required: false,
  },
  exclude: {
    type: Array as PropType<string[]>,
    required: false,
  },
  min: {
    type: Number,
    required: false
  },
  max: {
    type: Number,
    required: false
  }
};

export const defaultProps = () => props;

export const classBindings = (props: any) => {
  return computed(() => {
    return {
      "is-danger": props.errorMsg,
      "is-success": props.success || props.successMsg,
    };
  });
};

export const validateRequired = (value: InputValue): boolean => !!value;

export const validateIncluded = (value: InputValue, include: Include): boolean => {
  const chars: string[] = value.toString().split("");
  if (include.strict) {
    return include.chars.every((char: string) => chars.includes(char));
  }
  return include.chars.some((char: string) => chars.includes(char));
};

export const validateExcluded = (value: InputValue, exclude: string[]): boolean => {
  return exclude.every((char: string) => value.toString().split("").includes(char) === false);
};
