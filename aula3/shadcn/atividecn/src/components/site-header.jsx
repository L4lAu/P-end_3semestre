"use client"

import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header
      className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
        <img
                    src={"https://logosmarcas.net/wp-content/uploads/2021/12/Zagato-Logo.png"} 
                    alt="logo"
                    
                    className="w-55 "
                  />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />


        {/* NAVIGATION MENU */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList className={"gap-7"}>



            <NavigationMenuItem>
                <NavigationMenuTrigger>voltar pagina inicial</NavigationMenuTrigger>
              <NavigationMenuContent>

                {/* ITENS MENU */}

                <div className="w-45 lg:w-85  gap-2">
                  <NavigationMenuLink href="dashboard">
                    <Button>pagina inicial</Button>
                  </NavigationMenuLink>
                </div>

              </NavigationMenuContent>
            </NavigationMenuItem>



            <NavigationMenuItem>
              <NavigationMenuTrigger>QUALQUER</NavigationMenuTrigger>
              <NavigationMenuContent>

                {/* ITENS MENU */}

                <div className=" w-45 lg:w-85 gap-2">
                  <NavigationMenuLink href="#">
                    <Button>item 1</Button>
                  </NavigationMenuLink>
                </div>

              </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuTrigger>QUALQUER</NavigationMenuTrigger>
              <NavigationMenuContent>

                {/* ITENS MENU */}

                <div className=" w-45 lg:w-85 gap-2 ">
                  <NavigationMenuLink href="#">
                    <Button>item 1</Button>
                  </NavigationMenuLink>
                </div>

              </NavigationMenuContent>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />

      </div>
    </header>
  );
}
