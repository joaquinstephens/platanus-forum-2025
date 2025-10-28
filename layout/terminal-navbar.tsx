import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function TerminalNavbar() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>(
    [
      {
        command: '',
        output: `Jueves 21.nov 08:30 a 22:00\n(Oficinas de Buk)[https://www.google.com/maps?sca_esv=3c78addd28f7a980&output=search&q=buk+oficinas&source=lnms&fbs=AIIjpHxMtlcgsqy-nC7XLLllhOr5bo8SRTrnCih88EF-Nzo8K1HwbfQfx36vp1zBe6bZjsU6jhL8zp_XUxREDT1-UWICCuBBIjFffj9e2fIBDe7rXDxJ3WRzg3cfA6YVsB33I7cUuChs-F8ykQAl3F0or0G2OkPSfPt-3NOOuAI3UP6EEWBgR0cq7f0d7nkk6m5HoyAbWvzcBLCJX34DsEK1vpJgMgU4pg&entry=mc&ved=1t:200715&ictx=111]. Santiago`,
      },
    ]
  )
  const [scrolled, setScrolled] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 700)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderOutput = (output: string) => {
    const markdownLinkRegex = /\(([^\)]+)\)\[([^\]]+)\]/g
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

    const lines = output.split('\n')

    return lines.map((line, lineIndex) => {
      let parts: (string | { type: 'mdLink'; label: string; url: string })[] = []
      let lastIndex = 0
      let match

      const mdLinkRegex = /\(([^\)]+)\)\[([^\]]+)\]/g
      while ((match = mdLinkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index))
        }
        parts.push({ type: 'mdLink', label: match[1], url: match[2] })
        lastIndex = mdLinkRegex.lastIndex
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex))
      }

      if (parts.length === 0) {
        parts = [line]
      }

      return (
        <div key={lineIndex}>
          {parts.map((part, index) => {
            if (typeof part === 'object' && part.type === 'mdLink') {
              return (
                <a
                  key={index}
                  href={part.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:underline transition-colors"
                >
                  {part.label}
                </a>
              )
            }

            const textPart = typeof part === 'string' ? part : ''
            let subParts = textPart.split(urlRegex)
            subParts = subParts.flatMap((p) => (urlRegex.test(p) ? [p] : p.split(emailRegex)))

            return (
              <span key={index}>
                {subParts.map((subPart, subIndex) => {
                  if (urlRegex.test(subPart)) {
                    return (
                      <a
                        key={subIndex}
                        href={subPart}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground hover:underline transition-colors"
                      >
                        {subPart}
                      </a>
                    )
                  } else if (emailRegex.test(subPart)) {
                    return (
                      <a
                        key={subIndex}
                        href={`mailto:${subPart}`}
                        className="text-primary-foreground hover:underline"
                      >
                        {subPart}
                      </a>
                    )
                  }
                  return <span key={subIndex}>{subPart}</span>
                })}
              </span>
            )
          })}
        </div>
      )
    })
  }

  return (
    <header className={cn(
      "z-50 bg-white/5 backdrop-blur-lg font-mono h-fit uppercase max-w-md w-full fixed left-1/2 -translate-x-1/2 bottom-0 border border-border transition-transform duration-150 ease-out",
      scrolled ? 'translate-y-0 bottom-8' : 'translate-y-full'
      )}
    >
      <div className="bg-white/5 text-xs text-foreground/50 relative flex items-center gap-2 px-4 py-3">
        <div className="flex gap-1">
          <div className="size-2 rounded-full bg-red-600" />
          <div className="size-2 rounded-full bg-yellow-600" />
          <div className="size-2 rounded-full bg-green-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-1 text-center">platanus @ forum-2025</div>
      </div>

      <div className="flex justify-between gap-8 w-full p-4">
        <div className="space-y-8 w-full">
          <img
            src="/platanus.svg"
            alt="Platanus logo"
            width={144}
            height={32}
            className="h-8 z-10"
          />

          {history.map((entry, i) => (
            <div key={i} className="space-y-1 !w-48 text-sm text-balance">
              <div className="text-neutral-300 leading-relaxed">{renderOutput(entry.output)}</div>
            </div>
          ))}
        </div>
        <Button className="relative gap-3 !h-full" asChild>
          <a href="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer">
            <div className="relative">
              <div className="size-1 shrink-0 bg-primary-foreground shadow-[0_0_8px_2px_var(--tw-shadow-color)] shadow-primary-foreground" />
              <div className="size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0 bg-primary-foreground/50 animate-ping blur-sm" />
            </div>
            Súmate
          </a>
        </Button>
      </div>
      <div ref={bottomRef} />
    </header>
  )
}
