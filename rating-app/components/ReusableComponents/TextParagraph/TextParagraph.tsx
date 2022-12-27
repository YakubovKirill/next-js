import { memo } from "react"
import { TextProps } from "./TextParagraph.props";

const TextParagraph = ({ variant = "medium", children, ...props }: TextProps): JSX.Element => {
  const styleClasses = [`text-${variant}`];
  return (
    <p className={ styleClasses.join(' ') } {...props}>{ children }</p>
  )
}

export default memo( TextParagraph );