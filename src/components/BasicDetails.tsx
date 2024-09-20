import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BasicDetails = () => {
	return (
		<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
			<div className='flex justify-between mb-[16px]'>
				<span className='font-medium'>Basic Details</span>
				<IoIosArrowDown size={20} className='text-[#000]/60' />
			</div>
			<div className='flex flex-col gap-[10px]'>
				<input
					type='text'
					placeholder='Product Title'
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
				/>
				<input
					type='text'
					placeholder='Product description'
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none min-h-[68px]'
				/>
				<div className='flex gap-[8px]'>
					<input
						type='text'
						placeholder='Price'
						className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
					/>
					<input
						type='text'
						placeholder='Old price'
						className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
					/>
				</div>
				<input
					type='text'
					placeholder='Product collection'
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none min-h-[68px]'
				/>
				<input
					type='text'
					placeholder='Inventory stocks'
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
				/>
			</div>
		</div>
	);
};

export default BasicDetails;
