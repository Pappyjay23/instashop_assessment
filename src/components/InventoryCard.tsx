import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

interface Props {
	index: number;
}
const InventoryCard = ({ index }: Props) => {
	return (
		<div
			className='border rounded-[12px] border-[#0000]/20 px-[12px] py-[10px]'
			key={index}>
			<div className='flex items-center justify-between mb-[20px]'>
				<div className='flex flex-col'>
					<span className='text-[10px] text-[#0000]/60'>
						Option {index + 1}
					</span>
					<span className='font-medium'>Color</span>
				</div>
				<GoKebabHorizontal size={20} className='text-[#000]/60' />
			</div>
			<input
				type='text'
				placeholder='Enter values'
				className='outline-none border-0 w-[90%]'
			/>
		</div>
	);
};

export default InventoryCard;
