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
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <NavigationMenu viewport={false}>
        <title>rolets da sorte do lalau, se errar morre eeeeeeeeeeeehhhhhh</title>
        <NavigationMenuList>
          <NavigationMenuItem className="flex justify-center items-center">


            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>

            <NavigationMenuContent>
              <NavigationMenuLink href="/dashboard">
                <ul>
                  <li>
                    <Button> lalau</Button>
                  </li>
                </ul>
              </NavigationMenuLink>
              <NavigationMenuLink href="morreu">
                <ul>
                  <li>
                    <Button> lalau</Button>
                  </li>
                </ul>
              </NavigationMenuLink>
              <NavigationMenuLink href="/morreu">
                <ul>
                  <li>
                    <Button> lalau</Button>
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center items-center">

            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul>
                  <li>
                    <Button href="/dashboard"> lalau</Button>
                  </li>
                  <li>
                    <Button href="/dashboard"> lalau</Button>
                  </li>
                  <li>
                    <Button href="/dashboard"> lalau</Button>
                  </li>
                  <li>
                    <Button href="/dashboard"> lalau</Button>
                  </li>
                  <li>
                    <Button href="/dashboard"> lalau</Button>
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
