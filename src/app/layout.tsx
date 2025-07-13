import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const manrope = Manrope({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Repli AI",
	description:
		"Boost productivity with Repli AI’s 24-hour email summaries, instant WhatsApp email sending, and AI-driven automated responses tailored to your preferences.",
	keywords: [
		"email automation",
		"AI email automation",
		"daily email summaries",
		"WhatsApp email integration",
		"AI email assistant",
		"inbox management",
		"smart email tool",
		"email productivity",
		"automated email responses",
		"email management tools",
		"AI for email",
		"smart inbox",
		"email summarization",
		"email automation platform",
		"AI-powered email",
		"Repli AI",
	],
	icons: {
		icon: "/favicon.svg",
	},
	robots: "index, follow",
	openGraph: {
		title: "Repli AI: Daily Email Summaries & Smart Automation",
		description:
			"Simplify email management with Repli AI’s daily summaries, WhatsApp email sending, and personalized AI automation for seamless communication.",
		type: "website",
		url: "https://repli.vercel.app",
		siteName: "Repli AI",
		images: [
			{
				url: "https://repli.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Repli AI - Smart Email Management and Automation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Repli AI: Daily Email Summaries & Smart Automation",
		description:
			"Simplify email management with Repli AI’s daily summaries, WhatsApp email sending, and personalized AI automation for seamless communication.",
		images: ["https://repli.vercel.app/og-image.jpg"],
		creator: "@RepliAI",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Repli AI",
		description:
			"Boost productivity with Repli AI’s 24-hour email summaries, instant WhatsApp email sending, and AI-driven automated responses tailored to your preferences.",
		applicationCategory: "BusinessApplication",
		url: "https://repli.vercel.app",
		image: "https://repli.vercel.app/og-image.jpg",
	};

	return (
		<ClerkProvider appearance={{ baseTheme: neobrutalism }}>
			<html lang="en" className={`${manrope.className} bg-white`}>
				<head>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
					/>
				</head>
				<body>
					<div>{children}</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
