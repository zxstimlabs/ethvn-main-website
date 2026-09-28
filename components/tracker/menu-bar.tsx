"use client"

import Link from "next/link"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "cn"

import { ThemeSelect } from "@/components/tracker/theme-select"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  ETHEREUM_ORG,
  isNavGroup,
  navSections,
  org,
  type NavLink,
} from "@/lib/content/nav"

const READOUTS = [
  {
    label: "Khe",
    value: "12s",
    hint: "Mỗi khe kéo dài 12 giây và có thể chứa một khối mới.",
  },
  {
    label: "Kỷ nguyên",
    value: "32",
    hint: "32 khe tạo thành một kỷ nguyên, khoảng 6,4 phút.",
  },
]

const QUICK_LINKS = [
  { label: "Sách trắng", href: org("/whitepaper/") },
  { label: "Lộ trình", href: org("/roadmap/") },
  { label: "EIP", href: org("/eips/") },
  { label: "Thuật ngữ", href: org("/glossary/") },
  { label: "Hướng dẫn", href: org("/guides/") },
]

function NavLinkItem({ link }: { link: NavLink }) {
  return (
    <MenuPrimitive.LinkItem
      href={link.href}
      target="_blank"
      rel="noreferrer"
      closeOnClick
      className="flex flex-col items-start gap-0.5 px-2 py-1.5 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground"
    >
      <span className="font-medium">{link.label}</span>
      <span className="text-[11px] leading-snug text-muted-foreground">
        {link.description}
      </span>
    </MenuPrimitive.LinkItem>
  )
}

function ToolbarGroup({ className, children }: React.ComponentProps<"div">) {
  return (
    <>
      <Separator orientation="vertical" className="my-2" />
      <div className={cn("flex shrink-0 items-center gap-1", className)}>
        {children}
      </div>
    </>
  )
}

export function MenuBar() {
  return (
    <header className="flex h-9 shrink-0 [scrollbar-width:none] items-stretch gap-2 overflow-x-auto border-b px-2">
      <div className="flex shrink-0 items-center">
        <Button
          variant="outline"
          size="xs"
          className="uppercase"
          nativeButton={false}
          render={<Link href="/" />}
        >
          ◄ ETH.VN
        </Button>
      </div>

      <ToolbarGroup>
        <Menubar className="h-auto gap-1 border-0 p-0">
          {navSections.map((section) => (
            <MenubarMenu key={section.id}>
              <MenubarTrigger className="h-6 gap-1 border border-border px-2 uppercase aria-expanded:bg-primary aria-expanded:text-primary-foreground">
                {section.label}
                <ChevronDownIcon className="size-3 opacity-60" />
              </MenubarTrigger>
              <MenubarContent className="w-72">
                {section.entries.map((entry) =>
                  isNavGroup(entry) ? (
                    <MenubarSub key={entry.label}>
                      <MenubarSubTrigger className="uppercase">
                        {entry.label}
                      </MenubarSubTrigger>
                      <MenubarSubContent className="w-72">
                        {entry.items.map((link) => (
                          <NavLinkItem key={link.href} link={link} />
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  ) : (
                    <NavLinkItem key={entry.href} link={entry} />
                  )
                )}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      </ToolbarGroup>

      <ToolbarGroup className="hidden gap-3 lg:flex">
        {READOUTS.map((readout) => (
          <Tooltip key={readout.label}>
            <TooltipTrigger
              render={<div className="flex items-center gap-1.5" />}
              aria-label={`${readout.label}: ${readout.value}. ${readout.hint}`}
            >
              <span className="text-[10px] text-muted-foreground uppercase">
                {readout.label}
              </span>
              <span className="flex h-6 min-w-12 items-center justify-center border px-2 text-sm font-bold tabular-nums">
                {readout.value}
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom">{readout.hint}</TooltipContent>
          </Tooltip>
        ))}
      </ToolbarGroup>

      <ToolbarGroup className="hidden 2xl:flex">
        <span className="text-[10px] text-muted-foreground uppercase">
          Mạng chính · Bằng chứng cổ phần
        </span>
      </ToolbarGroup>

      <div className="ml-auto flex shrink-0 items-center gap-1">
        {QUICK_LINKS.map((link) => (
          <Button
            key={link.href}
            variant="outline"
            size="xs"
            className="hidden uppercase min-[1440px]:inline-flex"
            nativeButton={false}
            render={<a href={link.href} target="_blank" rel="noreferrer" />}
          >
            {link.label}
          </Button>
        ))}
        <Button
          variant="outline"
          size="xs"
          className="hidden uppercase md:inline-flex"
          nativeButton={false}
          render={<a href={ETHEREUM_ORG} target="_blank" rel="noreferrer" />}
        >
          ethereum.org [VI]
        </Button>
      </div>

      <ToolbarGroup>
        <ThemeSelect />
      </ToolbarGroup>
    </header>
  )
}
