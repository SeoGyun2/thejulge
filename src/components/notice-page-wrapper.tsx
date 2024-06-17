import { PropsWithChildren } from "react"

export const NoticePageWrapper= ({children}:PropsWithChildren) => {
    return (<div className="flex flex-wrap gap-[10px] flex flex-wrap gap-[10px] flex flex-wrap gap-[10px] flex flex-wrap gap-[10px]">
        {children}
        </div>)
}