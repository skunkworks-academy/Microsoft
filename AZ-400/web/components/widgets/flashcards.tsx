"use client";
import { useEffect, useState } from "react";
import { Tile, Button } from "@carbon/react";
import { useStore } from "@/lib/store";

export function Flashcards({ src }: { src: string }) {
  const [cards, setCards] = useState<any[]>([]);
  const { addXp, completeLevel } = useStore();
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { fetch(src).then(r=>r.json()).then(d=> setCards(d.activities ?? [])); }, [src]);
  if (!cards.length) return null;
  const card = cards[idx];

  const onNext = () => {
    if (idx < cards.length - 1) { setIdx(idx+1); setRevealed(false); }
    else { addXp("1", 10); completeLevel("1", "foundations"); }
  };

  return (
    <Tile>
      <p className="cds--type-productive-heading-03">{card.prompt}</p>
      {revealed && <p className="cds--type-body-long-01" style={{ marginTop: ".75rem" }}>{card.config?.answer}</p>}
      <div style={{ display:"flex", gap:".5rem", marginTop:"1rem" }}>
        <Button kind="secondary" onClick={()=>setRevealed(true)}>Reveal</Button>
        <Button kind="primary" onClick={onNext}>{idx < cards.length - 1 ? "Next" : "Finish"}</Button>
      </div>
    </Tile>
  );
}
