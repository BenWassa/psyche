type EvidenceCardProps = {
  title: string;
  year?: string;
  status: 'superseded' | 'revised' | 'contested';
  whatPeopleKnow: string;
  whatSurvives?: string;
  whatIsWrong: string;
  useInstead: string;
  onClick?: () => void;
};

const STATUS_LABEL: Record<EvidenceCardProps['status'], string> = {
  superseded: 'Largely Superseded',
  revised: 'Partially Revised',
  contested: 'Actively Contested',
};

export function EvidenceCard({ title, year, status, whatPeopleKnow, whatSurvives, whatIsWrong, useInstead, onClick }: EvidenceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border border-outline-variant bg-surface-bright p-6 flex flex-col gap-4 ${onClick ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="panel-tag text-primary block mb-2">Popular / Revised</span>
          <h3 className="node-title text-on-surface">
            {title}
            {year && <span className="text-on-surface-variant text-[16px] font-normal ml-2">({year})</span>}
          </h3>
        </div>
        <span className="shrink-0 px-2.5 py-1 rounded-full border border-outline-variant bg-surface-dim panel-tag text-on-surface-variant text-[10px]">
          {STATUS_LABEL[status]}
        </span>
      </div>

      <div className="space-y-3 text-[14px] leading-relaxed">
        <div>
          <p className="panel-tag text-on-surface-variant mb-1">What people know</p>
          <p className="body-text !text-[14px] text-on-surface">{whatPeopleKnow}</p>
        </div>

        {whatSurvives && (
          <div>
            <p className="panel-tag text-on-surface-variant mb-1">What survives</p>
            <p className="body-text !text-[14px] text-on-surface">{whatSurvives}</p>
          </div>
        )}

        <div>
          <p className="panel-tag text-on-surface-variant mb-1">What the evidence shows</p>
          <p className="body-text !text-[14px] text-on-surface">{whatIsWrong}</p>
        </div>

        <div className="pt-2 border-t border-outline-variant/50">
          <p className="panel-tag text-primary mb-1">Use instead</p>
          <p className="body-text !text-[14px] text-on-surface">{useInstead}</p>
        </div>
      </div>
    </div>
  );
}
