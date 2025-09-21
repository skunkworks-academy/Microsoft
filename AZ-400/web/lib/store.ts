import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Level = "foundations"|"comprehension"|"application"|"analysis"|"evaluation"|"capstone";
interface ModuleState { xp: number; completed: Level[]; badges: string[] }
interface State {
  modules: Record<string, ModuleState>;
  addXp: (module: string, amount: number) => void;
  completeLevel: (module: string, level: Level) => void;
  awardBadge: (module: string, id: string) => void;
  summary: Record<number, { xpPct: number }>;
}

export const useStore = create<State>()(persist((set, get) => ({
  modules: { "1":{xp:0,completed:[],badges:[]}, "2":{xp:0,completed:[],badges:[]}, "3":{xp:0,completed:[],badges:[]} },
  addXp: (module, amount) => set(s => ({ modules: { ...s.modules, [module]: { ...s.modules[module], xp: s.modules[module].xp + amount } } })),
  completeLevel: (module, level) => set(s => {
    const m = s.modules[module]; if (!m.completed.includes(level)) m.completed.push(level);
    return { modules: { ...s.modules, [module]: m } };
  }),
  awardBadge: (module, id) => set(s => {
    const m = s.modules[module]; if (!m.badges.includes(id)) m.badges.push(id);
    return { modules: { ...s.modules, [module]: m } };
  }),
  get summary() {
    const s = get();
    return { 1:{xpPct: Math.min(100, s.modules["1"].xp)}, 2:{xpPct: Math.min(100, s.modules["2"].xp)}, 3:{xpPct: Math.min(100, s.modules["3"].xp)} } as any;
  },
}), { name:"skw-az400", storage: createJSONStorage(() => localStorage) }));
