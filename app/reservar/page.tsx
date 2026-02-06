"use client"
import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { TurquoiseCalendar } from "@/components/ui/TurquoiseCalendar"
import { bookAppointment } from "@/app/actions/book-appointment"
import { getBookedSlots } from "@/app/actions/get-booked-slots"
import { format } from "date-fns"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Toast } from "@/components/ui/Toast"
import { NotificationModal } from "@/components/ui/NotificationModal"

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(undefined)
  const [loading, setLoading] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [toast, setToast] = React.useState<{ message: string, type: 'error' | 'success' } | null>(null)
  const [modalInfo, setModalInfo] = React.useState<{
    title: string,
    message: string,
    type: 'success' | 'error',
    showContactButton?: boolean
  } | null>(null)
  const [bookedSlots, setBookedSlots] = React.useState<string[]>([])
  const [fetchingSlots, setFetchingSlots] = React.useState(false)

  React.useEffect(() => {
    async function fetchBooked() {
      if (!selectedDate) return
      setFetchingSlots(true)
      const slots = await getBookedSlots(format(selectedDate, 'yyyy-MM-dd'))
      setBookedSlots(slots || [])
      setFetchingSlots(false)
      // Si la hora seleccionada ya no está disponible, desleccionarla
      if (selectedTime && slots.includes(selectedTime)) {
        setSelectedTime(undefined)
      }
    }
    fetchBooked()
  }, [selectedDate])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // ... logic modified below
    const form = e.currentTarget;
    e.preventDefault()
    if (!selectedDate || !selectedTime) {
      setToast({ type: 'error', message: 'Por favor selecciona día y hora antes de continuar.' })
      return
    }

    setLoading(true)
    setToast(null)

    const formData = new FormData(e.currentTarget)
    const result = await bookAppointment({
      telefono: formData.get('telefono') as string,
      dia: format(selectedDate, 'yyyy-MM-dd'),
      hora: selectedTime
    })

    setLoading(false)
    if (result.success) {
      setModalInfo({
        type: 'success',
        title: "¡Cita Confirmada!",
        message: `Perfecto ${result.nombre}, nos vemos el ${format(selectedDate, 'dd/MM/yyyy')} a las ${selectedTime}.`
      })
      setShowModal(true)

      // Reset
      setSelectedDate(undefined)
      setSelectedTime(undefined)
      form.reset()
    } else {
      setModalInfo({
        type: 'error',
        title: "No se pudo agendar",
        message: result.error || "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.",
        showContactButton: true
      })
      setShowModal(true)
    }
  }

  return (
    <main suppressHydrationWarning className="min-h-screen bg-white flex justify-center py-4 md:py-16 px-0 md:px-12 font-sans overflow-x-hidden">
      <div suppressHydrationWarning className="w-full max-w-full lg:max-w-7xl space-y-12 md:space-y-16">

        {/* Header & Intro */}
        <div suppressHydrationWarning className="text-center space-y-8 px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mx-auto max-w-4xl tracking-tighter">
            Agenda tu cita conmigo.<br /><span className="text-turquoise-500">Elena Cervera Psicóloga</span>
          </h1>
        </div>

        <div suppressHydrationWarning className="flex flex-col gap-12 items-center lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start w-full">
          {/* Step 1: Calendar & Slots */}
          <div suppressHydrationWarning className="space-y-8 w-full">
            <div suppressHydrationWarning className="flex justify-center">
              <TurquoiseCalendar onSelect={setSelectedDate} selectedDate={selectedDate} />
            </div>

            {selectedDate && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-md mx-auto w-full px-2">
                <h3 className="font-serif text-2xl text-slate-800 mb-6 font-bold text-center">Horas Disponibles</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-3 relative">
                  {fetchingSlots && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
                      <div className="w-5 h-5 border-2 border-turquoise-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  {TIME_SLOTS.map((time) => {
                    const isBooked = bookedSlots.includes(time)
                    return (
                      <button
                        key={time}
                        disabled={isBooked}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "py-4 lg:py-2 px-1 lg:px-6 rounded-xl !text-2xl lg:!text-sm font-semibold transition-all border relative overflow-hidden",
                          selectedTime === time
                            ? "bg-turquoise-500 text-white border-turquoise-500 shadow-md scale-105"
                            : isBooked
                              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                              : "bg-white text-slate-600 border-gray-200 hover:border-turquoise-300 shadow-sm"
                        )}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Form */}
          <div suppressHydrationWarning className="bg-gray-50 p-12 sm:p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-gray-200/50 w-full border border-gray-200">
            <h2 className="font-serif text-[4rem] md:text-3xl text-slate-800 mb-20 font-black text-center tracking-tighter">Tus Datos</h2>

            <Toast
              isVisible={!!toast}
              message={toast?.message || null}
              type={toast?.type}
              onClose={() => setToast(null)}
            />

            <NotificationModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalInfo?.title || ""}
              message={modalInfo?.message || ""}
              type={modalInfo?.type}
              showContactButton={modalInfo?.showContactButton}
            />

            <form onSubmit={handleSubmit} className="space-y-12">
              <Input
                name="telefono"
                type="tel"
                label="Teléfono de Contacto"
                required
                pattern="[0-9]{9}"
                maxLength={9}
                inputMode="numeric"
                title="El teléfono debe tener exactamente 9 números"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="!text-xl lg:!text-base h-16 lg:h-12"
                labelClassName="!text-lg lg:!text-base left-1 top-4 lg:top-3 peer-focus:!text-sm peer-not-placeholder-shown:!text-sm"
              />

              <div suppressHydrationWarning className="pt-8 space-y-8">
                <div suppressHydrationWarning className="!text-sm lg:!text-xs text-gray-400 font-bold px-2 text-center uppercase tracking-[0.2em]">
                  {selectedDate ? (
                    <>
                      Seleccionado: <span className="text-slate-800 font-black">{format(selectedDate, 'dd/MM/yyyy')}</span>
                      {selectedTime && <> <br /> a las <span className="text-turquoise-600 font-black">{selectedTime}</span></>}
                    </>
                  ) : 'Selecciona una fecha'}
                </div>
                <Button
                  type="submit"
                  disabled={loading || !selectedDate || !selectedTime}
                  className="w-full py-10 sm:py-4 text-[2.5rem] sm:text-lg shadow-2xl shadow-turquoise-500/40 disabled:scale-100 font-black h-auto leading-tight"
                >
                  {loading ? 'Procesando...' : 'Confirmar Cita'}
                </Button>
              </div>
              <p className="text-center text-sm text-gray-400 mt-6 max-w-xs mx-auto">
                Al confirmar, aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>

      </div>
    </main>
  )
}

