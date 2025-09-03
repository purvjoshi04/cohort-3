export const Input= ({type, onClick, placeholder}) => {
    return (
        <span onClick={onClick} className={`rounded text-sm px-30 py-3 text-white cursor-pointer bg-[#19416b] outline-none`}>
            <input type={type} placeholder={placeholder} />
        </span>
    )
}