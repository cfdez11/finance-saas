
'use client'

import { Loader2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Row } from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNewCategory } from "@/features/categories/hooks/use-new-category"
import { DataTable } from "@/components/data-table"
import { useGetCategories } from "@/features/categories/api/use-get-categories"
import { Skeleton } from "@/components/ui/skeleton"
import { columns, ResponseType } from "./columns"
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories"

export default function CategoriesPage() {
  const { onOpen } = useNewCategory()
  const categoriesQuery = useGetCategories()
  const deleteCategories = useBulkDeleteCategories()

  const isDisabled = deleteCategories.isPending || categoriesQuery.isLoading
  const categories = categoriesQuery.data || []

  if (categoriesQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const onDelete = (rows: Row<ResponseType>[]) => {
    const ids = rows.map((row) => row.original.id)
    deleteCategories.mutate({ ids })
  }

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Categories
          </CardTitle>
          <Button size="sm" onClick={onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={categories}
            filterKey="name"
            onDelete={onDelete}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  )
}
