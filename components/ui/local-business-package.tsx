 "use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnquiryForm from '@/components/ui/enquiry-form';
import { 
  Check, 
  Sparkles, 
  TrendingUp, 
  Crown,
  MapPin,
  Search,
  MessageCircle,
  Mail,
  BarChart3,
  Calendar,
  Star,
  Zap,
  Target,
  Users,
  Database,
  TrendingUpIcon,
  Phone,
  Globe
} from 'lucide-react';

const BusinessPackage = () => {
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      tagline: 'Local Presence',
      description: 'For businesses that barely exist online.',
      icon: Sparkles,
      outcome: 'Now customers can find you, trust you, and contact you instantly.',
      popular: false,
      features: [
        { text: '5-page website (Home, About, Services, Contact, Booking)', icon: Globe },
        { text: 'Mobile-first design', icon: Phone },
        { text: 'Google Business Profile setup/optimization', icon: MapPin },
        { text: 'Basic SEO (titles, meta, local keywords)', icon: Search },
        { text: 'WhatsApp / Call button integration', icon: MessageCircle },
        { text: 'Contact form with email alerts', icon: Mail },
        { text: 'Basic analytics setup', icon: BarChart3 }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'growth',
      name: 'Growth Package',
      tagline: 'Local Lead Engine',
      description: 'For businesses that want more than just presence.',
      icon: TrendingUp,
      outcome: 'Your website becomes a sales machine, not just a brochure.',
      popular: true,
      features: [
        { text: 'Everything in Starter', icon: Check, highlight: true },
        { text: 'Booking system or appointment integration', icon: Calendar },
        { text: 'Reviews automation system (Google reviews)', icon: Star },
        { text: 'Landing page for ads', icon: Target },
        { text: 'Conversion-focused design', icon: Zap },
        { text: 'Speed optimization', icon: TrendingUpIcon },
        { text: 'Monthly performance report', icon: BarChart3 },
        { text: '1 month support included', icon: Users }
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 'authority',
      name: 'Authority Package',
      tagline: 'Dominate Local Market',
      description: 'For competitive niches (dentists, real estate, clinics, law firms).',
      icon: Crown,
      outcome: 'Own your market. Be the obvious choice in your area.',
      popular: false,
      features: [
        { text: 'Everything above', icon: Check, highlight: true },
        { text: 'Multi-location support (if needed)', icon: MapPin },
        { text: 'Advanced local SEO', icon: Search },
        { text: 'Content strategy (service pages per keyword)', icon: Target },
        { text: 'CRM integration', icon: Database },
        { text: 'Automated email/SMS follow-ups', icon: Mail },
        { text: 'Lead tracking dashboard', icon: BarChart3 },
        { text: '3 months optimization', icon: TrendingUpIcon }
      ],
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[60px_60px]" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Simple, Transparent Pricing</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-cyan-200 to-white">
              Choose Your Growth Path
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              From building your online presence to dominating your local market. 
              <span className="block mt-2 text-cyan-400 font-semibold">Pick what fits your business stage.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative ${pkg.popular ? 'lg:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className={`px-6 py-2 rounded-full bg-linear-to-r ${pkg.gradient} text-white text-sm font-bold shadow-lg`}
                    >
                      🔥 Most Popular
                    </motion.div>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl bg-white shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-purple-500 ring-offset-4' : ''
                }`}>
                  {/* Card Header */}
                  <div className={`relative p-8 bg-linear-to-br ${pkg.bgGradient}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-20 rounded-full -mr-16 -mt-16" />
                    
                    <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${pkg.gradient} shadow-lg mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-linear-to-r ${pkg.gradient} bg-clip-text text-transparent mb-3`}>
                      {pkg.tagline}
                    </p>
                    <p className="text-sm text-slate-600 mb-6">
                      {pkg.description}
                    </p>

                    {/* Outcome */}
                    <div className={`p-4 rounded-lg bg-linear-to-r ${pkg.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                      <p className="text-sm font-medium text-slate-900">
                        ✨ {pkg.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`shrink-0 mt-0.5 p-1 rounded ${
                              feature.highlight 
                                ? `bg-linear-to-br ${pkg.gradient}` 
                                : 'bg-slate-100'
                            }`}>
                              <FeatureIcon className={`w-4 h-4 ${
                                feature.highlight ? 'text-white' : 'text-slate-600'
                              }`} />
                            </div>
                            <span className={`text-sm ${
                              feature.highlight ? 'font-semibold text-slate-900' : 'text-slate-600'
                            }`}>
                              {feature.text}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsEnquiryFormOpen(true)}
                      className={`w-full mt-8 px-6 py-4 rounded-xl font-semibold text-white bg-linear-to-r ${pkg.gradient} shadow-lg hover:shadow-xl transition-all duration-200`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-8 px-8 py-6 rounded-2xl bg-white shadow-lg">
            <div className="flex items-center gap-2 text-slate-600">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Ongoing support</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">100% satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm
        isOpen={isEnquiryFormOpen}
        onClose={() => setIsEnquiryFormOpen(false)}
      />
    </div>
  );
};

export default BusinessPackage;