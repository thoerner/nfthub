"use client";
import Nav from "../components/Nav";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default ClientLayout;
