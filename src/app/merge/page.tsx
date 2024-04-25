import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { ThemeProvider } from '~/components/ui/theme-provider';
import { ModeToggle } from '~/components/ui/mode-toggle';
import { 
    Avatar, 
    AvatarImage, 
    AvatarFallback 
} from '~/components/ui/avatar';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';

const routes = [
    {
        name: "Home",
        path: "/"
    },
]

export default function Home() {
  return (
    <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
    
                <div className = "relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className = "flex items-center">
                        <Link 
                        href="/" 
                        className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold">
                                Merge
                            </h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
                        {routes.map((route, index) => (
                            <Button asChild variant="ghost" key={index}>
                                <Link 
                                href={route.path} 
                                target="_blank" 
                                className="text-sm font-medium transition-colors">
                                    {route.name}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className = "flex items-center">
                        <ModeToggle/>

                        <Button 
                        variant="link">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/jpwarr7.png" />
                                        <AvatarFallback>user</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {routes.map((route, index) => (
                                        <DropdownMenuItem key={index}
                                        className="cursor-pointer">
                                            <Link 
                                            href={route.path} 
                                            target="_blank"
                                            className="text-sm font-medium transition-colors">
                                                {route.name}
                                            </Link>
                                        </DropdownMenuItem>

                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>  
                        </Button>

                    </div>
                </div>
        </header>
    </ThemeProvider>
    </>
  );
}
