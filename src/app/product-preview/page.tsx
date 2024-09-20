import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill, GoKebabHorizontal, GoPeople } from "react-icons/go";
import {
	IoIosArrowDown,
	IoIosStar,
	IoIosStarHalf,
	IoMdArrowBack,
} from "react-icons/io";
import VendorImg from "@/assets/images/upload-img.png";
import ProductImg from "@/assets/images/product-img.png";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

export const metadata: Metadata = {
	title: "Product Preview",
};
const ProductPreviewPage = () => {
	return (
		<section className='relative w-full min-h-screen'>
			<div className='pb-[100px] max-w-[800px] mx-auto'>
				<div className='px-[16px] pt-[12px]'>
					<div className='flex items-center justify-between mb-[20px]'>
						<Link
							href='/create-product'
							className='py-[9px] flex items-center gap-[8px]'>
							<IoMdArrowBack size={20} className='text-[#000000]/60' />
							<span className='text-[16px] font-medium'>Product preview</span>
						</Link>
						<GoKebabHorizontal size={20} className='rotate-90 text-[#000]/60' />
					</div>
				</div>

				<div className='px-[16px] pb-[12px]'>
					<div className='flex flex-col items-center'>
						<div className='w-[360px] h-[360px] relative'>
							<Image
								src={ProductImg}
								alt='Product image'
								className='object-cover'
								fill
							/>
						</div>
					</div>
					<div className='mt-[16px]'>
						<div className='flex justify-between'>
							<span className='font-medium'>
								Gucci bag – the epitome of luxury and sophistication
							</span>
							<div className='flex gap-[4px]'>
								<div className='bg-[#0000]/5 p-[8px] rounded-full flex justify-center items-center w-[36px] h-[36px]'>
									<RiShareForwardLine size={20} className='text-[#0000]/60' />
								</div>
								<div className='bg-[#0000]/5 p-[8px] rounded-full flex justify-center items-center w-[36px] h-[36px]'>
									<AiOutlineHeart size={20} className='text-[#0000]/60' />
								</div>
							</div>
						</div>
						<div className='flex justify-between mt-[8px]'>
							<div className='flex items-center gap-[4px]'>
								<span className='font-medium text-[20px] text-[#3B3B3B]'>
									#18.0
								</span>
								<span className='font-medium text-[12px] text-[#ACACAC]'>
									#28.0
								</span>
								<div className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[24px] py-[2px] px-[8px] text-[10px] flex justify-center items-center'>
									25% OFF
								</div>
							</div>
							<div className='flex gap-[4px]'>
								<IoIosStar size={20} className='text-[#FFDB4C]' />
								<IoIosStar size={20} className='text-[#FFDB4C]' />
								<IoIosStar size={20} className='text-[#FFDB4C]' />
								<IoIosStar size={20} className='text-[#FFDB4C]' />
								<IoIosStarHalf size={20} className='text-[#FFDB4C]' />
								<span className='text-[#ACACAC]'>(5 sold)</span>
							</div>
						</div>
					</div>
				</div>

				<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>Select variants</span>
					</div>
					<div>
						<span className='mb-[8px] text-[10px] font-medium text-[#0000]/60'>
							Size: SMALL
						</span>
						<div className='flex flex-wrap gap-[8px]'>
							<div className='bg-[#0000]/90 outline-none border-0 text-white w-fit rounded-[24px] py-[2px] px-[8px] text-[10px] flex justify-center items-center'>
								Filter
							</div>
							{Array(5)
								.fill(5)
								.map((_, index) => (
									<div
										key={index}
										className='bg-[#0000]/[0.03] outline-none border-0 text-black w-fit rounded-[24px] py-[2px] px-[8px] text-[10px] flex justify-center items-center'>
										Filter
									</div>
								))}
						</div>
					</div>
					<div className='mt-[16px]'>
						<span className='mb-[8px] text-[10px] font-medium text-[#0000]/60'>
							Color: White
						</span>
						<div className='flex flex-wrap gap-[8px]'>
							{Array(3)
								.fill(3)
								.map((_, index) => (
									<div
										key={index}
										className='bg-[#0000]/[0.03] outline-none border-0 text-black w-fit rounded-[24px] py-[2px] px-[8px] text-[10px] flex justify-center items-center'>
										Filter
									</div>
								))}
						</div>
					</div>
				</div>

				<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>Product description</span>
						<IoIosArrowDown size={20} className='text-[#000]/60' />
					</div>
					<div>
						Wholesale and drop shipping are both welcomed. For wholesale,we will
						offer discount or free express shipping which only takes 3-7 days to
						arrive...
					</div>
					<p className='text-[#8A226F] text-[12px] font-medium'>Read more</p>
				</div>
				<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>About this vendor</span>
						<IoIosArrowDown size={20} className='text-[#000]/60' />
					</div>
					<div className='flex items-center justify-between mb-[8px]'>
						<div className='flex items-center gap-[8px]'>
							<Image
								src={VendorImg}
								alt='vendor image'
								width={52}
								height={52}
								className='rounded-full object-cover'
							/>

							<div className='flex flex-col'>
								<span className='text-[12px] font-medium'>Gucci Store</span>
								<div className='flex items-center gap-[6px]'>
									<span className='text-[12px] text-[#0000]/40'>Fashion</span>
									<GoDotFill size={8} className='text-[#0000]/60' />
									<div className='flex items-center gap-[4px]'>
										<IoIosStar className='text-[#000]/90' />
										<span className='text-[12px] text-[#0000]/40'>5.4</span>
									</div>
									<GoDotFill size={8} className='text-[#0000]/60' />
									<div className='flex items-center gap-[4px]'>
										<GoPeople className='text-[#000]/90' />
										<span className='text-[12px] text-[#0000]/40'>100k</span>
									</div>
								</div>
							</div>
						</div>
						<p className='text-[#8A226F] text-[12px] font-medium'>Follow</p>
					</div>
					<div>
						Vendor description: You can track your parcel on the following
						website using your tracking number: www.17track.net/en  (Copied to
						the browser to open) What can I do when purchase protection time is
						running out?
					</div>
				</div>
			</div>

			<div className='px-[32px] fixed bottom-0 right-0 left-0 w-full bg-white py-[2rem]'>
				<div className='w-full md:w-[60%] lg:w-[40%] flex justify-center mx-auto '>
					<Link
						href='/get-started'
						className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center'>
						Publish
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductPreviewPage;
