type Props = {
  onNext: () => void;
};

const attempts = [
  { title: "Florería #1", detail: "No tenía número", icon: "📵" },
  { title: "Florería #2", detail: "Ya no le quedaban", icon: "🥀" },
  { title: "Florería #3", detail: "No me respondió", icon: "👻" },
];

export default function NanaStory({ onNext }: Props) {
  return (
    <section className="story-screen story-screen-light">
      <div className="nana-card">
        <p className="small-label">CAPÍTULO 03</p>

        <h2>Después te fuiste a Ñaña...</h2>

        <p className="nana-intro">
          Y ahí empezó mi pequeña misión imposible. 🫡
        </p>

        <div className="attempts">
          {attempts.map((attempt) => (
            <div className="attempt" key={attempt.title}>
              <div className="attempt-icon">{attempt.icon}</div>
              <div>
                <strong>{attempt.title}</strong>
                <span>{attempt.detail}</span>
              </div>
              <span className="cross">×</span>
            </div>
          ))}
        </div>

        <p className="nana-bottom">
          Busqué, pregunté, insistí...
          <br />
          pero ninguna flor quería llegar hasta Ñaña. 😭
        </p>

        <button className="main-button" onClick={onNext}>
          Entonces entendí algo <span>→</span>
        </button>
      </div>

      <div className="bee bee-story" aria-hidden="true">🐝</div>
    </section>
  );
}
