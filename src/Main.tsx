import React from "react";
import { Header} from "./components";
interface Children{
    children:JSX.Element | JSX.Element[]
}
const Main = ({children}:Children)=>{
    return(
        <>
            <Header/>
            <div className="content-wrapper">
                <div className="pt-3">
                    <section>
                        {children}
                    </section>
                </div>
            </div>

        </>
    )
}

export {Main};