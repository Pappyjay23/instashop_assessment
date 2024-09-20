import { Metadata } from "next";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export const metadata: Metadata = {
	title: "Get Started",
};
const GetStartedpage = () => {
	return (
		<section className='relative w-full h-screen'>
			<div className='px-[16px] pt-[12px] pb-[100px]'>
				<div className="max-w-[800px] mx-auto">
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
					<input
						type='text'
						placeholder='Enter phone number or email'
						className='w-full md:w-[60%] lg:w-[40%] border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
					/>
				</div>
			</div>

			<div className='px-[16px] fixed bottom-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href='/profile'
						className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center'>
						Continue
					</Link>
				</div>
			</div>
		</section>
	);
};

export default GetStartedpage;
