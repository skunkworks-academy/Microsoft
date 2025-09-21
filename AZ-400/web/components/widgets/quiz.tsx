"use client";
import { useEffect, useState } from "react";
import { Tile, Button, RadioButtonGroup, RadioButton } from "@carbon/react";
import { useStore } from "@/lib/store";

export function Quiz({ src }: { src: string }) {
  const [q, setQ] = useState<any | null>(null);
  const { addXp } = useStore();
  const [choice, setChoice] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => { fetch(src).then(r=>r.json()).then(setQ); }, [src]);
  if (!q) return null;

  const submit = () => { if (Number(choice) === q.correctIndex) addXp("1", 10); setDone(true); };

  return (
    <Tile style={{ marginTop: "1rem" }}>
      <p className="cds--type-productive-heading-03">{q.prompt}</p>
      <div style={{ marginTop: ".75rem" }}>
        <RadioButtonGroup name="quiz" onChange={(v)=>setChoice(v as string)} orientation="vertical">
          {q.choices.map((c: string, i: number) => (<RadioButton key={i} id={`q-${i}`} labelText={c} value={String(i)} />))}
        </RadioButtonGroup>
      </div>
      {!done ? (
        <Button style={{ marginTop: ".75rem" }} onClick={submit} disabled={choice===null}>Submit</Button>
      ) : (
        <p className="cds--type-helper-text" style={{ marginTop: ".75rem" }}>
          {Number(choice)===q.correctIndex ? "Correct! +10 XP" : "Not quite — review and try again."}
        </p>
      )}
    </Tile>
  );
}
