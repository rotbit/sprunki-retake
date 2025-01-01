import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Spurnki Retake',
  description: 'Privacy policy and terms of service for Spurnki Retake',
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <Shield className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Your privacy is important to us. Here's how we protect your data.
        </p>
      </div>
      <div className="prose dark:prose-invert mx-auto">
        <div className="text-center text-muted-foreground">
          <p className="text-lg">Privacy policy content coming soon...</p>
        </div>
      </div>
    </div>
  )
}

