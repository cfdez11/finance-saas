import { Header } from "@/components/header"

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-3 lg:px-14">
        {children}
      </main>
    </>
  )
}
