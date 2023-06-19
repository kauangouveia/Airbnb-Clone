'use client'

import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disable?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

export default function Button({ label, onClick, disable, outline, small, icon: Icon }: ButtonProps) {
    return (
        <button className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'bg-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        `
        }
            onClick={onClick}
            disabled={disable}
        >
            {Icon && (
                <Icon size={74} className="absolute left-4 top-3" />
            )}
            {label}
        </button>
    )
}