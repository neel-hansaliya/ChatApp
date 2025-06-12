export default function ContactItem({ name, onClick }: { name: string; onClick: () => void }) {
    return (
        <div onClick={onClick} className="p-2 cursor-pointer hover:bg-gray-200 rounded">
            {name}
        </div>
    );
}
