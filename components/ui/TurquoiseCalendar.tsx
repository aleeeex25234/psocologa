"use client"
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, isBefore, startOfToday, addDays } from "date-fns"
import { es } from "date-fns/locale"

export function TurquoiseCalendar({ onSelect, selectedDate }: { onSelect: (date: Date) => void, selectedDate?: Date }) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  if (!mounted) {
    return <div suppressHydrationWarning className="h-[430px] w-full bg-slate-50 rounded-3xl animate-pulse" />
  }

  return (
    <div
      className="p-4 sm:p-6 bg-white rounded-3xl shadow-sm border border-gray-50 font-sans w-full max-w-none sm:max-w-lg mx-auto"
      suppressHydrationWarning
    >
      <div suppressHydrationWarning className="flex items-center justify-between mb-8 px-4 sm:px-0">
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 capitalize tracking-tight">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-2 hover:bg-turquoise-50 rounded-full text-turquoise-600 transition-colors border border-gray-100 sm:border-0"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={nextMonth} className="p-2 hover:bg-turquoise-50 rounded-full text-turquoise-600 transition-colors border border-gray-100 sm:border-0"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div suppressHydrationWarning className="grid grid-cols-7 gap-0 text-center text-xs font-bold text-slate-300 mb-8 uppercase tracking-widest sm:px-0">
        <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
      </div>
      <div suppressHydrationWarning className="grid grid-cols-7 gap-0 justify-items-center">
        {calendarDays.map((day, idx) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate)
          const isCurrentMonth = isSameMonth(day, monthStart)
          const today = startOfToday()
          const maxDate = addDays(today, 33)

          const isPast = isBefore(day, today)
          const isTooFar = !isBefore(day, addDays(maxDate, 1))
          const isDisabled = !isCurrentMonth || isPast || isTooFar

          return (
            <button
              key={idx}
              disabled={isDisabled}
              suppressHydrationWarning
              onClick={() => onSelect(day)}
              className={cn(
                "h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-300",
                isSelected
                  ? "bg-turquoise-500 text-white shadow-xl shadow-turquoise-500/60 scale-110 z-10"
                  : "hover:bg-turquoise-50 text-slate-900 bg-slate-50/30",
                isDisabled ? "opacity-5 cursor-not-allowed bg-transparent" : ""
              )}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>
    </div>
  )
}
