import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar tone="light" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
