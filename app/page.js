import BackToTop from "./backToTop";
import HomePage from "./08-language-academy/page";

export const metadata = {
  title: "Skillersity",
  description: "Online Courses & Education",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}
