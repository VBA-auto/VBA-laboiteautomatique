import FooterSpain from "@/components/Spain pages/FooterSpain";
import HeaderSpain from "@/components/Spain pages/HeaderSpain";
import SubHeaderSpain from "@/components/Spain pages/SubHeaderSpain";

const Layout = ({ children }) => {
  return (
    <>
      <SubHeaderSpain />
      <HeaderSpain />
      <main>{children}</main>
      <FooterSpain />
    </>
  );
};

export default Layout;
