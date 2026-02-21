import { Metadata } from "next";
import {
  Code,
  Database,
  Shield,
  Palette,
  CreditCard,
  Settings,
  Cloud,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Web Development Services | ZidBit",
  description:
    "Comprehensive list of web development features and services available for your project. Choose from authentication, payments, analytics, and more.",
};

const features = [
  {
    category: "Authentication & Security",
    icon: Shield,
    items: [
      {
        name: "Auth (Email/Password)",
        description:
          "Traditional email and password authentication system with secure password hashing, validation, and password recovery functionality",
      },
      {
        name: "Social Login",
        description:
          "Seamless login integration with Google, Facebook, GitHub, LinkedIn, and other OAuth providers for enhanced user experience",
      },
      {
        name: "Role-based Access",
        description:
          "Comprehensive user roles and permissions management system with granular access control and multi-level authorization",
      },
    ],
  },
  {
    category: "User Interface",
    icon: Palette,
    items: [
      {
        name: "Simple Screen",
        description:
          "Clean, responsive layouts with modern design principles, mobile-first approach, and accessibility compliance",
      },
      {
        name: "Complex Screen",
        description:
          "Advanced UI components with smooth animations, micro-interactions, dynamic content, and interactive elements",
      },
    ],
  },
  {
    category: "Data Management",
    icon: Database,
    items: [
      {
        name: "CRUD Module",
        description:
          "Complete Create, Read, Update, Delete operations with data validation, error handling, and optimistic updates",
      },
      {
        name: "Advanced Analytics",
        description:
          "Comprehensive reporting dashboard with interactive charts, graphs, real-time data visualization, and export capabilities",
      },
    ],
  },
  {
    category: "E-commerce & Billing",
    icon: CreditCard,
    items: [
      {
        name: "Payments",
        description:
          "Secure payment processing with Stripe, PayPal, Razorpay, and other major payment gateways with fraud protection",
      },
      {
        name: "Subscriptions",
        description:
          "Automated recurring billing system with subscription management, proration, invoice generation, and dunning management",
      },
    ],
  },
  {
    category: "Administration",
    icon: Settings,
    items: [
      {
        name: "Admin Dashboard",
        description:
          "Comprehensive admin panel for content management, user administration, system monitoring, and configuration settings",
      },
    ],
  },
  {
    category: "DevOps & Maintenance",
    icon: Cloud,
    items: [
      {
        name: "Deployment",
        description:
          "Automated production deployment with CI/CD pipelines, environment management, monitoring, and rollback capabilities",
      },
      {
        name: "Maintenance",
        description:
          "Ongoing technical support, security updates, performance optimization, bug fixes, and feature enhancements",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web Development Features
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive suite of web development features
              designed to build modern, scalable, and user-friendly applications
              tailored to your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {features.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>
              </div>

              {/* Category Features */}
              <div className="divide-y divide-gray-100">
                {category.items.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className="p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                Technology Stack
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              All features are built using modern, industry-standard
              technologies for optimal performance and scalability.
            </p>
            <ul className="space-y-2 text-blue-800">
              <li>• Modern web frameworks for frontend development</li>
              <li>• Type-safe languages for robust code</li>
              <li>• Utility-first CSS for responsive design</li>
              <li>• Scalable server-side architectures</li>
              <li>• Performance-optimized databases</li>
              <li>• Leading cloud infrastructure providers</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900">
                Custom Solutions
              </h3>
            </div>
            <p className="text-purple-800 mb-4">
              Need something specific that&apos;s not listed? We specialize in
              creating custom features tailored to your unique business
              requirements.
            </p>
            <ul className="space-y-2 text-purple-800">
              <li>• Third-party API integrations</li>
              <li>• Custom workflow automation</li>
              <li>• Advanced security implementations</li>
              <li>• Multi-language & localization support</li>
              <li>• Real-time features with WebSockets</li>
              <li>• Machine learning integrations</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Project?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which features would work best for your project
            and create a custom solution that meets your specific needs.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
