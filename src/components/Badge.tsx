const Badge = ({
	children,
	onRemove,
}: {
	children: React.ReactNode;
	onRemove: () => void;
}) => (
	<span className='flex items-center px-2 py-1 rounded-full text-sm font-medium bg-[#000]/[0.06] text-gray-800'>
		{children}
		<button
			onClick={onRemove}
			className='ml-1 text-gray-400 focus:outline-none text-[20px]'
			aria-label='Remove tag'>
			×
		</button>
	</span>
);

export default Badge;
