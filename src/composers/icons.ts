import { PropType, computed } from "vue";

export type IconSize = "1x" | "1.5x" | "2x" | "3x" | "4x";

export type IconColor = "white" | "black" | "primary" | "success" | "info" | "danger";

export type IconDirection = "up" | "down" | "left" | "right";

interface SizeProp {
  type: PropType<IconSize>;
  required?: boolean;
  default: string
}

interface ColorProp {
  type: PropType<IconColor>;
  required?: boolean;
  default: string;
}

interface DirectionProp {
  type: PropType<IconDirection>;
  required?: boolean;
  default: string;
}

interface IconProps {
  size?: SizeProp;
  color?: ColorProp;
  direction?: DirectionProp;
}

export const defaultProps = (): IconProps => {
  return {
    size: {
      type: String as PropType<IconSize>,
      required: false,
      default: "1.5x"
    },
    color: {
      type: String as PropType<IconColor>,
      required: false,
      default: "black"
    },
    direction: {
      type: String as PropType<IconDirection>,
      required: false,
      default: ""
    }
  }
}

export const iconColor = (props: IconProps) => {
  return computed(() => {
    return [`has-text-${props.color}`];
  })
}
