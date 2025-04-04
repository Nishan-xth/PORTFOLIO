import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, className, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className,
      )}
    >
      <h2 className="text-3xl font-semibold mb-2 text-green-500">{title}</h2>
      <div className="section-divider" />
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-sm">{subtitle}</p>}
    </div>
  )
}

