type Props = {
  onNext: () => void;
};

export default function Intro({ onNext }: Props) {
  return (
    <section className="story-screen intro-screen">
      <div className="sun-glow" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />

      <div className="intro-content">
        <div className="floating-sunflower" aria-hidden="true">🌻</div>

        <p className="small-label">PARA SHIRLEY 💛</p>

        <h1>
          Hola,
          <br />
          <span>chiquitita.</span>
        </h1>

        <p className="intro-copy">
          Tengo algo que contarte sobre las flores amarillas de hoy...
        </p>

        <button className="main-button" onClick={onNext}>
          Tengo algo que contarte <span>→</span>
        </button>
      </div>

      <div className="bee bee-intro" aria-hidden="true">🐝</div>
      <div className="grass-line" />
    </section>
  );
}
