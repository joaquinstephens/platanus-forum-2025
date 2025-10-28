import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { TerminalOutput } from '@/components/ui/terminal-output'

export default function TerminalNavbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [history] = useState<Array<{ command: string; output: string }>>(
    [
      {
        command: '',
        output: `Jueves 21.nov 08:30 a 22:00\n(Oficinas de Buk)[https://www.google.com/maps?sca_esv=3c78addd28f7a980&output=search&q=buk+oficinas&source=lnms&fbs=AIIjpHxMtlcgsqy-nC7XLLllhOr5bo8SRTrnCih88EF-Nzo8K1HwbfQfx36vp1zBe6bZjsU6jhL8zp_XUxREDT1-UWICCuBBIjFffj9e2fIBDe7rXDxJ3WRzg3cfA6YVsB33I7cUuChs-F8ykQAl3F0or0G2OkPSfPt-3NOOuAI3UP6EEWBgR0cq7f0d7nkk6m5HoyAbWvzcBLCJX34DsEK1vpJgMgU4pg&entry=mc&ved=1t:200715&ictx=111]. Santiago`,
      },
    ]
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.4
      setShowNavbar(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header className={cn(
      "sticky flex mx-8 md:mx-auto shadow-2xl shadow-black items-center flex-col justify-center md:max-w-sm overflow-clip uppercase z-50 bg-black/5 backdrop-blur-md font-mono md:left-1/2 md:-translate-x-1/2 border border-border transition-all duration-300 ease-out",
      showNavbar ? "translate-y-0 top-4 md:top-8" : "translate-y-full -top-96"
      )}
    >
      <div className="bg-white/10 w-full text-xs text-foreground/50 relative flex items-center gap-2 p-3">
        <div className="flex gap-1">
          <div className="size-2 rounded-full bg-red-600" />
          <div className="size-2 rounded-full bg-yellow-600" />
          <div className="size-2 rounded-full bg-green-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-1 text-center">platanus @ forum-2025</div>
      </div>

      <div className="flex flex-col justify-start gap-4 items-center text-left w-full p-4">
        {history.map((entry, i) => (
          <TerminalOutput key={i} output={entry.output} className="p-0 space-y-1" />
        ))}

        <Button className="relative gap-3 w-full" asChild>
          <a href="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer">
            <div className="relative">
              <div className="size-1 shrink-0 bg-primary-foreground shadow-[0_0_8px_2px_var(--tw-shadow-color)] shadow-primary-foreground" />
              <div className="size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0 bg-primary-foreground/50 animate-ping blur-sm" />
            </div>
            Súmate
          </a>
        </Button>
      </div>
    </header>
  )
}
