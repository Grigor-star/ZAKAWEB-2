"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <Link href="/auth/login">
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
