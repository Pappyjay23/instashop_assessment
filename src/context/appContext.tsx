"use client";

import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

export interface Profile {
	fullName: string;
	userName: string;
	phoneNumber: string;
	email: string;
}

export interface Store {
	storeLogo: string;
	storeName: string;
	storeTagName: string;
	storePhoneNumber: string;
	storeEmail: string;
	category: string;
}

export interface ProductDetails {
	productTitle: string;
	productDescription: string;
	productCurrentPrice: string;
	productOldPrice: string;
	productCollection: string;
	productInventoryStocks: string;
}

export interface ProductImage {
	id: string; file: File; url: string
}

export interface Product {
	productDetails: ProductDetails;
	productImages: ProductImage[];
}

interface AppContextType {
	phoneOrEmail: string;
	setPhoneOrEmail: Dispatch<SetStateAction<string>>;
	profileData: Profile;
	setProfileData: Dispatch<SetStateAction<Profile>>;
	storeData: Store;
	setStoreData: Dispatch<SetStateAction<Store>>;
	product: Product;
	setProduct: Dispatch<SetStateAction<Product>>;
}
const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [phoneOrEmail, setPhoneOrEmail] = useState<string>("");
	const [profileData, setProfileData] = useState({
		fullName: "",
		userName: "",
		phoneNumber: "",
		email: "",
	});
	const [storeData, setStoreData] = useState<Store>({
		storeLogo: "",
		storeName: "",
		storeTagName: "",
		storePhoneNumber: "",
		storeEmail: "",
		category: "",
	});
	const [product, setProduct] = useState<Product>({
		productDetails: {
			productTitle: "",
			productDescription: "",
			productCurrentPrice: "",
			productOldPrice: "",
			productCollection: "",
			productInventoryStocks: "",
		},
		productImages: [],
	});

	const values: AppContextType = {
		phoneOrEmail,
		setPhoneOrEmail,
		profileData,
		setProfileData,
		storeData,
		setStoreData,
		product,
		setProduct,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const AppContextUse = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a AppContextProvider");
	}
	return context;
};
