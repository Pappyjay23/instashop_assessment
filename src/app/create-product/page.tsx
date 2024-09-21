"use client";

import BasicDetails from "@/components/BasicDetails";
import InventoryCard from "@/components/InventoryCard";
import ProductImages from "@/components/ProductImages";
import StocksPrices from "@/components/StocksPrices";
import { AppContextUse, ProductImage } from "@/context/appContext";
import { useAuth } from "@/utils/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { IoIosArrowDown, IoMdArrowBack } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { LuImagePlus, LuPlus } from "react-icons/lu";

export interface InventoryOption {
	name: string;
	values: string[];
}

const CreateProductPage = () => {
	const { isAuthenticated } = useAuth();
	const { product, setProduct } = AppContextUse();
	const [isLoaded, setIsLoaded] = useState(false);
	const [inventoryChecked, setInventoryChecked] = useState(false);
	const [inventoryOptions, setInventoryOptions] = useState<InventoryOption[]>([
		{ name: "Color", values: [] },
		{ name: "Size", values: [] },
		{ name: "Weight", values: [] },
	]);
	const [selfShippingChecked, setSelfShippingChecked] = useState(false);
	const [instaShopShippingChecked, setInstaShopShippingChecked] =
		useState(false);
	const [images, setImages] = useState<ProductImage[]>([]);

	useEffect(() => {
		if (isAuthenticated !== undefined) {
			setIsLoaded(true);
		}
	}, [isAuthenticated]);

	useEffect(() => {
		setProduct({
			...product,
			productImages: images,
		});
	}, [images]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const newImage = {
				id: Date.now().toString(),
				file: file,
				url: URL.createObjectURL(file),
			};
			setImages((prevImages) => [...prevImages, newImage]);
		}
	};

	const handleDeleteImage = (id: string) => {
		setImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	const handleOptionValueChange = (index: number, value: string) => {
		if (value.trim() !== "") {
			setInventoryOptions((prevOptions) => {
				const newOptions = [...prevOptions];
				newOptions[index] = {
					...newOptions[index],
					values: [...newOptions[index].values, value.trim()],
				};
				return newOptions;
			});
		}
	};

	const handleRemoveValue = (optionIndex: number, valueIndex: number) => {
		setInventoryOptions((prevOptions) => {
			const newOptions = [...prevOptions];
			newOptions[optionIndex].values.splice(valueIndex, 1);
			return newOptions;
		});
	};

	const handleAddOption = () => {
		setInventoryOptions((prevOptions) => [
			...prevOptions,
			{ name: "", values: [] },
		]);
	};

	if (!isLoaded) {
		return null;
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<section className='relative w-full min-h-screen'>
			<div className='max-w-[800px] mx-auto'>
				<div className='px-[16px] pt-[12px]'>
					<div className='flex items-center justify-between mb-[20px]'>
						<Link
							href='/create-store'
							className='py-[9px] flex items-center gap-[8px]'>
							<IoMdArrowBack size={20} className='text-[#000000]/60' />
							<span className='text-[16px] font-medium'>Create a product</span>
						</Link>
						<GoKebabHorizontal size={20} className='rotate-90 text-[#000]/60' />
					</div>
					<div className='flex justify-between items-center mb-[8px]'>
						<div className='rounded-[90px] border border-[#000]/10 flex items-center gap-[6px] w-fit px-[6px] py-[3px]'>
							<span className='text-[#000]/60 text-[12px]'>Draft</span>
							<IoCheckmark size={14} className='text-[#000]/60' />
						</div>
						<Link
							href='/product-preview'
							className='text-[12px] text-[#8A226F] font-medium'>
							Preview Product
						</Link>
					</div>
				</div>
				<BasicDetails />
				<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>Product images</span>
						<IoIosArrowDown size={20} className='text-[#000]/60' />
					</div>
					<div className='mb-4 flex flex-col gap-4'>
						{images.map((image) => (
							<ProductImages
								key={image.id}
								imageUrl={image.url}
								imageName={image.file.name}
								onDelete={() => handleDeleteImage(image.id)}
							/>
						))}
					</div>
					<div>
						<label htmlFor='product-image-upload'>
							<div className='cursor-pointer bg-black/[0.03] outline-none border-0 text-[#8A226F] w-full rounded-[90px] py-[10px] text-center flex justify-center items-center gap-[6px]'>
								<span className='font-medium'>Add image</span>
								<LuImagePlus size={20} />
							</div>
						</label>
						<input
							type='file'
							name='product-image-upload'
							id='product-image-upload'
							accept='image/*'
							onChange={handleFileChange}
							onClick={() => console.log("clicked")}
							className='hidden'
						/>
					</div>
				</div>

				{/* Inventory variations */}
				<div className='px-4 pt-4 pb-5 border-t border-black/10'>
					<div className='flex justify-between mb-4'>
						<span className='font-medium'>Inventory variations</span>
						<IoIosArrowDown size={20} className='text-black/60' />
					</div>
					<div className='flex gap-2 mb-4'>
						<label
							className='cursor-pointer flex items-center gap-2'
							htmlFor='inventory-variation'>
							<div
								className={`w-5 h-5 ${
									inventoryChecked
										? "bg-[#8A226F]"
										: "bg-white border border-black/60"
								} rounded text-white flex justify-center items-center`}
								// onClick={() => setInventoryChecked((prev) => !prev)}
							>
								{inventoryChecked && <IoCheckmark size={15} />}
							</div>
							<span>
								This product is variable; has different colors, sizes, weight,
								materials, etc.
							</span>
						</label>
						<input
							type='checkbox'
							name='inventory-variation'
							id='inventory-variation'
							className='sr-only'
							checked={inventoryChecked}
							onChange={() => setInventoryChecked((prev) => !prev)}
						/>
					</div>
					{inventoryChecked && (
						<>
							<div className='mb-[16px] flex flex-col gap-[16px]'>
								{inventoryOptions.map((option, index) => (
									<InventoryCard
										option={option}
										key={index}
										index={index}
										inventoryOptions={inventoryOptions}
										setInventoryOptions={setInventoryOptions}
										handleOptionValueChange={handleOptionValueChange}
										handleRemoveValue={handleRemoveValue}
									/>
								))}
							</div>
							<div>
								<button
									className='bg-[#000000]/[0.03] outline-none border-0 text-[#8A226F] w-full rounded-[90px] py-[10px] text-center flex justify-center items-center gap-[6px]'
									onClick={handleAddOption}>
									<LuPlus size={20} />
									<span className='font-medium'>Add new option</span>
								</button>
							</div>
						</>
					)}
				</div>

				<div className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>
							Configure variant prices and stocks
						</span>
						<IoIosArrowDown size={20} className='text-[#000]/60' />
					</div>
					<div className='flex flex-col gap-[16px]'>
						{Array(5)
							.fill(5)
							.map((_, index) => (
								<StocksPrices key={index} />
							))}
					</div>
				</div>
				<div className='px-[16px] pt-[16px] border-t border-[#000]/10'>
					<div className='flex justify-between mb-[16px]'>
						<span className='font-medium'>Shipping</span>
						<IoIosArrowDown size={20} className='text-[#000]/60' />
					</div>
					<div className='flex justify-between pr-[8px] mb-[20px]'>
						<p>Self shipping</p>
						<div>
							<label
								className='cursor-pointer'
								htmlFor='self-shipping'
								onClick={() => setSelfShippingChecked((prev) => !prev)}>
								<div
									className={`w-[20px] h-[20px] ${
										selfShippingChecked
											? "bg-[#8A226F]"
											: "bg-white border border-[#0000]/60"
									} rounded-[5px] text-white flex justify-center items-center`}>
									<IoCheckmark
										size={15}
										className={`${selfShippingChecked ? "flex" : "hidden"}`}
									/>
								</div>
							</label>
							<input
								type='checkbox'
								name='self-shipping'
								id='self-shipping'
								className='hidden'
							/>
						</div>
					</div>
					<div className='flex justify-between pr-[8px] mb-[12px]'>
						<p>InstaShop shipping</p>
						<div>
							<label
								className='cursor-pointer'
								htmlFor='instashop-shipping'
								onClick={() => setInstaShopShippingChecked((prev) => !prev)}>
								<div
									className={`w-[20px] h-[20px] ${
										instaShopShippingChecked
											? "bg-[#8A226F]"
											: "bg-white border border-[#0000]/60"
									} rounded-[5px] text-white flex justify-center items-center`}>
									<IoCheckmark
										size={15}
										className={`${
											instaShopShippingChecked ? "flex" : "hidden"
										}`}
									/>
								</div>
							</label>
							<input
								type='checkbox'
								name='instashop-shipping'
								id='instashop-shipping'
								className='hidden'
							/>
						</div>
					</div>
					<div className='flex flex-col mb-[27px] border border-[#0000]/20 rounded-[12px] px-[16px] py-[10px]'>
						<span className='text-[10px] text-[#0000]/60'>
							Inventory stocks
						</span>
						<input
							type='text'
							placeholder='50'
							className='outline-none text-[#0000]/90'
						/>
					</div>
				</div>

				<div className='px-[16px] pt-[16px] pb-[40px] border-t border-[#000]/10 max-w-[800px] mx-auto'>
					<div className='flex gap-[10px]'>
						<button className='bg-transparent outline-none border border-[#8A226F] text-[#8A226F] w-full rounded-[90px] py-[10px] text-center font-medium'>
							Cancel
						</button>
						<button className='bg-[#8A226F] outline-none border-0 text-white w-full rounded-[90px] py-[10px] text-center font-medium'>
							Save
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateProductPage;
