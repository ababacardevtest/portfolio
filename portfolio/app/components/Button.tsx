import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline";
};

export default function Button({ children, href = "#", variant = "primary" }:Props) {
    const base = "inline-flex items-center rounded-lg px-5 py-2.5 font-medium transition";
    const styles = {
        primary: "bg-brand-600 text-white hover:bg-brand-700",
        outline: "border border-slate-300 text-slate-700 hover:bg-slate-100",
    };

    return <Link href={href} className={`${base} ${styles[variant]}`}>{children}</Link>;
}