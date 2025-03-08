import { ProtectedRoute } from "@/components/auth/protected-route";

export default function BalancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="max-w-screen-xl mx-auto p-6">{children}</div>
    </ProtectedRoute>
  );
}
