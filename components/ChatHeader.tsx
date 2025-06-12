import { IoArrowBack } from "react-icons/io5";

export default function ChatHeader({
    name,
    initials,
    colorClass,
    onBack,
}: {
    name: string;
    initials: string;
    colorClass: string;
    onBack?: () => void;
}) {
    return (
        <div className="h-16 border-b flex items-center px-4 gap-3 bg-white sticky z-10">
            {onBack && (
                <button onClick={onBack} className="md:hidden text-xl mr-2">
                    <IoArrowBack />
                </button>
            )}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${colorClass}`}>
                {initials}
            </div>
            <div>
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-xs text-green-500">Online</div>
            </div>
        </div>
    );
}
