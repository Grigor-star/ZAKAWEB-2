"use client";
import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Link href={href}>
      <Button className="w-full" variant="link">
        {label}
      </Button>
    </Link>
  );
};
