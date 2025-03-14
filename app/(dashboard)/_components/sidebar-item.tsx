"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    herf: string;
};

export const SidebarItem = ({
    icon: Icon,
    label,
    herf, 
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
    (pathname === "/" && herf === "/") ||
    pathname === herf ||
    pathname?.startsWith('${href}/');

    const onClick = () => {
        router.push(herf);
    }
    return (
        <Button onClick={onClick}
        type="button"
        className={cn("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover: text-slate-600 hover:bg-slate-300/20",
            isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
        )}
        >
          <div className="flex intems-center gap-x-2 py-4">
            <Icon 
            size={22}
            className={cn(
                "text-slate-500",
                isActive && "text-sky-700"
            )}
            />
            {label}
            </div>
            <div
            className={cn(
                "ml-auto opacity-0 border-2  border-sky-700 h- full transition-all",
                isActive && "opacity-100"
            )}
                />
        </Button>
    )
}
