import React from 'react';
import type { DomainId } from '@/types';
import { DOMAIN_SEQUENCE } from '@/data/domains';

export default function DomainIndexView({ selectedDomain, onOpenDomain }: { selectedDomain: DomainId; onOpenDomain: (domain: DomainId) => void }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 h-full">
      <div className="mb-2 border-b border-outline-variant/50 pb-6 sm:pb-8">
        <p className="panel-tag text-primary mb-3">Domain index</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light mb-4 text-on-surface">Six Domains</h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed mb-4">The app follows the real six-domain sequence. Each card opens a live theory view with inspector panels.</p>
        <p className="panel-tag text-on-surface-variant text-[11px]">Personality · Cognition · Motivation · Relationships · Emotion · Self</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {DOMAIN_SEQUENCE.map((domain, index) => (
          <DomainCard
            key={domain.id}
            order={domain.order}
            title={domain.name}
            subtitle={domain.subtitle}
            summary={domain.summary}
            structure={domain.structure}
            active={selectedDomain === domain.id}
            accent={domain.accent}
            onClick={() => onOpenDomain(domain.id)}
            span={index === 2 || index === 5 ? 'lg:col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
}

function DomainCard({ order, title, subtitle, summary, structure, accent, active, onClick, span = '' }: { order: string; title: string; subtitle: string; summary: string; structure: string; accent: string; active: boolean; onClick: () => void; span?: string }) {
  return (
    <button
      onClick={onClick}
      className={`text-left interactive-node flex flex-col p-4 sm:p-6 md:p-8 group min-h-[200px] sm:min-h-[230px] ${span} ${active ? 'border-primary shadow-lg shadow-black/20' : ''}`}
    >
      <div className="flex justify-between items-start w-full opacity-80 group-hover:opacity-100 transition-opacity gap-4 sm:gap-6">
        <span className="panel-tag text-on-surface-variant text-xs sm:text-sm">Domain {order}</span>
        <span className="material-symbols-outlined text-primary transition-colors text-lg sm:text-2xl">{iconForDomain(title)}</span>
      </div>
      <div className="pt-4 sm:pt-8 mt-auto flex flex-col gap-2 sm:gap-3">
        <h2 className="text-2xl sm:text-3xl font-display font-light text-on-surface group-hover:text-primary transition-colors leading-tight">{title}</h2>
        <p className={`panel-tag text-xs ${accent}`}>{subtitle}</p>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl line-clamp-2">{summary}</p>
        <p className="panel-tag text-xs text-primary mt-1 sm:mt-2">{structure}</p>
      </div>
    </button>
  );
}

function iconForDomain(title: string) {
  switch (title) {
    case 'Personality & Individual Differences':
      return 'fingerprint';
    case 'Cognition & Judgment':
      return 'psychology';
    case 'Motivation & Behavioral Regulation':
      return 'moving';
    case 'Relationships & Attachment':
      return 'diversity_3';
    case 'Emotion & Emotion Regulation':
      return 'mood';
    case 'Self & Identity':
      return 'face_retouching_natural';
    default:
      return 'explore';
  }
}
