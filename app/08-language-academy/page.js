import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Skillersity - Online Courses & Education",
  description: "Online Courses & Education",
};

const LanguageAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LanguageAcademyPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
