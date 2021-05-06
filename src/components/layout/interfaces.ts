export interface RouterLinkProps {
  name: string;
  params?: any;
}

export type LinkTo = string | RouterLinkProps;
