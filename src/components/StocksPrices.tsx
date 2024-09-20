import { GoDotFill, GoKebabHorizontal } from "react-icons/go";
import { LuImagePlus } from "react-icons/lu";

const StocksPrices = () => {
	return (
		<div>
			<div className='flex justify-between pr-[8px]'>
				<div className='flex gap-[8px]'>
					<div className='p-[10px] rounded-[6px] bg-[#0000]/10'>
						<LuImagePlus size={20} className='text-[#000]/60' />
					</div>
					<div className='flex flex-col'>
						<span>Red-L-leather</span>
						<div className='flex text-[#0000]/60 items-center gap-[8px]'>
							<span className='text-[12px]'>#20</span>
							<GoDotFill size={8} />
							<span className='text-[12px]'>20X</span>
						</div>
					</div>
				</div>
				<GoKebabHorizontal size={20} className='text-[#000]/60' />
			</div>
			<div className='flex gap-[8px] mt-[8px]'>
				<div className='border border-[#0000]/20 rounded-[12px] py-[10px] px-[8px] flex justify-between items-center'>
					<input
						type='text'
						className='w-[80%] outline-none text-[#000]/90'
						placeholder='20'
					/>
					<span>#</span>
				</div>
				<div className='border border-[#0000]/20 rounded-[12px] py-[10px] px-[8px] flex justify-between items-center'>
					<input
						type='text'
						className='w-[80%] outline-none text-[#000]/90'
						placeholder='20'
					/>
					<span>Units</span>
				</div>
			</div>
		</div>
	);
};

export default StocksPrices;
