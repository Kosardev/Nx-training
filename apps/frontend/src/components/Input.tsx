'use client';

type InputProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
};

export function Input({
                          label,
                          value,
                          onChange,
                          type = 'text',
                          placeholder,
                      }: InputProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm text-gray-600">{label}</label>}
            <input
                className="p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
