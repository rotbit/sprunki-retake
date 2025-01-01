import { Newspaper } from 'lucide-react'

export const metadata = {
  title: 'Blog - Spurnki Retake',
  description: 'Latest news and updates about Spurnki Retake',
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <Newspaper className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Latest Updates
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Stay tuned for exciting news and updates about Spurnki Retake!
        </p>
      </div>
      <div className="prose dark:prose-invert mx-auto">
        <div className="text-center text-muted-foreground">
          <p className="text-lg">New blog posts coming soon...</p>
        </div>
      </div>
    </div>
  )
}

