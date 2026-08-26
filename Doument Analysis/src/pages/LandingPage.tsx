import React from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { 
  FileCheck, 
  ArrowRight, 
  UploadCloud, 
  Sparkles, 
  Search, 
  Layers, 
  Globe, 
  MessageSquare,
  Bookmark
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setCurrentPage, t, language, setLanguage } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand-500/30 selection:text-brand-200 overflow-x-hidden font-sans">
      {/* Navigation Header */}
      <header className="h-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-40 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-lg">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-lg font-extrabold tracking-tight text-white">{t.brandName}</h1>
            <span className="text-[10px] font-mono text-slate-400 block">{t.demoTagline}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 text-xs font-mono transition-colors"
          >
            <Globe className="w-4 h-4 text-brand-400" />
            <span className="uppercase">{language}</span>
          </button>

          <Button
            variant="primary"
            size="md"
            onClick={() => setCurrentPage('overview')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {t.landing.ctaTry}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>{t.landing.badge}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          {t.landing.heroTitle}
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          {t.landing.heroSubtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setCurrentPage('overview')}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {t.landing.ctaTry}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage('workspace')}
            icon={<Sparkles className="w-5 h-5" />}
          >
            {t.landing.ctaFeatures}
          </Button>
        </div>

        {/* Product UI Hero Screenshot Mockup */}
        <div className="pt-10 relative max-w-5xl mx-auto">
          <div className="p-2 sm:p-4 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-950/80 rounded-t-2xl border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 mx-auto">documind.app/workspace/doc-q4-strategy</span>
            </div>

            {/* UI Mockup Content */}
            <div className="bg-slate-950 p-6 text-left grid grid-cols-1 md:grid-cols-3 gap-4 rounded-b-2xl">
              {/* Left TOC Mock */}
              <div className="hidden md:block p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="h-4 w-28 bg-brand-500/20 rounded font-mono text-[10px] text-brand-400 p-1 flex items-center">
                  Table of Contents
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="p-2 rounded bg-brand-600/20 text-white font-semibold flex items-center justify-between">
                    <span>Page 1 - Executive Summary</span>
                    <span className="text-[10px]">Active</span>
                  </div>
                  <div className="p-2 rounded hover:bg-slate-800">Page 2 - Market Expansion</div>
                  <div className="p-2 rounded hover:bg-slate-800">Page 3 - Risk Assessment</div>
                  <div className="p-2 rounded hover:bg-slate-800">Page 4 - Roadmap & Budget</div>
                </div>
              </div>

              {/* Center Reader Mock */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 md:col-span-1">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-white">Q4 Business Strategy.pdf</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Ready</span>
                </div>
                <div className="text-xs text-slate-300 space-y-2 font-sans leading-relaxed">
                  <p className="font-bold text-brand-400">1. Executive Overview</p>
                  <p>Our primary strategic imperative for Q4 is expanding Enterprise ARR by 35% year-over-year while introducing automated document intelligence pipelines...</p>
                  <mark className="bg-brand-500/30 text-white px-1 rounded inline-block">
                    ISO 27001 Certification audit submission deadline: October 15, 2026.
                  </mark>
                </div>
              </div>

              {/* Right Insights Mock */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 md:col-span-1">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-brand-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> AI Insights
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Sample AI</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <p className="font-bold text-white text-[11px]">35% ARR Growth Target</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Targeting $18.5M ARR with 45 net-new enterprise logos.</p>
                    <span className="inline-flex items-center gap-1 text-[9px] text-brand-400 font-mono mt-1">
                      <Bookmark className="w-2.5 h-2.5" /> Source: Page 1 - Sec 1
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">
                    <p className="font-bold text-[11px]">ISO 27001 Compliance Deadline</p>
                    <p className="text-[10px] opacity-90 mt-0.5">Audit submission required by October 15.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/80 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-12 text-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.landing.howItWorksTitle}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              {t.landing.howItWorksSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
                <UploadCloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">{t.landing.step1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.landing.step1Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">{t.landing.step2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.landing.step2Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">{t.landing.step3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.landing.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.landing.featuresTitle}
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            {t.landing.featuresSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <Layers className="w-6 h-6 text-brand-400" />
            <h4 className="font-bold text-sm text-white">{t.landing.feat1Title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{t.landing.feat1Desc}</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <Bookmark className="w-6 h-6 text-emerald-400" />
            <h4 className="font-bold text-sm text-white">{t.landing.feat2Title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{t.landing.feat2Desc}</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h4 className="font-bold text-sm text-white">{t.landing.feat3Title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{t.landing.feat3Desc}</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <Search className="w-6 h-6 text-indigo-400" />
            <h4 className="font-bold text-sm text-white">{t.landing.feat4Title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{t.landing.feat4Desc}</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-8 bg-slate-950 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="font-display text-2xl font-bold text-white">{t.tagline}</h3>
          <p className="text-xs text-slate-400">{t.supportingMessage}</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setCurrentPage('overview')}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {t.landing.ctaTry}
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-900 text-slate-500 text-[11px] max-w-3xl mx-auto font-mono">
          <p>{t.landing.footerNotice}</p>
          <p className="mt-2 text-slate-600">Built with React, TypeScript, Vite & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};
