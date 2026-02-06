import { createClient } from '@/lib/supabase/server'
import { Button } from "@/components/ui/Button"
import { format, parseISO, isValid, startOfMonth } from 'date-fns'
import { es } from 'date-fns/locale'
import { AppointmentsTable } from '@/components/dashboard/AppointmentsTable'
import { DateFilter } from '@/components/dashboard/DateFilter'
import { ManualAppointmentModal } from '@/components/dashboard/ManualAppointmentModal'
import { Wallet, TrendingUp, LogOut } from 'lucide-react'
import { logout } from '@/app/login/actions'

export default async function Dashboard(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const supabase = await createClient()

  const rawDate = searchParams?.date as string
  const today = format(new Date(), 'yyyy-MM-dd')
  const selectedDate = rawDate && isValid(parseISO(rawDate)) ? rawDate : today
  const firstDayOfMonth = format(startOfMonth(new Date()), 'yyyy-MM-dd')

  // Parallel fetching: Daily appointments AND Monthly appointments (for stats)
  const [dailyResponse, monthlyResponse] = await Promise.all([
    supabase
      .from('citas')
      .select('*')
      .eq('dia', selectedDate)
      .order('hora', { ascending: true }),

    supabase
      .from('citas')
      .select('pago')
      .gte('dia', firstDayOfMonth)
      .lte('dia', today) // "Hasta hoy" as requested
  ])

  const appointments = dailyResponse.data || []
  const monthlyAppointments = monthlyResponse.data || []

  // Calculations
  const citasCount = appointments.length

  // Earnings Today (Calculated from the selected day's appointments)
  const earningsToday = appointments.reduce((sum, app) => sum + (Number(app.pago) || 0), 0)

  // Earnings Month (From day 1 to TODAY)
  const earningsMonth = monthlyAppointments.reduce((sum, app) => sum + (Number(app.pago) || 0), 0)

  if (dailyResponse.error) console.error('Error loading daily data:', dailyResponse.error)
  if (monthlyResponse.error) console.error('Error loading monthly data:', monthlyResponse.error)

  return (
    <main suppressHydrationWarning className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#749B8F60_0%,_transparent_95%)] bg-white p-4 sm:p-8 font-sans">
      <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto gap-4">
        <div>
          <h1 className="font-sans text-2xl sm:text-3xl text-slate-800 mb-1 font-bold">Panel de Citas</h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Gestionando agenda para el <strong className="text-turquoise-600 uppercase">{format(parseISO(selectedDate), "d 'de' MMMM, yyyy", { locale: es })}</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <DateFilter currentDate={selectedDate} />
          <ManualAppointmentModal />
          <form action={logout} className="hidden md:block">
            <Button variant="ghost" className="text-gray-400 hover:text-red-500 gap-2 font-sans px-3">
              <LogOut size={18} />
              <span className="hidden lg:inline">Cerrar Sesión</span>
            </Button>
          </form>
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: Citas */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Citas</div>
              <div className="text-3xl font-sans text-slate-800 font-bold">{citasCount}</div>
            </div>
            <div className="h-10 w-10 bg-turquoise-50 rounded-full flex items-center justify-center text-turquoise-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          </div>

          {/* Card 2: Ganancias Día */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ganancias (Día)</div>
              <div className="text-3xl font-sans text-slate-800 font-bold">{earningsToday}€</div>
            </div>
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <Wallet className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3: Ganancias Mes */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ganancias (Mes)</div>
              <div className="text-3xl font-sans text-slate-800 font-bold">{earningsMonth}€</div>
              <div className="text-[10px] text-gray-400 mt-1">Acumulado {format(new Date(), 'MMMM', { locale: es })}</div>
            </div>
            <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Main Table Section */}
        <div className="space-y-4">
          <h2 className="font-sans text-xl text-slate-800 font-bold ml-1">Agenda Detallada</h2>
          <AppointmentsTable data={appointments || []} />
        </div>
      </div>
    </main>
  )
}