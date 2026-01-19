import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h1>
          <p className="text-muted-foreground md:text-xl">Tech Lead | Software Engineer | AWS Certified Solutions Architect | Documentation Expert</p>
          <p className="text-muted-foreground">More than 8 years of experience in web applications, APIs, mobile development, and software testing.</p>
        </div>

        <div className="flex justify-end">
          <Link href="/assets/CV-Moises-Cedeno.pdf" target="_blank" download>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          {/* MediRec Experience */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Integration Engineer</CardTitle>
                  <CardDescription>MediRec • May 2020 - Present</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Integration</Badge>
                  <Badge variant="secondary">Mobile Dev</Badge>
                  <Badge variant="secondary">Cloud</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Key Achievements</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>Led database migration from LexiComp to NLM, saving $20,000 in licensing costs</li>
                    <li>Developed company's first mobile app in 2 months using Flutter</li>
                    <li>Implemented PREIS API integration for automated vaccination records with Puerto Rico's government</li>
                    <li>Reduced clinical results transmission time by 45% through system integration</li>
                    <li>Reduced AWS infrastructure costs by 58% through optimization</li>
                    <li>Modernized legacy C# systems and implemented proper documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Technologies Used</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">PHP (Laravel/Lumen)</Badge>
                    <Badge variant="outline">C# (.NET)</Badge>
                    <Badge variant="outline">Flutter</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">SQL Server</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Linux</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* T-Cuida Experience */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Tech Lead</CardTitle>
                  <CardDescription>T-Cuida • May 2021 - June 2023</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tech Lead</Badge>
                  <Badge variant="secondary">Full Stack</Badge>
                  <Badge variant="secondary">QA</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Key Achievements</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>Led QA activities for the entire platform, implementing automated testing</li>
                    <li>Developed and launched versions 1 and 2 of the T-Cuida platform</li>
                    <li>Implemented 4-channel communication system (push, WhatsApp, email, SMS)</li>
                    <li>Integrated wearable devices, reducing programming time by 400%</li>
                    <li>Developed Node.js services for real-time device communication</li>
                    <li>Created comprehensive documentation for wearable device integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Technologies Used</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">PHP (Laravel)</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Vue.js</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">AWS S3</Badge>
                    <Badge variant="outline">Digital Ocean</Badge>
                    <Badge variant="outline">Socket.io</Badge>
                    <Badge variant="outline">OneSignal</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Projects */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Personal Projects</CardTitle>
                  <CardDescription>2022 - Present</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Full Stack</Badge>
                  <Badge variant="secondary">Content Creation</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Notable Projects</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>Cuentos de Moisés - Personal blog for stories and reflections</li>
                    <li>Saiyans Blog - Technology blog about software and programming</li>
                    <li>Ankicito - Book exchange application prototype (in development)</li>
                    <li>My English Journey - Blog documenting English learning progress</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Technologies Used</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Content Writing</Badge>
                    <Badge variant="outline">Technical Writing</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Freelance Experience */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Independent Consultant/Developer</CardTitle>
                  <CardDescription>Freelance • 2017 - Present</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">Web Dev</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Notable Projects</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>gabrielniezenmatos.com - Professional portfolio website</li>
                    <li>sintrasat.com - Complete WordPress website with custom features</li>
                    <li>fallingawake.com - Membership and subscription system implementation</li>
                    <li>apoyoconsultivo.com - Custom WordPress development</li>
                    <li>josedergan.com - Personal brand and course platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Technologies Used</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">WooCommerce</Badge>
                    <Badge variant="outline">SEO</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Skills & Expertise</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Programming Languages</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">PHP</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">C#</Badge>
                      <Badge variant="outline">Dart</Badge>
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Frameworks & Tools</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">Laravel</Badge>
                      <Badge variant="outline">Vue.js</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Flutter</Badge>
                      <Badge variant="outline">.NET</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">CI/CD</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Testing & QA</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">Selenium</Badge>
                      <Badge variant="outline">JUnit</Badge>
                      <Badge variant="outline">Jest</Badge>
                      <Badge variant="outline">JMeter</Badge>
                      <Badge variant="outline">PHPUnit</Badge>
                      <Badge variant="outline">Postman</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Cloud & DevOps</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">Digital Ocean</Badge>
                      <Badge variant="outline">Linux</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">Nginx</Badge>
                      <Badge variant="outline">Apache</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Databases</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">MariaDB</Badge>
                      <Badge variant="outline">SQL Server</Badge>
                      <Badge variant="outline">SQLite</Badge>
                      <Badge variant="outline">Firebase</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Certifications</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">AWS Cloud Practitioner</Badge>
                      <Badge variant="outline">EF SET English (61/100)</Badge>
                      <Badge variant="outline">Technical Writing</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

