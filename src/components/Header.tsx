import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu';

const useCases = [
  {
    title: "Podcasters",
    href: "/use-cases/podcasts",
    description: "Monetize your podcast with exclusive content"
  },
  {
    title: "Trading & Investment",
    href: "/use-cases/trading",
    description: "Share market insights and trading signals"
  },
  {
    title: "Content Creators",
    href: "/use-cases/creators",
    description: "Build your premium content community"
  }
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {useCases.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" className="text-sm px-3 py-2 hover:text-primary transition-colors">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#pricing" className="text-sm px-3 py-2 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/help" className="text-sm px-3 py-2 hover:text-primary transition-colors">
                  Help
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" onClick={() => router.push('/demo')}>Book a demo</Button>
          <Button onClick={() => router.push('/login')}>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;