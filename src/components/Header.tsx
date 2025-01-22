import React from 'react';
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

interface HeaderProps {
  children?: React.ReactNode;
}

const useCases = [
  {
    title: "Podcasters",
    href: "/use-cases#podcasts",
    description: "Monetize your podcast with exclusive content"
  },
  {
    title: "Trading",
    href: "/use-cases#trading",
    description: "Share market insights and trading signals"
  },
  {
    title: "Creators",
    href: "/use-cases#creators",
    description: "Build your premium content community"
  }
];

const Header = ({ children }: HeaderProps) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center py-3 md:py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] md:gap-3 md:p-4">
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
              {/* Other menu items */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" onClick={() => router.push('/demo')} className="hidden lg:flex">Book a demo</Button>
            <Button onClick={() => router.push('/login')}>Login</Button>
          </div>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          {children}
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur md:hidden">
          <div className="container flex flex-col gap-8 pt-4">
            <div className="flex justify-between items-center">
              <Logo />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </Button>
            </div>
            
            <nav className="flex flex-col gap-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  router.push('/use-cases');
                  setIsMobileMenuOpen(false);
                }}
              >
                Use Cases
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  router.push('/pricing');
                  setIsMobileMenuOpen(false);
                }}
              >
                Pricing
              </Button>
              <div className="flex items-center justify-between gap-4 pt-8">
                <ThemeToggle />
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    router.push('/demo');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Demo
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => {
                    router.push('/login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
