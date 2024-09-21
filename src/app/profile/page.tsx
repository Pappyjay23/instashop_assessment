"use client";

import GoogleLogo from "@/assets/images/google-logo.png";
import InstagramLogo from "@/assets/images/instagram-logo.png";
import TiktokLogo from "@/assets/images/tiktok-logo.png";
import { AppContextUse, Profile } from "@/context/appContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const ProfilePage = () => {
	const { profileData, setProfileData } = AppContextUse();
	const [errors, setErrors] = useState<Profile>();
	const [isValid, setIsValid] = useState(false);

	const validateInput = () => {
		const newErrors: Profile = {
			fullName: "",
			userName: "",
			phoneNumber: "",
			email: "",
		};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?[1-9]\d{1,14}$/;

		if (!profileData.fullName.trim()) {
			newErrors.fullName = "Full name is required";
		}

		if (!profileData.userName.trim()) {
			newErrors.userName = "Username is required";
		}

		if (!profileData.phoneNumber.trim()) {
			newErrors.phoneNumber = "Phone number is required";
		} else if (!phoneRegex.test(profileData.phoneNumber)) {
			newErrors.phoneNumber = "Invalid phone number";
		}

		if (!profileData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(profileData.email)) {
			newErrors.email = "Invalid email address";
		}

		setErrors(newErrors);
		return Object.values(newErrors).every((value) => value === "");
	};

	useEffect(() => {
		const formIsValid = validateInput();
		setIsValid(formIsValid);
	}, [profileData]);

	const handleInputChange = (field: keyof Profile, value: string) => {
		setProfileData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<section className='relative w-full h-screen'>
			<div className='px-[16px] pt-[12px] pb-[100px]'>
				<div className='max-w-[800px] mx-auto'>
					<Link
						href='/get-started'
						className='py-[9px] flex items-center gap-[8px] mb-[20px]'>
						<IoMdArrowBack size={20} className='text-[#000000]/60' />
						<span className='text-[16px] font-medium'>Get Started</span>
					</Link>
				</div>
				<div className='flex gap-[8px] mb-[20px] w-full justify-center'>
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#000000]/10 rounded-[15px] w-[104px] h-[4px]' />
				</div>
				<div className='flex flex-col md:items-center px-[4px]'>
					<h1 className='text-[24px] tracking-[0.5%] font-medium mb-[24px]'>
						Complete profile setup
					</h1>
					<p className='text-[#000000]/60 mb-[16px]'>
						Connect your socials for quick setup
					</p>
					<div className='flex gap-8 mb-[24px]'>
						<div className='bg-[#000000]/[0.03] w-[101px] h-[48px] flex justify-center items-center rounded-[12px] cursor-pointer'>
							<Image
								src={InstagramLogo}
								alt='Instagram Logo'
								width={20}
								height={20}
							/>
						</div>
						<div className='bg-[#000000]/[0.03] w-[101px] h-[48px] flex justify-center items-center rounded-[12px] cursor-pointer'>
							<Image
								src={TiktokLogo}
								alt='Tiktok Logo'
								width={20}
								height={20}
							/>
						</div>
						<div className='bg-[#000000]/[0.03] w-[101px] h-[48px] flex justify-center items-center rounded-[12px] cursor-pointer'>
							<Image
								src={GoogleLogo}
								alt='Google Logo'
								width={20}
								height={20}
							/>
						</div>
					</div>
					<div className='w-full md:w-[60%] lg:w-[40%]'>
						<p className='mb-[16px]'>Or enter manually</p>
						<div className='flex flex-col gap-[12px]'>
							<div>
								<input
									type='text'
									placeholder='Full name'
									onChange={(e) =>
										handleInputChange("fullName", e.target.value)
									}
									value={profileData.fullName}
									className={`w-full border ${
										errors?.fullName ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors?.fullName && (
									<p className='text-red-500 text-sm mt-1'>
										{errors?.fullName}
									</p>
								)}
							</div>
							<div>
								<input
									type='text'
									placeholder='Username'
									onChange={(e) =>
										handleInputChange("userName", e.target.value)
									}
									value={profileData.userName}
									className={`w-full border ${
										errors?.userName ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors?.userName && (
									<p className='text-red-500 text-sm mt-1'>
										{errors?.userName}
									</p>
								)}
							</div>
							<div>
								<input
									type='tel'
									placeholder='Phone number'
									onChange={(e) =>
										handleInputChange("phoneNumber", e.target.value)
									}
									value={profileData.phoneNumber}
									className={`w-full border ${
										errors?.phoneNumber
											? "border-red-500"
											: "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors?.phoneNumber && (
									<p className='text-red-500 text-sm mt-1'>
										{errors?.phoneNumber}
									</p>
								)}
							</div>
							<div>
								<input
									type='email'
									placeholder='Email'
									onChange={(e) => handleInputChange("email", e.target.value)}
									value={profileData.email}
									className={`w-full border ${
										errors?.email ? "border-red-500" : "border-[#000000]/20"
									} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
								/>
								{errors?.email && (
									<p className='text-red-500 text-sm mt-1'>{errors?.email}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href={isValid ? "/create-store" : "#"}
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

export default ProfilePage;
