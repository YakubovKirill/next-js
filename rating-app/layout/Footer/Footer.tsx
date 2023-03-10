import { memo } from "react"
import { FooterProps } from "./Footer.props";
import { AppColor } from "../../styles/constants";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
    const style = [
        AppColor.PRIMARY_LIGTH_TEXT,
        AppColor.PRIMARY,
        "col-span-full",
        "px-6",
        "sm:px-4",
        "py-7",
        "sm:py-4",
        "grid",
        "grid-cols-footer",
        "gap-[40px]",
        "text-base",
        "sm:grid-cols-1",
        "sm:gap-[10px]",
        "tracking-normal"
    ].join(' ');
    return (
        <footer {...props} className={style}>
            <span>Footer label ALALA</span>
            <span>Footer label Second</span>
            <span>Footer label Third</span>
        </footer>
    )
}

export default memo(Footer);