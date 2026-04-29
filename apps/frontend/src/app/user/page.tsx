'use client';
import React, { useState, useEffect } from 'react';
import { FormInput, CountResponse } from '@org/shared';
import toast from 'react-hot-toast';
import { Input } from '../../components/Input';
export default function Page() {
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<FormInput>({
        name: '',
        email: '',
    });
    async function fetchCount() {
        const res = await fetch('http://localhost:3001/api/count');
        const data: CountResponse = await res.json();
        setCount(data.count);
    }

    useEffect(() => {
        fetchCount().then();
    }, []);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            console.log("res is:",res)
            if (!res.ok) throw new Error('Submit failed');

            toast.success('کاربر با موفقیت اضافه شد ✅');

            setForm({ name: '', email: '' }); // reset
            fetchCount().then(); // refetch
        } catch (err) {
            toast.error('خطا در ثبت اطلاعات ❌');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={"p-5 shadow flex flex-col gap-2 w-fit mx-auto rounded bg-white"}>
            <h2 className={"text-center text-gray-700 font-mono"}> {count} person have signed up so far!</h2>

            <form onSubmit={onSubmit}  className={"flex  gap-2 "}>
                <Input
                    placeholder="Name"
                    value={form.name}
                    onChange={(name:string) => setForm({ ...form, name })}
                />

                <Input
                    placeholder="Email"
                    value={form.email}
                    onChange={(email:string) => setForm({ ...form, email })}
                />

                <button
                    disabled={loading}
                    className="px-2 rounded-md bg-blue-600 text-white disabled:opacity-50"
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
