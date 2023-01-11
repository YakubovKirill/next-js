import { memo, useContext } from "react"
import { AppColor } from "../../styles/constants";
import { AppContext } from "../../context";

interface FirstLevelMenuItem {
    route: string,
    name: string,
    id: any,
}

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', id: 1 },
    { route: 'services', name: 'Сервисы', id: 2 },
    { route: 'courses', name: 'Курсы', id: 3 },
    { route: 'courses', name: 'Курсы', id: 4 },
]

const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    return (
        <div>
            {menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </div>
    )
}

export default memo(Menu);