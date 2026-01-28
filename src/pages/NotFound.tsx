import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-9xl font-serif text-accent mb-4">404</h1>
      <p className="text-xl mb-8 font-sans">The path you seek has been weathered away.</p>
      <Link to="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
        <MoveLeft size={20} />
        <span>Return to Sanctuary</span>
      </Link>
    </div>
  );
}