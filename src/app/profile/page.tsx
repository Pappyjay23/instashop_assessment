import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import InstagramLogo from "@/assets/images/instagram-logo.png";
import TiktokLogo from "@/assets/images/tiktok-logo.png";
import GoogleLogo from "@/assets/images/google-logo.png";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile Setup",
};

const ProfilePage = () => {
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
							<input
								type='text'
								placeholder='Full name'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='text'
								placeholder='Username'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='tel'
								placeholder='Phone number'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='email'
								placeholder='Email'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href='/create-store'
						className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center'>
						Continue
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
