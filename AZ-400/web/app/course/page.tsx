"use client";
import Link from "next/link";
import { Grid, Column, Tile } from "@carbon/react";
import { useStore } from "@/lib/store";

export default function CourseHome() {
  const { summary } = useStore();
  return (
    <div>
      <h1 className="cds--type-productive-heading-05">AZ-400 DevOps Accelerator</h1>
      <p className="cds--type-body-long-01">Self-paced, hands-on learning across three modules.</p>
      <Grid fullWidth className="mt-6">
        {[1,2,3].map((m)=> (
          <Column key={m} lg={4} md={4} sm={4}>
            <Tile>
              <h2 className="cds--type-productive-heading-03">Module {m}</h2>
              <div className="mt-2">Progress: {Math.round(summary[m]?.xpPct ?? 0)}%</div>
              <Link href={`/course/module-${m}/level-foundations`} className="cds--link">Open</Link>
            </Tile>
          </Column>
        ))}
      </Grid>
    </div>
  );
}


