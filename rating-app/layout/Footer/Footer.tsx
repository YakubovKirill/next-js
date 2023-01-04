import { memo } from "react"
import { FooterProps } from "./Footer.props";
import { AppColor } from "../../styles/constants";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
    const style = [
        AppColor.PRIMARY,
        "text-slate-100",
        "col-span-full",
        "px-5",
        "sm:px-3",
        "py-6",
        "sm:py-3",
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