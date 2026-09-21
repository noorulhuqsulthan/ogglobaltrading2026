import SectionHeader from '@/components/ui/SectionHeader';
import { processSteps } from '@/data/process';

export default function ProcessTimeline() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SectionHeader
          eyebrow="Our business process"
          title={<>From supplier<br />to local customer.</>}
          description="Seven stages, from the first enquiry through customs clearance to delivery across the UAE and GCC."
        />

        <div className="ptl" data-r>
          <span className="ptl-rail" aria-hidden="true"><i /></span>
          {processSteps.map((step, i) => (
            <div className="ptl-step" key={step.title} style={{ ['--d' as string]: `${i * 180}ms` }}>
              <span className="ptl-node"><i>{String(i + 1).padStart(2, '0')}</i></span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}