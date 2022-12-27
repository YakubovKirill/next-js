import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: 'small' | 'medium' | 'large',
  children: ReactNode,
}