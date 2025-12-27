'use client';
import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiRedis, 
  SiGraphql, 
  SiDocker, 
  SiKubernetes, 
  SiGithubactions, 
 SiGooglecloud,
  SiTerraform, 
  SiCloudflare, 
  SiVercel 
} from 'react-icons/si';
import { Move3d } from 'lucide-react';

const technologies = [
  { name: 'React', icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-foreground" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
  { name: 'Framer Motion', icon: <Move3d className="w-6 h-6 text-[#0055FF]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
  { name: 'Express', icon: <SiExpress className="w-6 h-6 text-foreground" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
  { name: 'Redis', icon: <SiRedis className="w-6 h-6 text-[#DC382D]" /> },
  { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6 text-[#E10098]" /> },
  { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-6 h-6 text-[#326CE5]" /> },
  { name: 'GitHub Actions', icon: <SiGithubactions className="w-6 h-6 text-[#2088FF]" /> },
  { name: 'AWS', icon: <SiGooglecloud className="w-6 h-6 text-[#0048ff]" /> },
  { name: 'Terraform', icon: <SiTerraform className="w-6 h-6 text-[#7B42BC]" /> },
  { name: 'Cloudflare', icon: <SiCloudflare className="w-6 h-6 text-[#F38020]" /> },
  { name: 'Vercel', icon: <SiVercel className="w-6 h-6 text-foreground" /> },
];

type AnimatedBannerProps = {
  className?: string;
  speedSeconds?: number;
  heading?: string;
};

export default function AnimatedBanner({
  className,
  speedSeconds = 28,
  heading = 'Technologies We Use',
}: AnimatedBannerProps) {
  const items = [...technologies, ...technologies];

  return (
    <section
      aria-label={heading}
      className={
        'w-full overflow-hidden border-y border-border bg-background/30 backdrop-blur-md ' +
        (className ?? '')
      }
    >
      <style>{`
        @keyframes zidbit-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .zidbit-marquee-track { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-sm sm:text-base font-semibold text-foreground/80 whitespace-nowrap">
              {heading}
            </h3>

            <div className="relative flex-1 overflow-hidden">
              <div
                className="zidbit-marquee-track flex w-max items-center gap-3"
                style={{
                  animation: `zidbit-marquee-left ${speedSeconds}s linear infinite`,
                }}
              >
                {items.map((tech, idx) => (
                  <div
                    key={`${tech.name}-${idx}`}
                    className="shrink-0 flex items-center justify-center rounded-full border border-border bg-card/30 p-2 backdrop-blur-lg hover:bg-card/50 transition-colors"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
