// app/dashboard/page.tsx
"use client";

const DJANGO_BASE_URL = process.env.NEXT_PUBLIC_DJANGO_URL || "http://127.0.0.1:8000";

export default function DashboardPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src={`${DJANGO_BASE_URL}/first_dashboard/`}
        className="w-full h-full border-none"
        title="Dashboard"
      />
    </div>
  );
}