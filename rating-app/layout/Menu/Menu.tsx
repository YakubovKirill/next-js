import { memo, useContext } from "react"
import { AppColor } from "../../styles/constants";
import { AppContext } from "../../context";

const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    return (
        <div>
            {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </div>
    )
}

export default memo(Menu);