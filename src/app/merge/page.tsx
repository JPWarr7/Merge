// import Link from 'next/link';


// import { ThemeProvider } from '~/components/ui/theme-provider';
// import { ModeToggle } from '~/components/ui/mode-toggle';
import { 
    Avatar, 
    AvatarImage, 
    AvatarFallback 
} from '~/components/ui/avatar';

// import {
//     Bell,
//     CircleUser,
//     Home,
//     LineChart,
//     Menu,
//     Package,
//     Package2,
//     Search,
//     ShoppingCart,
//     Users,
//   } from "lucide-react"

//   import { Badge } from "~/components/ui/badge"
//   import { Button } from "~/components/ui/button"

//   import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
//   } from "~/components/ui/card"
//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "~/components/ui/dropdown-menu"
//   import { Input } from "~/components/ui/input"
//   import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"


// // const routes = [
// //     {
// //         name: "Home",
// //         path: "/"
// //     },
// // ]

// export default function Landing() {
    
//     const routes = [
//         {
//             name: "Home",
//             path: "/"
//         },
//     ]

//   return (
//     <>
//     <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
//         <header className="sm:flex sm:justify-between py-3 px-4 border-b">
    
//                 <div className = "relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
//                     <div className = "flex items-center">
//                         <Link 
//                         href="/" 
//                         className="ml-4 lg:ml-0">
//                             <h1 className="text-xl font-bold">
//                                 Merge
//                             </h1>
//                         </Link>
//                     </div>
//                     <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
//                         {routes.map((route, index) => (
//                             <Button asChild variant="ghost" key={index}>
//                                 <Link 
//                                 href={route.path} 
//                                 target="_blank" 
//                                 className="text-sm font-medium transition-colors">
//                                     {route.name}
//                                 </Link>
//                             </Button>
//                         ))}
//                     </nav>
//                     <div className = "flex items-center">
//                         <ModeToggle/>

//                         <Button 
//                         variant="link">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger>
//                                     <Avatar>
//                                         <AvatarImage src="https://github.com/jpwarr7.png" />
//                                         <AvatarFallback>user</AvatarFallback>
//                                     </Avatar>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent align="end">
//                                     {routes.map((route, index) => (
//                                         <DropdownMenuItem key={index}
//                                         className="cursor-pointer">
//                                             <Link 
//                                             href={route.path} 
//                                             target="_blank"
//                                             className="text-sm font-medium transition-colors">
//                                                 {route.name}
//                                             </Link>
//                                         </DropdownMenuItem>

//                                     ))}
//                                 </DropdownMenuContent>
//                             </DropdownMenu>  
//                         </Button>
//                     </div>
//                 </div>
//         </header>
//         <div className="flex-1">
//             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <Home className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 Orders
//                 <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
//                   6
//                 </Badge>
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
//               >
//                 <Package className="h-4 w-4" />
//                 Products{" "}
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <Users className="h-4 w-4" />
//                 Customers
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <LineChart className="h-4 w-4" />
//                 Analytics
//               </Link>
//             </nav>
//           </div>
//     </ThemeProvider>
//     </>
//   );
// }


import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Merge,
} from "lucide-react"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { ThemeProvider } from "~/components/ui/theme-provider"
import { ModeToggle } from "~/components/ui/mode-toggle"
export default function Dashboard() {
  return (
    <ThemeProvider>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <Merge className="h-6 w-6" />
              <span className="">Merge</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <ModeToggle/>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 
                text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 
                text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 
                items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted 
                px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 
                text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 
                text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            {/* <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 
        px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Merge className="h-6 w-6" />
                  <span className="sr-only">Merge</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                  px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                  bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center 
                  justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                  px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                  px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                  px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card> */}
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 
                text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 
                  shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                {/* <CircleUser className="h-5 w-5" /> */}
                <Avatar>
                    <AvatarImage src="https://github.com/jpwarr7.png" />
                    <AvatarFallback>user</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </div>
    </ThemeProvider>
    );
}