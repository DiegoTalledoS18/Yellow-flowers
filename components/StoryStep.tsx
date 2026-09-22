type Props = {
  eyebrow: string;
  title: string;
  text: React.ReactNode;
  emoji: string;
  onNext: () => void;
};

export default function StoryStep({
  eyebrow,
  title,
  text,
  emoji,
  onNext,
}: Props) {
  return (
    <section className="story-screen story-screen-light">
      <div className="story-card">
        <div className="story-illustration" aria-hidden="true">
          <span className="illustration-circle">{emoji}</span>
          <span className="tiny-flower">🌼</span>
        </div>

        <p className="small-label">{eyebrow}</p>

        <h2>{title}</h2>

        <div className="story-text">{text}</div>

        <button className="main-button" onClick={onNext}>
          Continuar <span>→</span>
        </button>
      </div>

      <div className="bee bee-story" aria-hidden="true">🐝</div>
      <div className="corner-flower flower-a" aria-hidden="true">🌻</div>
      <div className="corner-flower flower-b" aria-hidden="true">🌼</div>
    </section>
  );
}
