import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import UploadImg from "@/assets/images/upload-img.png";
import AddLogoIcon from "@/assets/images/instagram-logo-white.png";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create your Store",
};

const CreateStorePage = () => {
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
						<div className='w-[80px] h-[80px] flex justify-center items-center relative mb-[12px]'>
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
						</div>

						<span className='text-[#000000]/40 text-[12px]'>
							Upload store logo
						</span>
					</div>

					<div className='w-full md:w-[60%] lg:w-[40%]'>
						<div className='flex flex-col gap-[8px]'>
							<input
								type='text'
								placeholder='Store name'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='text'
								placeholder='Store tag name'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='tel'
								placeholder='Store phone number'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='email'
								placeholder='Store email'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
							<input
								type='text'
								placeholder='Category'
								className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href='/create-product'
						className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center'>
						Continue
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CreateStorePage;
