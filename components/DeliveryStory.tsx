type Props = {
  onNext: () => void;
};

export default function DeliveryStory({ onNext }: Props) {
  return (
    <section className="story-screen story-screen-light">
      <div className="delivery-card">
        <p className="small-label">CAPÍTULO 02</p>

        <h2>Entonces pensé...</h2>

        <p className="big-thought">
          &quot;Bueno, se las mando.&quot; 🌻
        </p>

        <div className="timeline">
          <div className="time-block">
            <span className="time">2:00 PM</span>
            <span className="time-label">Tú salías del hospital</span>
          </div>

          <div className="timeline-line">
            <span className="truck">🚚</span>
          </div>

          <div className="time-block">
            <span className="time">3:00–5:00 PM</span>
            <span className="time-label">Empezaban los deliveries</span>
          </div>
        </div>

        <div className="sad-box">
          <span>🥲</span>
          <div>
            <strong>Y no llegábamos a tiempo.</strong>
            <p>Ash, la misión flores amarillas se ponia dificil.</p>
          </div>
        </div>

        <button className="main-button" onClick={onNext}>
          Pero no me rendí <span>→</span>
        </button>
      </div>

      <div className="bee bee-story" aria-hidden="true">🐝</div>
    </section>
  );
}
