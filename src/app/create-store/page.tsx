"use client";

import AddLogoIcon from "@/assets/images/instagram-logo-white.png";
import UploadImg from "@/assets/images/upload-img.png";
import { AppContextUse, Store } from "@/context/appContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface Errors {
	storeLogo?: string;
	storeName?: string;
	storeTagName?: string;
	storePhoneNumber?: string;
	storeEmail?: string;
	category?: string;
}

const CreateStorePage = () => {
	const { storeData, setStoreData } = AppContextUse();
	const [errors, setErrors] = useState<Errors>({});
	const [isValid, setIsValid] = useState(false);

	const validateInput = () => {
		const newErrors: Errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?[1-9]\d{1,14}$/;

		if (!storeData.storeLogo) {
			newErrors.storeLogo = "Store logo is required";
		}

		if (!storeData.storeName.trim()) {
			newErrors.storeName = "Store name is required";
		}

		if (!storeData.storeTagName.trim()) {
			newErrors.storeTagName = "Store tag name is required";
		}

		if (!storeData.storePhoneNumber.trim()) {
			newErrors.storePhoneNumber = "Store phone number is required";
		} else if (!phoneRegex.test(storeData.storePhoneNumber)) {
			newErrors.storePhoneNumber = "Invalid phone number";
		}

		if (!storeData.storeEmail.trim()) {
			newErrors.storeEmail = "Store email is required";
		} else if (!emailRegex.test(storeData.storeEmail)) {
			newErrors.storeEmail = "Invalid email address";
		}

		if (!storeData.category.trim()) {
			newErrors.category = "Category is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	useEffect(() => {
		const formIsValid = validateInput();
		setIsValid(formIsValid);
	}, [storeData]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setStoreData({ ...storeData, storeLogo: reader.result as string });
			};
			reader.readAsDataURL(file);
		}
	};

	const handleInputChange = (field: keyof Store, value: string) => {
		setStoreData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<section className='relative w-full h-screen'>
			<div className='px-[16px] pt-[12px] pb-[100px]'>
				<div className='max-w-[800px] mx-auto'>
					<Link
						href='/profile'
						className='py-[9px] flex items-center gap-[8px] mb-[20px]'>
						<IoMdArrowBack size={20} className='text-[#000000]/60' />
						<span className='text-[16px] font-medium'>Get Started</span>
					</Link>
				</div>

				<div className='flex gap-[8px] mb-[20px] w-full justify-center'>
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
				</div>
				<div className='flex flex-col md:items-center px-[4px]'>
					<div className='py-[16px] w-full md:w-[60%] lg:w-[40%] border border-[#000000]/20 rounded-[12px] mb-[8px] flex flex-col items-center'>
						<label
							htmlFor='store-logo-upload'
							className='cursor-pointer flex flex-col items-center'>
							<div className='flex justify-center items-center relative mb-[12px]'>
								{storeData.storeLogo ? (
									<div className='w-[200px] h-[200px] relative rounded-[20px] overflow-hidden object-cover'>
										<Image
											src={storeData.storeLogo}
											alt='Uploaded Logo'
											fill
											objectFit='cover'
										/>
									</div>
								) : (
									<>
										<Image
											src={UploadImg}
											alt='Upload Image'
											width={80}
											height={80}
										/>
										<Image
											src={AddLogoIcon}
											alt='Add Logo Icon'
											width={24}
											height={24}
											className='absolute'
										/>
									</>
								)}
							</div>

							<span className='text-[#000000]/40 text-[12px]'>
								{storeData.storeLogo
									? "Change store logo"
									: "Upload store logo"}
							</span>
						</label>
						<input
							type='file'
							name='store-logo-upload'
							id='store-logo-upload'
							accept='image/*'
							onChange={handleFileChange}
							className='hidden'
						/>
						{errors.storeLogo && (
							<p className='text-red-500 text-sm mt-1'>{errors.storeLogo}</p>
						)}
					</div>

					<div className='w-full md:w-[60%] lg:w-[40%]'>
						<div className='flex flex-col gap-[8px]'>
							<div>
								<input
									type='text'
									placeholder='Store name'
									onChange={(e) =>
										handleInputChange("storeName", e.target.value)
									}
									value={storeData.storeName}
									className={`w-full border ${
										errors.storeName ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors.storeName && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.storeName}
									</p>
								)}
							</div>
							<div>
								<input
									type='text'
									placeholder='Store tag name'
									onChange={(e) =>
										handleInputChange("storeTagName", e.target.value)
									}
									value={storeData.storeTagName}
									className={`w-full border ${
										errors.storeTagName
											? "border-red-500"
											: "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors.storeTagName && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.storeTagName}
									</p>
								)}
							</div>
							<div>
								<input
									type='tel'
									placeholder='Store phone number'
									onChange={(e) =>
										handleInputChange("storePhoneNumber", e.target.value)
									}
									value={storeData.storePhoneNumber}
									className={`w-full border ${
										errors.storePhoneNumber
											? "border-red-500"
											: "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors.storePhoneNumber && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.storePhoneNumber}
									</p>
								)}
							</div>
							<div>
								<input
									type='email'
									placeholder='Store email'
									onChange={(e) =>
										handleInputChange("storeEmail", e.target.value)
									}
									value={storeData.storeEmail}
									className={`w-full border ${
										errors.storeEmail ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors.storeEmail && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.storeEmail}
									</p>
								)}
							</div>
							<div>
								<input
									type='text'
									placeholder='Category'
									onChange={(e) =>
										handleInputChange("category", e.target.value)
									}
									value={storeData.category}
									className={`w-full border ${
										errors.category ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors.category && (
									<p className='text-red-500 text-sm mt-1'>{errors.category}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href={isValid ? "/create-product" : "#"}
						className={`${
							isValid ? "bg-[#8A226F]" : "bg-[#8A226F]/50 cursor-not-allowed"
						} outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center`}
						onClick={(e) => !isValid && e.preventDefault()}>
						Continue
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CreateStorePage;
