type ProjectVisualProps = {
  type: "system" | "platform" | "web" | "motion";
};

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === "system") {
    return (
      <div className="project-visual system-visual" aria-hidden="true">
        <div className="system-sidebar">
          <span className="mini-logo">E</span>
          {Array.from({ length: 6 }).map((_, index) => (
            <span className={index === 2 ? "active" : ""} key={index} />
          ))}
        </div>
        <div className="system-content">
          <div className="system-topbar">
            <span />
            <span />
          </div>
          <div className="system-metrics">
            <div><strong>Records</strong><b>Organized</b></div>
            <div><strong>Loans</strong><b>Active</b></div>
            <div><strong>Reports</strong><b>Ready</b></div>
          </div>
          <div className="system-table">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}><span /><span /><span /><i /></div>
            ))}
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
      <div className="project-visual web-visual" aria-hidden="true">
        <div className="web-word">TUKOD</div>
        <div className="web-window web-window-one">
          <div className="web-nav"><b>TUKODPH</b><span /><span /><span /></div>
          <div className="web-hero"><strong>Build better.</strong><i /></div>
        </div>
        <div className="web-window web-window-two">
          <div className="web-card-title" />
          <div className="web-card-grid"><span /><span /><span /><span /></div>
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
