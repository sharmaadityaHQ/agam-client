import { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col w-[100vw] overflow-y-scroll overflow-x-hidden bg-black">
            {children}
        </div>
    );
}

export default PageContainer;
