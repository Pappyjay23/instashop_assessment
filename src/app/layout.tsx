import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { AppContextProvider } from "@/context/appContext";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "InstaShop",
	description: "A product store to show and preview products from InstaShop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AppContextProvider>
			<html lang='en'>
				<head>
					<link rel='icon' href='favicon.ico' />
				</head>
				<body className={dmSans.className}>
					{children}
					<ServiceWorkerRegistration />
				</body>
			</html>
		</AppContextProvider>
	);
}
