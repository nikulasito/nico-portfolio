type ProjectVisualProps = {
  type: "system" | "platform" | "web" | "motion" | "game";
};

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === "system") {
    return (
      <div className="project-visual system-visual">
        <div className="homepage-preview-shell" aria-hidden="true">
          <div className="homepage-preview-viewport enremco-preview">
            <iframe
              src="https://enremco.com/"
              title="ENREMCO homepage preview"
              loading="lazy"
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "platform") {
    return (
      <div className="project-visual platform-visual" aria-hidden="true">
        <div className="platform-glow" />
        <div className="browser-shell">
          <div className="browser-bar"><span /><span /><span /></div>
          <div className="platform-grid">
            <aside>
              <b>Agent Connect</b>
              {Array.from({ length: 5 }).map((_, index) => <span key={index} />)}
            </aside>
            <main>
              <div className="platform-heading"><span /><i /></div>
              <div className="journey-row">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index}><small>0{index + 1}</small><span /></div>
                ))}
              </div>
              <div className="platform-cards"><div /><div /><div /></div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (type === "web") {
    return (
      <div className="project-visual web-visual">
        <div className="homepage-preview-shell" aria-hidden="true">
          <div className="homepage-preview-viewport tukod-preview">
            <iframe
              src="https://tukodph.com/"
              title="TukodPH homepage preview"
              loading="lazy"
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="project-visual game-visual">
        <div className="homepage-preview-shell" aria-hidden="true">
          <div className="homepage-preview-viewport watershed-preview">
            <iframe
              src="https://watershedrush.netlify.app/"
              title="Watershed Rush game preview"
              loading="lazy"
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual motion-visual" aria-hidden="true">
      <div className="motion-lines" />
      <div className="video-frame">
        <div className="video-label">HECM WORLD</div>
        <div className="speaker speaker-left"><span /></div>
        <div className="speaker speaker-right"><span /></div>
        <div className="video-lower-third"><b>INTERVIEW</b><span /></div>
        <div className="video-controls"><i /><span /><span /><span /></div>
      </div>
      <div className="motion-badge">EDIT • MOTION • AUDIO</div>
    </div>
  );
}
