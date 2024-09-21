"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";

interface Props {
	imageUrl: string;
	imageName: string;
	onDelete: () => void;
}

const ProductImages = ({ imageUrl, imageName, onDelete }: Props) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const handleKebabClick = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center gap-[8px]'>
				<div className='w-[60px] h-[60px] relative overflow-hidden rounded-[8px] object-cover'>
					<Image
						src={imageUrl}
						alt='Product image'
						fill
						className='object-cover'
					/>
				</div>
				<span>{imageName}</span>
			</div>
			<div className='mr-[18px] flex gap-[20px] relative'>
				<GoKebabHorizontal
					onClick={handleKebabClick}
					size={20}
					className='text-[#000]/60 cursor-pointer'
				/>
				{/* Dropdown menu */}
				{isDropdownOpen && (
					<div
						ref={dropdownRef}
						className='absolute top-[30px] right-0 w-[100px] bg-white shadow-lg border rounded-[8px] py-2 z-10'>
						<button
							onClick={onDelete}
							className='w-full text-left px-4 py-2 hover:bg-gray-100'>
							Delete
						</button>
					</div>
				)}
				<div className='bg-[#8A226F] w-[32px] h-[20px] rounded-[125px] py-[2.5px] px-[1.5px] flex items-center justify-end'>
					<div className='w-[15px] h-[15px] bg-white rounded-full'></div>
				</div>
			</div>
		</div>
	);
};

export default ProductImages;
