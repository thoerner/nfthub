# Next.js NFT Minting App

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The app allows users to mint NFTs and view their own collection. It is built with TypeScript and uses key packages like Ethers and WAGMI for seamless blockchain interactions.

## About

This application enables users to mint NFTs and view their collections. It incorporates a variety of technologies including TypeScript, Next.js, Ethers V5, and WAGMI 0.12.1 for a robust, user-friendly experience.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

### Prerequisites

- Node.js
- Ethers V5
- WAGMI 0.12.1
- Rainbowkit 0.12.1

Please ensure you have the above prerequisites installed. To interact with the blockchain, you'll need to have the following environment variables set up:

NEXT_PUBLIC_ALCHEMY_ID   
NEXT_PUBLIC_CONTRACT_ADDRESS   

## TypeScript in the Project

The project leverages TypeScript for better type safety and code maintainability. The strict typing helps catch errors early in the development process, making the codebase more robust.

## Pages

- `/app/page.tsx`: This is the landing page, designed according to the Figma sketch that was shared.
- `/app/mint/page.tsx`: This is the mint page where users can perform simple minting operations. The UI prompts users to connect their wallet if it is not connected when attempting to mint.
- `/app/collection/page.tsx`: This is the collection page where users can view their NFTs. The UI prompts users to connect their wallet if it is not connect when viewing their collection.

## User Experience

To ensure a smooth user experience, the application incorporates loading states during various operations. When a user is in the process of minting an NFT, a loader appears on the screen to indicate that the process is ongoing.

## Mobile Compatibility

The app is designed to be responsive and provides a seamless experience on both desktop and mobile devices. 

## Deploy on Vercel

For deployment, use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). 

For more detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).