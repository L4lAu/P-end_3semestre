import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://netshow.me/wp-content/uploads/2022/03/Plataforma-de-cursos-como-criar-a-sua-e-comecar-a-vender-online-1-1.png" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://doity.com.br/blog/app/uploads/2022/05/DIVULGAR-930x534.png" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://s3-sa-east-1.amazonaws.com/agendor-blog-uploads/2016/01/19232051/cursos-online-vender-mais.jpg" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0w2TzyhlVPd0UwWKm6YYTQC_jGkzy7SuEw&s" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://blog.coursify.me/wp-content/uploads/2017/09/marketing-digital-cursos-online-coursifyme.jpg" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://blog.even3.com.br/wp-content/uploads/2023/01/imagemdedestaque_vendercursoonline.png" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTBF0VN6K7w2DRnRddnrnrgaNPiVhkJ8gzg&s" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                  <Card>
                    <CardHeader>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP_7kSBWxzapbU5GITB9SttPvH6Klv7Fdew&s" alt="sla" classname=""/>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                      
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
