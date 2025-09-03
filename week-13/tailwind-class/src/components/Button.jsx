export const Button = ({ disabled, children, onClick }) => {
    return (
        <span onClick={onClick} className={`rounded text-sm px-30 py-3 text-white cursor-pointer ${disabled ? "bg-[#7f96ab]" : "bg-[#2d7890]"}`}>
            {children}
        </span>
    )
}