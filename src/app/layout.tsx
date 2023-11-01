import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RainbowKitProvider, WagmiConfig, client, chains } from "../lib/wagmi";
import { Toaster } from "react-hot-toast";
import ClientLayout from "./layouts/clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFTHub",
  description: "High quality NFT collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig client={client}>
          <RainbowKitProvider chains={chains}>
            <Toaster position="bottom-center" />
            <ClientLayout>{children}</ClientLayout>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
