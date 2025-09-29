// src/app/about/loading.tsx
'use client' // optional — safe to include

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse text-gray-500">Loading…</div>
    </div>
  )
}
