"use client";

import { AppContextUse } from "@/context/appContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const GetStartedPage = () => {
	const { phoneOrEmail, setPhoneOrEmail } = AppContextUse();
	const [error, setError] = useState("");
	const [isValid, setIsValid] = useState(false);

	const validateInput = (value: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?[1-9]\d{1,14}$/;

		if (value.trim() === "") {
			setError("Please enter a phone number or email address.");
			setIsValid(false);
		} else if (emailRegex.test(value)) {
			setError("");
			setIsValid(true);
		} else if (phoneRegex.test(value)) {
			setError("");
			setIsValid(true);
		} else {
			setError("Please enter a valid phone number or email address.");
			setIsValid(false);
		}
	};

	useEffect(() => {
		validateInput(phoneOrEmail);
	}, [phoneOrEmail]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPhoneOrEmail(value);
		validateInput(value);
	};

	return (
		<section className='relative w-full h-screen'>
			<div className='px-[16px] pt-[12px] pb-[100px]'>
				<div className='max-w-[800px] mx-auto'>
					<Link
						href='/'
						className='py-[9px] flex items-center gap-[8px] mb-[20px]'>
						<IoMdArrowBack size={20} className='text-[#000000]/60' />
						<span className='text-[16px] font-medium'>Get Started</span>
					</Link>
				</div>
				<div className='flex gap-[8px] mb-[20px] w-full justify-center'>
					<div className='bg-[#8A226F] rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#000000]/10 rounded-[15px] w-[104px] h-[4px]' />
					<div className='bg-[#000000]/10 rounded-[15px] w-[104px] h-[4px]' />
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-[24px] tracking-[0.5%] font-medium mb-[16px]'>
						Enter your phone number or email to get started
					</h1>
					<p className='text-[#000000]/60 mb-[24px]'>
						We will send you a verification code for confirmation
					</p>
					<div className='w-full md:w-[60%] lg:w-[40%] mb-2'>
						<input
							type='text'
							required
							placeholder='Enter phone number or email'
							onChange={handleInputChange}
							value={phoneOrEmail}
							className={`w-full border ${
								error ? "border-red-500" : "border-[#000000]/20"
							} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
						/>
						{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
					</div>
				</div>
			</div>

			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href={isValid ? "/profile" : "#"}
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

export default GetStartedPage;
