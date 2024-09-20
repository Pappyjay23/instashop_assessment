import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create your Product",
};

export default function CreateProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
