export default function Footer(): JSX.Element {
  return (
    <footer className="border-t mt-8">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} LaunchPass. All rights reserved.
      </div>
    </footer>
  );
}
