import BackToTop from "./backToTop";
import HomePage from "./08-language-academy/page";

export const metadata = {
  title: "Home - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}