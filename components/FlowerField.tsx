 "use client";

import { useMemo } from "react";

type Props = {
  onRestart: () => void;
};

type Flower = {
  left: number;
  bottom: number;
  scale: number;
  delay: number;
  rotate: number;
};

export default function FlowerField({ onRestart }: Props) {
  const flowers = useMemo<Flower[]>(
    () =>
      Array.from({ length: 115 }, (_, index) => ({
        left: (index * 47.3) % 100,
        bottom: 5 + ((index * 19.7) % 36),
        scale: 0.45 + ((index * 13) % 65) / 100,
        delay: (index % 15) * 0.12,
        rotate: -8 + ((index * 23) % 17),
      })),
    []
  );

  return (
    <section className="final-field">
      <div className="final-sky" />
      <div className="sun" />
      <div className="cloud final-cloud cloud-left" />
      <div className="cloud final-cloud cloud-right" />

      <div className="final-message">
        <p className="small-label final-label">Y ENTONCES...</p>

        <h2>
          Tú mereces
          <br />
          <span>un campo entero.</span>
        </h2>

        <p>
          No pude darte unas flores hoy.
          <br />
          Así que hice que aparecieran todas aquí. 💛
        </p>

        <div className="signature">— Para ti, Shirley 🌻</div>
      </div>

      <div className="field">
        <div className="field-back" />
        <div className="flower-layer">
          {flowers.map((flower, index) => (
            <span
              className="field-flower"
              key={index}
              style={{
                left: `${flower.left}%`,
                bottom: `${flower.bottom}%`,
                transform: `scale(${flower.scale}) rotate(${flower.rotate}deg)`,
                animationDelay: `${flower.delay}s`,
              }}
            >
              🌻
            </span>
          ))}
        </div>

        <div className="grass-front" />
      </div>

      <div className="bee final-bee bee-one" aria-hidden="true">🐝</div>
      <div className="bee final-bee bee-two" aria-hidden="true">🐝</div>

      <button className="restart-button" onClick={onRestart}>
        Volver a empezar ↺
      </button>
    </section>
  );
}
