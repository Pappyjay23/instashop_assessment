import Image from "next/image";
import { GoKebabHorizontal } from "react-icons/go";
import ProductImg from "@/assets/images/product-img.png";

const ProductImages = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center gap-[8px]'>
				<div className='w-[60px] h-[60px] relative overflow-hidden rounded-[8px] object-cover'>
					<Image src={ProductImg} alt='Product image' width={60} height={60} />
				</div>
				<span>Logo.png</span>
			</div>
			<div className='mr-[18px] flex gap-[20px]'>
				<GoKebabHorizontal size={20} className="text-[#000]/60'" />
				<div className='bg-[#8A226F] w-[32px] h-[20px] rounded-[125px] py-[2.5px] px-[1.5px] flex items-center justify-end'>
					<div className='w-[15px] h-[15px] bg-white rounded-full'></div>
				</div>
			</div>
		</div>
	);
};

export default ProductImages;
