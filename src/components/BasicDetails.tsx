import { AppContextUse } from "@/context/appContext";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BasicDetails = () => {
	const { product, setProduct } = AppContextUse();
	const [formData, setFormData] = useState({
		productTitle: "",
		productDescription: "",
		productCurrentPrice: "",
		productOldPrice: "",
		productCollection: "",
		productInventoryStocks: "",
	});
	const [errors, setErrors] = useState({
		productTitle: "",
		productDescription: "",
		productCurrentPrice: "",
		productOldPrice: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validateForm = () => {
		const newErrors = {
			productTitle: "",
			productDescription: "",
			productCurrentPrice: "",
			productOldPrice: "",
		};

		if (!formData.productTitle.trim()) {
			newErrors.productTitle = "Product Title is required";
		}
		if (!formData.productDescription.trim()) {
			newErrors.productDescription = "Product Description is required";
		}
		if (!formData.productCurrentPrice.trim()) {
			newErrors.productCurrentPrice = "Price is required";
		} else if (isNaN(Number(formData.productCurrentPrice))) {
			newErrors.productCurrentPrice = "Price must be a valid number";
		}
		if (!formData.productOldPrice.trim()) {
			newErrors.productOldPrice = "Old Price is required";
		} else if (isNaN(Number(formData.productOldPrice))) {
			newErrors.productOldPrice = "Old Price must be a valid number";
		}

		setErrors(newErrors);

		// Check if there are any errors
		return Object.values(newErrors).every((error) => error === "");
	};

	useEffect(() => {
		validateForm();
		setProduct({
			...product,
			productDetails: formData,
		});
	}, [formData]);

	return (
		<form className='px-[16px] pt-[16px] pb-[20px] border-t border-[#000]/10'>
			<div className='flex justify-between mb-[16px]'>
				<span className='font-medium'>Basic Details</span>
				<IoIosArrowDown size={20} className='text-[#000]/60' />
			</div>
			<div className='flex flex-col gap-[10px]'>
				<div>
					<input
						type='text'
						name='productTitle'
						placeholder='Product Title'
						value={formData.productTitle}
						onChange={handleInputChange}
						className={`w-full border ${
							errors.productTitle ? "border-red-500" : "border-[#000000]/20"
						} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
					/>
					{errors.productTitle && (
						<p className='text-red-500'>{errors.productTitle}</p>
					)}
				</div>

				<div>
					<input
						type='text'
						name='productDescription'
						placeholder='Product description'
						value={formData.productDescription}
						onChange={handleInputChange}
						className={`w-full border ${
							errors.productDescription
								? "border-red-500"
								: "border-[#000000]/20"
						} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none min-h-[68px]`}
					/>
					{errors.productDescription && (
						<p className='text-red-500'>{errors.productDescription}</p>
					)}
				</div>

				<div className='flex gap-[8px]'>
					<div className='w-full'>
						<input
							type='text'
							name='productCurrentPrice'
							placeholder='Price'
							value={formData.productCurrentPrice}
							onChange={handleInputChange}
							className={`w-full border ${
								errors.productCurrentPrice
									? "border-red-500"
									: "border-[#000000]/20"
							} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
						/>
						{errors.productCurrentPrice && (
							<p className='text-red-500'>{errors.productCurrentPrice}</p>
						)}
					</div>
					<div className='w-full'>
						<input
							type='text'
							name='productOldPrice'
							placeholder='Old price'
							value={formData.productOldPrice}
							onChange={handleInputChange}
							className={`w-full border ${
								errors.productOldPrice
									? "border-red-500"
									: "border-[#000000]/20"
							} rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none`}
						/>
						{errors.productOldPrice && (
							<p className='text-red-500'>{errors.productOldPrice}</p>
						)}
					</div>
				</div>

				<input
					type='text'
					name='productCollection'
					placeholder='Product collection'
					value={formData.productCollection}
					onChange={handleInputChange}
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none min-h-[68px]'
				/>
				<input
					type='text'
					name='productInventoryStocks'
					placeholder='Inventory stocks'
					value={formData.productInventoryStocks}
					onChange={handleInputChange}
					className='w-full border border-[#000000]/20 rounded-[12px] py-[15px] px-[12px] text-[000000]/60 outline-none'
				/>
			</div>
		</form>
	);
};

export default BasicDetails;
