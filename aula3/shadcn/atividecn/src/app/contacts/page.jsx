import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Contact02Page from "@/components/contact-02/contact-02"
import Footer05Page from "@/components/footer-05/footer-05"


export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
          <Contact02Page/>
      <Footer05Page/>
      
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
