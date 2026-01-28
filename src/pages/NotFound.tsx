import { Link } from "react-router-dom";
import { Headline } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <Headline as="h1" className="mb-4">404</Headline>
      <p className="text-xl text-muted-foreground mb-8">This page has wandered off the ranch.</p>
      <Link to="/">
        <Button className="rounded-none px-8 py-6">Return Home</Button>
      </Link>
    </div>
  );
}
