export default function Topbar() {
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-black flex items-center justify-between px-4 z-50">
            {/* Left: Logo */}
            <div className="text-xl font-semibold text-green-300">logo</div>

            {/* Right: Profile Initials */}
            <div className="w-9 h-9 bg-green-300 text-black flex items-center justify-center rounded-full font-medium">
                CL
            </div>
        </div>
    );
}
