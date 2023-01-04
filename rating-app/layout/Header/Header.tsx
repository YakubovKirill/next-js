import { memo } from "react"
import { HeaderProps } from "./Header.props";
import { AppColor } from "../../styles/constants";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
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
        <header {...props} className={style}>
            Header
        </header>
    )
}

export default memo(Header);