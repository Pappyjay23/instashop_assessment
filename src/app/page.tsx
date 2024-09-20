import Image from "next/image";
import WelcomeImg from "@/assets/images/shopping-sale.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Home() {
	const works = [
		"Reach Millions of Shoppers",
		"Easy Product Listing",
		"Secure and Fast Payments",
		"Boost your Visibility",
	];
	return (
		<section className='h-screen pt-[48px] px-[32px] relative'>
			<div className='pb-[100px] w-full flex flex-col items-center'>
				<Image
					src={WelcomeImg}
					alt='Welcome Image'
					width={296}
					height={210}
					className='mb-[25px]'
				/>
				<div className='flex flex-col items-center text-center tracking-[0.5%] mb-[25px]'>
					<h1 className='text-[36px] font-bold'>Welcome</h1>
					<p>The safest platfrom to shop from social media vendors</p>
				</div>
				<div className='bg-[#FFEAFA] py-[12px] px-[16px] w-full md:w-[60%] lg:w-[40%] rounded-[12px] border border-[#8A226F] flex flex-col gap-[12px]'>
					{works.map((work, i) => (
						<div key={i} className='flex items-center gap-[8px]'>
							<IoIosCheckmarkCircleOutline
								size={20}
								className='text-[#8A226F]'
							/>
							<span className='font-medium'>{work}</span>
						</div>
					))}
				</div>
			</div>

			<div className='px-[32px] fixed bottom-0 right-0 left-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href='/get-started'
						className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center'>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
}
