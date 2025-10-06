import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to Echo
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The professional home for builders and creators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Profile</CardTitle>
              <CardDescription>
                Build your professional presence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Share Projects</CardTitle>
              <CardDescription>
                Showcase your best work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Examples</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connect</CardTitle>
              <CardDescription>
                Find and follow other creators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">Explore</Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  )
}