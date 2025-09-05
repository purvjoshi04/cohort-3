export const PrimaryButton = ({ onClick, enabled }) => {
    return (
        <div className="flex justify-center pt-8">
            <span
                onClick={enabled ? onClick : undefined}
                className={`rounded text-sm px-8 py-3 text-white cursor-pointer ${enabled ? "bg-[#68d5d7]" : "bg-[#7e96aa] cursor-not-allowed"
                    }`}
            >
                Continue
            </span>
        </div>
    );
};
