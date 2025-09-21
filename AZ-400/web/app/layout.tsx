import "./globals.css";

export const metadata = {
  title: "Skunkworks AZ-400 DevOps Accelerator — Hands-On Azure DevOps, GitHub Actions & CI/CD",
  description: "Self-paced, interactive AZ-400 course with hands-on labs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
