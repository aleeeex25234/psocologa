"use client"
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function SageCalendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  
  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-slate-800">Febrero 2026</h3>
        <div className="flex gap-1">
            <button className="p-1 hover:bg-slate-100 rounded-full text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1 hover:bg-slate-100 rounded-full text-slate-600"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
        <span>Do</span><span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((d) => (
           <button 
             key={d}
             className={cn(
               "h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all hover:scale-110",
               d === 5 ? "bg-turquoise-500 text-white shadow-md shadow-turquoise-200" : "hover:bg-turquoise-50 text-slate-700",
               d === 12 || d === 13 ? "opacity-30 cursor-not-allowed" : "" 
             )}
           >
             {d}
           </button>
        ))}
      </div>
    </div>
  )
}