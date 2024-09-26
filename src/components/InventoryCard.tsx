import { InventoryOption } from "@/app/create-product/page";
import React, { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import Badge from "./Badge";

interface Props {
	index: number;
	option: InventoryOption;
	inventoryOptions: InventoryOption[];
	setInventoryOptions: React.Dispatch<React.SetStateAction<InventoryOption[]>>;
	handleOptionValueChange: (index: number, value: string) => void;
	handleRemoveValue: (optionIndex: number, valueIndex: number) => void;
}
const InventoryCard = ({
	index,
	option,
	inventoryOptions,
	setInventoryOptions,
	handleOptionValueChange,
	handleRemoveValue,
}: Props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleDeleteCard = (indexToDelete: number) => {
		const newOptions = inventoryOptions.filter(
			(_, idx) => idx !== indexToDelete
		);
		setInventoryOptions(newOptions);
	};

	return (
		<div
			className='border rounded-[12px] border-[#0000]/20 px-[12px] py-[10px]'
			key={index}>
			<div className='flex items-center justify-between mb-[10px]'>
				<div className='flex flex-col w-[40%]'>
					<span className='text-[10px] text-[#0000]/60'>
						Option {index + 1}
					</span>
					<input
						className='w-full py-2 border-0 rounded-md shadow-sm outline-none mb-[10px]'
						placeholder={`Option name (e.g., ${option.name || "Color"})`}
						value={option.name}
						onChange={(e) => {
							const newOptions = [...inventoryOptions];
							newOptions[index].name = e.target.value;
							setInventoryOptions(newOptions);
						}}
					/>
					<div className='flex flex-wrap gap-2 mb-2'>
						{option.values.map((value, valueIndex) => (
							<Badge
								key={valueIndex}
								onRemove={() => handleRemoveValue(index, valueIndex)}>
								{value}
							</Badge>
						))}
					</div>
				</div>
				<div className='relative'>
					<GoKebabHorizontal
						size={20}
						className='text-[#000]/60 cursor-pointer'
						onClick={() => setShowDropdown(!showDropdown)}
					/>

					{showDropdown && (
						<div className='absolute top-8 right-0 bg-white border shadow-lg rounded-md'>
							<ul>
								<li
									className='px-4 py-2 cursor-pointer hover:bg-gray-100'
									onClick={() => handleDeleteCard(index)}>
									Delete
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
			<input
				className='w-full py-2 border-0 rounded-md shadow-sm outline-none'
				placeholder='Enter value and press Enter'
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						handleOptionValueChange(
							index,
							(e.target as HTMLInputElement).value
						);
						(e.target as HTMLInputElement).value = "";
					}
				}}
			/>
		</div>
	);
};

export default InventoryCard;
