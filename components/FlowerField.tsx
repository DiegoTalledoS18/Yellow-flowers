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
            Array.from({ length: 190 }, (_, index) => {
                /*
                 * Distribución pseudoaleatoria pero estable.
                 * Las flores se concentran bastante en los laterales
                 * para dejar libre la zona central del mensaje.
                 */

                const seed1 = (index * 47.3) % 100;
                const seed2 = (index * 19.7) % 100;

                let left = seed1;

                /*
                 * Damos más densidad a los laterales.
                 * La zona central queda relativamente despejada
                 * para que se pueda leer el mensaje.
                 */
                if (index % 3 === 0) {
                    left = index % 2 === 0
                        ? (index * 31.7) % 32
                        : 68 + ((index * 29.3) % 32);
                }

                return {
                    left,
                    bottom: 5 + (seed2 % 43),
                    scale: 0.35 + ((index * 13) % 75) / 100,
                    delay: (index % 20) * 0.1,
                    rotate: -10 + ((index * 23) % 21),
                };
            }),
        []
    );

    return (
        <section className="final-field">

            {/* =========================================================
          CIELO
      ========================================================= */}
            <div className="final-sky" />

            <div className="sun" />

            <div className="cloud final-cloud cloud-left" />
            <div className="cloud final-cloud cloud-right" />


            {/* =========================================================
          MENSAJE CENTRAL
      ========================================================= */}
            <div className="final-message">

                <p className="small-label final-label">
                    Y ENTONCES...
                </p>

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

                <div className="signature">
                    — Para la mejor psicologa que hayy 🌻
                </div>

            </div>


            {/* =========================================================
          CAMPO
      ========================================================= */}
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
                                transform: `
                  scale(${flower.scale})
                  rotate(${flower.rotate}deg)
                `,
                                animationDelay: `${flower.delay}s`,
                            }}
                        >
              🌻
            </span>
                    ))}

                </div>

                <div className="grass-front" />

            </div>


            {/* =========================================================
          ABEJAS
      ========================================================= */}
            <div
                className="bee final-bee bee-one"
                aria-hidden="true"
            >
                🐝
            </div>

            <div
                className="bee final-bee bee-two"
                aria-hidden="true"
            >
                🐝
            </div>


            {/* =========================================================
          BOTÓN
      ========================================================= */}
            <button
                className="restart-button"
                onClick={onRestart}
            >
                Volver a empezar ↺
            </button>


            {/* =========================================================
          RESPONSIVE ESPECÍFICO DE ESTA PANTALLA
          No necesitas modificar globals.css.
      ========================================================= */}
            <style jsx>{`

        /* ============================================
           TABLET
        ============================================ */

        @media (max-width: 900px) {

          .final-message {
            width: min(90%, 600px);
            top: 9%;
          }

          .final-message h2 {
            font-size: clamp(3.2rem, 8vw, 5rem);
          }

          .field {
            height: 55%;
          }

          .field-flower {
            font-size: 38px;
          }

          .sun {
            width: 105px;
            height: 105px;
            right: 8%;
            top: 10%;
          }

          .bee-one {
            left: 15%;
            top: 40%;
          }

          .bee-two {
            right: 15%;
            top: 43%;
          }
        }


        /* ============================================
           MOBILE
        ============================================ */

        @media (max-width: 640px) {

          .final-field {
            min-height: 100svh;
            height: 100svh;
          }


          /* -----------------------------
             CIELO
          ----------------------------- */

          .final-sky {
            inset: 0 0 42% 0;
          }


          /* -----------------------------
             SOL
          ----------------------------- */

          .sun {
            width: 72px;
            height: 72px;

            right: 7%;
            top: 8%;

            box-shadow:
              0 0 45px rgba(255, 215, 96, 0.7);
          }


          /* -----------------------------
             NUBES
          ----------------------------- */

          .final-cloud {
            transform: scale(0.65);
          }

          .cloud-left {
            left: -4%;
            top: 15%;
          }

          .cloud-right {
            right: -7%;
            top: 27%;
          }


          /* -----------------------------
             MENSAJE
          ----------------------------- */

          .final-message {

            top: 7%;

            left: 50%;

            width: calc(100% - 32px);

            max-width: 420px;

            padding: 0 4px;

            transform: translateX(-50%);
          }


          .final-label {
            font-size: 0.58rem;

            letter-spacing: 0.18em;

            margin-bottom: 10px;
          }


          .final-message h2 {

            font-size: clamp(
              2.65rem,
              12vw,
              4rem
            );

            line-height: 0.9;

            letter-spacing: -0.045em;

            margin: 0;
          }


          .final-message p {

            margin-top: 17px;

            font-size: 0.82rem;

            line-height: 1.45;
          }


          .signature {

            font-size: 0.82rem;

            margin-top: 8px;
          }


          /* -----------------------------
             CAMPO
          ----------------------------- */

          .field {

            left: -12%;

            width: 124%;

            bottom: -2%;

            height: 50%;
          }


          /*
           * En móvil reducimos el tamaño de las flores
           * para que entren muchas sin verse gigantes.
           */

          .field-flower {

            font-size: 31px;

            transform-origin: bottom center;

          }


          /*
           * La parte frontal del campo se mantiene
           * más baja para no cubrir el mensaje.
           */

          .grass-front {

            height: 22%;

          }


          /* -----------------------------
             ABEJAS
          ----------------------------- */

          .bee {

            font-size: 1.45rem;

          }


          .bee-one {

            left: 8%;

            top: 38%;

          }


          .bee-two {

            right: 8%;

            top: 42%;

          }


          /* -----------------------------
             BOTÓN
          ----------------------------- */

          .restart-button {

            right: 12px;

            bottom: 12px;

            padding: 8px 12px;

            font-size: 0.68rem;

          }

        }


        /* ============================================
           TELÉFONOS PEQUEÑOS
           Ej: 360px / 375px
        ============================================ */

        @media (max-width: 390px) {

          .final-message {

            top: 6%;

            width: calc(100% - 24px);

          }


          .final-label {

            font-size: 0.52rem;

            margin-bottom: 8px;

          }


          .final-message h2 {

            font-size: clamp(
              2.35rem,
              12vw,
              3.3rem
            );

          }


          .final-message p {

            font-size: 0.76rem;

            margin-top: 14px;

          }


          .signature {

            font-size: 0.75rem;

          }


          .field {

            height: 48%;

          }


          .field-flower {

            font-size: 27px;

          }


          .sun {

            width: 60px;

            height: 60px;

          }


          .bee {

            font-size: 1.2rem;

          }


          .restart-button {

            font-size: 0.62rem;

            padding: 7px 10px;

          }

        }

      `}</style>

        </section>
    );
}