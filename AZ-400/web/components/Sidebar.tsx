"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  title: string;
  path: string;
  children?: NavItem[];
};

// Simple loader: fetches precompiled navigation JSON
async function fetchNav(): Promise<NavItem[]> {
  const res = await fetch("/course-nav.json");
  return res.json();
}

export default function Sidebar() {
  const [nav, setNav] = useState<NavItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetchNav().then(setNav);
  }, []);

  return (
    <aside className="w-64 bg-gray-50 border-r p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Course Navigation</h2>
      <ul className="space-y-2">
        {nav.map((module) => (
          <li key={module.path}>
            <details open>
              <summary className="font-semibold">{module.title}</summary>
              <ul className="ml-4 space-y-1">
                {module.children?.map((level) => (
                  <li key={level.path}>
                    <details>
                      <summary>{level.title}</summary>
                      <ul className="ml-4">
                        {level.children?.map((lesson) => (
                          <li key={lesson.path}>
                            <Link
                              href={lesson.path}
                              className={`block px-2 py-1 rounded ${
                                pathname === lesson.path
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "hover:bg-gray-200"
                              }`}
                            >
                              {lesson.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </aside>
  );
}
