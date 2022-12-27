import { memo } from "react"
import { HtagProps } from "./Htag.props";

const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1": return <h1 className="font-bold tracking-small text-xl">{ children }</h1>;
        case "h2": return <h2 className="font-semibold tracking-small text-lgg">{ children }</h2>;
        case "h3": return <h3 className="font-semibold tracking-medium text-lg">{ children }</h3>;
        default: return <></>
    }
}

export default memo(Htag);