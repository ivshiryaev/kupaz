export default function LegalsLayout({ children } : { children: React.ReactNode }) {
    return (
        <div 
            className='
                bg-white
                max-w-[768px] mx-auto
                rounded-2xl 
                p-6 lg:p-8 
                flex flex-col items-center 
                gap-6 lg:gap-8 
            '
        >
            {children}
        </div>
    )
}