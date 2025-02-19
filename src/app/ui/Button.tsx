interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
  
const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button className={`
                appearance-none border border-white text-white text-[14px] font-bold leading-[14px] tracking-[2px]
                transition-colors duration-200
                hover:bg-white hover:text-black
                active:bg-white active:text-black
                px-[23px] py-[17px]
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};
  
export default Button;