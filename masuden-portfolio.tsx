"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Mail, Zap, Shield, Users, Leaf, Building, Menu, X } from "lucide-react"
import Image from "next/image"

export default function MasudenPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let currentActiveSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentActiveSection = section.id
        }
      })

      setActiveSection(currentActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking a link
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Masuden Corporation</div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {["home", "about", "services", "projects", "values", "sustainability", "careers", "contact"].map(
              (section) => (
                <li key={section}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium ${
                      activeSection === section
                        ? "text-teal-600 hover:text-teal-700"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                </li>
              ),
            )}
          </ul>
        </nav>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <ul className="flex flex-col space-y-2 p-4">
              {["home", "about", "services", "projects", "values", "sustainability", "careers", "contact"].map(
                (section) => (
                  <li key={section}>
                    <Button
                      variant="ghost"
                      className={`w-full text-left ${
                        activeSection === section
                          ? "text-teal-600 hover:text-teal-700"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-18">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-teal-600 ">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Masuden Corporation</h1>
            <p className="text-lg md:text-xl text-teal-100 mb-8">
              Premier electrical systems specialists for industrial, residential, and interior sectors.
            </p>
            <Button
              onClick={() => scrollToSection("about")}
              className="text-lg bg-white text-teal-700 hover:bg-teal-50 hover:text-teal-800"
            >
              Learn More <ChevronDown className="ml-2" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-600">Company Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Masuden Corporation is a premier company specializing in the supply and installation of electrical
                    systems across industrial, residential, and miscellaneous interior sectors. Known for its commitment
                    to excellence, the corporation has set industry standards with its innovative solutions and
                    high-quality services, particularly specializing in Japanese standard construction.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-600">History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Founded in 2014, Masuden Corporation began as a small electrical service provider. Over the years,
                    it has grown exponentially, becoming a key player in the electrical industry. The company's growth
                    is attributed to its focus on technological advancements, skilled workforce, and customer
                    satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-600">Mission and Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission:</strong> To provide superior electrical solutions that ensure safety, efficiency,
                    and aesthetic appeal for our clients' environments.
                  </p>
                  <p className="text-gray-700">
                    <strong>Vision:</strong> To be the global leader in electrical supply and installation, recognized
                    for our innovation, quality, and customer-focused approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
    {/* Section Header */}
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-center text-gray-900">
      Our Services
    </h2>

    {/* Tabs Component */}
    <Tabs defaultValue="industrial" className="w-full">
      {/* Tabs Navigation */}
      <TabsList className="flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 bg-white shadow-md rounded-lg overflow-hidden p-2 sm:p-4">
        {[
          { value: "industrial", label: "Industrial" },
          { value: "residential", label: "Residential" },
          { value: "interior", label: "Interior" },
          { value: "maintenance", label: "Maintenance" },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex-grow sm:flex-grow-0 px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg font-medium text-gray-700 hover:bg-teal-600 hover:text-white transition-all duration-300 rounded-md whitespace-nowrap"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {[
        {
          value: "industrial",
          title: "Industrial Electrical Supply & Installation",
          description: "Comprehensive solutions for industrial needs",
          items: [
            "Power Distribution Systems",
            "Control Panels and Automation",
            "Maintenance and Upgrades",
            "Electrical Audits and Inspections",
          ],
        },
        {
          value: "residential",
          title: "Residential Electrical Supply & Installation",
          description: "Tailored solutions for homes",
          items: [
            "Wiring and Cabling",
            "Lighting Solutions",
            "Home Automation",
            "Energy-Efficient Solutions",
          ],
        },
        {
          value: "interior",
          title: "Miscellaneous Interior Work",
          description: "Specialized interior electrical solutions",
          items: [
            "Custom Electrical Installations",
            "Emergency Power Solutions",
            "Energy Management Systems",
            "Lighting Control Systems",
          ],
        },
        {
          value: "maintenance",
          title: "Maintenance Work",
          description: "Keeping your systems running smoothly",
          items: [
            "Daily maintenance of electrical and mechanical equipment of factories",
            "Maintenance checklists",
            "Well-qualified engineers and technicians trained by Japanese staff",
          ],
        },
      ].map((service) => (
        <TabsContent key={service.value} value={service.value}>
          <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl p-4 sm:p-6 bg-white mt-4 sm:mt-6">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-semibold text-teal-700">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-lg">
                {service.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-teal-600">Industrial</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/industrial.jpg"
            alt="Industrial Project"
            width={800}
            height={600}
            className="rounded-lg"
            layout="responsive"
          />
          <p className="mt-4 text-gray-700">Electrical infrastructure for large manufacturing plants.</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-teal-600">Residential</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/resdential.jpg"
            alt="Residential Project"
            width={800}
            height={600}
            className="rounded-lg"
            layout="responsive"
          />
          <p className="mt-4 text-gray-700">Complete electrical installations for luxury complexes.</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-teal-600">Commercial</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/commercial.jpg"
            alt="Commercial Project"
            width={800}
            height={600}
            className="rounded-lg"
            layout="responsive"
          />
          <p className="mt-4 text-gray-700">Custom lighting and power solutions for offices and retail spaces.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

        {/* Values Section */}
        <section id="values" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <Zap className="mr-2" /> Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Delivering top-notch products and services that exceed industry standards.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <Users className="mr-2" /> Customer Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Ensuring that every client is fully satisfied with our solutions.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <Shield className="mr-2" /> Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Prioritizing the safety of our employees, clients, and the environment in every project.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section id="sustainability" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sustainability Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <Leaf className="mr-2" /> Eco-Friendly Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">We prioritize the use of environmentally friendly electrical products and solutions.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <Building className="mr-2" /> Sustainable Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Our operations are designed to minimize environmental impact and promote sustainability.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Join Our Team</h2>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-600">Careers at Masuden Corporation</CardTitle>
                <CardDescription>Be part of our innovative and dynamic team</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Dynamic Work Environment</li>
                  <li>Opportunities for Growth</li>
                  <li>Comprehensive Benefits</li>
                  <li>Inclusion and Diversity</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  For more information about career opportunities, please contact us at{" "}
                  <a href="mailto:masudencorp@gmail.com" className="text-teal-600 hover:underline">
                    masudencorp@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb8 text-center">Contact Us</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Mail className="mr-2" /> Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  For inquiries, please email us at:{" "}
                  <a href="mailto:masudencorp@gmail.com" className="text-blue-600 hover:underline">
                    masudencorp@gmail.com
                  </a>
                </p>
                <Button>Send us a message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-500 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Masuden Corporation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}