"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import StoryStep from "@/components/StoryStep";
import DeliveryStory from "@/components/DeliveryStory";
import NanaStory from "@/components/NanaStory";
import FlowerField from "@/components/FlowerField";

const steps = ["intro", "work", "delivery", "nana", "field"] as const;
type Step = (typeof steps)[number];

export default function Home() {
  const [step, setStep] = useState<Step>("intro");

  const next = () => {
    const index = steps.indexOf(step);
    if (index < steps.length - 1) setStep(steps[index + 1]);
  };

  const restart = () => setStep("intro");

  return (
      <main className="experience">
        {step === "intro" && <Intro onNext={next} />}

        {step === "work" && (
            <StoryStep
                eyebrow="CAPITULO 01"
                title="Hoy quería darte tus flores."
                text={
                  <>
                    Pero yo trabajando en surco y tu trabajando en santa anita. Yo pensé que estabas en el Hipólito Unanue...
                    <br />
                    <br />
                    pero resulta que estabas en otro hospital. 😭
                  </>
                }
                emoji="🏥"
                onNext={next}
            />
        )}

        {step === "delivery" && <DeliveryStory onNext={next} />}

        {step === "nana" && <NanaStory onNext={next} />}

        {step === "field" && <FlowerField onRestart={restart} />}
      </main>
  );
}
