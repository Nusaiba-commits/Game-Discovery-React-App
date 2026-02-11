import { ReactNode } from "react";

declare module "@chakra-ui/react" {
  interface MenuTriggerProps {
    children?: ReactNode;
  }
  interface MenuPositionerProps {
    children?: ReactNode;
  }
  interface MenuContentProps {
    children?: ReactNode;
  }
  interface MenuItemProps {
    children?: ReactNode;
    onClick?: () => void;
    value?: string;
    key?: number;
    fontWeight?: string;
  }
}
