import AboutSection from '@/components/AboutSection'
import WorksSection from '@/components/WorksSection'
import SocialLinksSection from '@/components/SocialLinksSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(67,56,202,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.1),transparent_50%)] pointer-events-none"></div>
      
      <main className="relative container mx-auto px-4 py-16 max-w-7xl">
        <AboutSection />
        <WorksSection />
        <SocialLinksSection />
      </main>
    </div>
  );
}
