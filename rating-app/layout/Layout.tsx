import { memo } from "react"
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="grid grid-cols-layout min-h-screen grid-rows-layout sm:grid-cols-1">
            <Header className="col-span-full" />
            <Sidebar className="sm:hidden" />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T> ) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
