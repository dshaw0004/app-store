import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "App Bucket",
	description: "app store made by dshaw004.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					{children}
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
