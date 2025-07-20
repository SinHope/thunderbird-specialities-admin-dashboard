// I have created this file so that we can route to the products page 

import { createFileRoute } from '@tanstack/react-router'
import Products from '@/features/dashboard/products' // ✅ Import your actual Products componen

export const Route = createFileRoute('/_authenticated/products/')({
  component: Products,
})
