
interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const ButtonQuestion = ({ text, className, onClick  }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`max-w-full h-[24px] inline-flex items-center justify-center rounded-[16px] text-[#0059B2] dark:text-[#e7ebf0] cursor-pointer font-medium bg-[rgba(194,224,255,0.5)] dark:bg-[#265d97] hover:dark:bg-[#265d97] hover:bg-[#C2E0FF] ${className}`}>
      <span className="px-3">{text}</span>
    </button>
  );
};

export default ButtonQuestion;
