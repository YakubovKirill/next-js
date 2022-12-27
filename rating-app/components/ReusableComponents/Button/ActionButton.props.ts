import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ActionButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  label: string | number,
  variant: 'simple' | 'outline',
  children?: ReactNode
}