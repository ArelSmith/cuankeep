export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 bg-zinc-50 text-zinc-900">
      <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-sm border border-zinc-200">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-600">
          CuanKeep
        </h1>
        <p className="mt-2 text-zinc-500">
          Monitoring duit lu biar ga cepet abis.
        </p>

        <div className="mt-6 p-4 bg-emerald-50 rounded lg border border-emerald-100">
          <span className="text-sm font-medium text-emerald-600">
            Saldo Saat Ini:
          </span>
          <p className="text-3xl font-bold text-emerald-900">Rp 0</p>
        </div>
      </div>
    </main>
  );
}
