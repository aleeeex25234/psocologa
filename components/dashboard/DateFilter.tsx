"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { format, parseISO } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

export function DateFilter({ currentDate }: { currentDate: string }) {
    const router = useRouter()

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value
        router.push(`/dashboard?date=${newDate}`)
    }

    return (
        <div suppressHydrationWarning className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
            <CalendarIcon className="w-5 h-5 text-turquoise-600" />
            <input
                type="date"
                value={currentDate}
                onChange={handleDateChange}
                className="bg-transparent border-none text-slate-800 font-medium focus:ring-0 cursor-pointer"
            />
        </div>
    )
}
