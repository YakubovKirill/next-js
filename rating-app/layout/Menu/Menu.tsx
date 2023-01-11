import { memo, useContext } from "react"
import { AppColor } from "../../styles/constants";
import { AppContext } from "../../context";

interface FirstLevelMenuItem {
    route: string,
    name: string,
    id: any,
}

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', id: 0 },
    { route: 'services', name: 'Сервисы', id: 1 },
    { route: 'books', name: 'Книги', id: 2 },
    { route: 'products', name: 'Продукты', id: 3 },
]

const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    const buildFirstLevel = () => {
        return (
            <>
            { firstLevelMenu.map((menuLevel) => (
                <div key={menuLevel.route}>
                    <a href={`/${menuLevel.route}`}><span>{menuLevel.name}</span></a>
                    {buildSecondLevel(menuLevel)}
                </div>
            ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return(
            <div style={{ marginLeft: 10 }}>
                { menu.map((element) => (
                    <div key={element._id.secondCategory}>
                        <div>{element._id.secondCategory}</div>
                        {buildThirdLevel(element.pages, menuItem.route)}
                    </div>
                ))}
            </div>
        )
    }

    const buildThirdLevel = (pages: any[], route: string) => {
        return(
            <div style={{ marginLeft: 20 }}>
                {pages.map((page) => (
                    <div key={page.alias}>
                        <a href={`/${route}/${page.alias}`}>{page.category}</a>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div style={{ padding: 10 }}>
            {buildFirstLevel()}
        </div>
    )
}

export default memo(Menu);