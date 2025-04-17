import {ReactElement, ReactNode} from "react";

import AlertHeroui from "@/components/alert";
import NavbarHeroui from "@/components/navBar";
import ProgressHeroui from "@/components/progress";

type PageLayoutProps = {
 isLoading: boolean;
 error: string | null;
 title: string;
 children: ReactNode;
};

export const PageLayout = ({isLoading, error, title, children}: PageLayoutProps): ReactElement => {
 return (
  <>
   {isLoading && <ProgressHeroui/>}
   <main className="m-4">
    <NavbarHeroui/>
    <h1 className="text-[30px] font-bold mb-[20px]">{title}</h1>
    {error && <AlertHeroui title={error} color={"danger"}/>}
    {children}
   </main>
  </>
 );
};
