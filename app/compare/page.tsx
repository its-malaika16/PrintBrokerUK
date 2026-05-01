import { Suspense } from "react";
//import CompareClient from "./CompareClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
   
    </Suspense>
  );
}


// "use client"

// import Link from "next/link"
// import { useState, useMemo, Suspense } from "react"
// import { useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { 
//   Star, 
//   MapPin, 
//   Clock, 
//   CheckCircle, 
//   X,
//   Plus,
//   ArrowRight,
//   Check
// } from "lucide-react"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { vendors } from "@/lib/vendors"

// export default function ComparePage() {
//   const searchParams = useSearchParams()
//   const initialVendors = searchParams.get("vendors")?.split(",").map(Number).filter(id => !isNaN(id)) || []
  
//   const [selectedVendorIds, setSelectedVendorIds] = useState<number[]>(
//     initialVendors.length > 0 ? initialVendors.slice(0, 3) : [1, 2]
//   )

//   const selectedVendors = useMemo(() => 
//     vendors.filter(v => selectedVendorIds.includes(v.id)),
//     [selectedVendorIds]
//   )

//   const availableVendors = useMemo(() =>
//     vendors.filter(v => !selectedVendorIds.includes(v.id)),
//     [selectedVendorIds]
//   )

//   const addVendor = (vendorId: number) => {
//     if (selectedVendorIds.length < 3) {
//       setSelectedVendorIds(prev => [...prev, vendorId])
//     }
//   }

//   const removeVendor = (vendorId: number) => {
//     setSelectedVendorIds(prev => prev.filter(id => id !== vendorId))
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-accent to-background py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
//               Compare Vendors
//             </h1>
//             <p className="mt-4 text-lg text-muted-foreground">
//               Compare up to 3 vendors side-by-side to find the perfect printing partner for your needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section className="py-8 lg:py-12">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           {selectedVendors.length === 0 ? (
//             <div className="rounded-2xl border border-border bg-card p-12 text-center">
//               <h2 className="text-xl font-semibold text-foreground">No Vendors Selected</h2>
//               <p className="mt-2 text-muted-foreground">
//                 Select vendors from the dropdown below to start comparing.
//               </p>
//               <div className="mt-6 flex justify-center">
//                 <Select onValueChange={(value) => addVendor(Number(value))}>
//                   <SelectTrigger className="w-[250px]">
//                     <SelectValue placeholder="Select a vendor to compare" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {vendors.map((vendor) => (
//                       <SelectItem key={vendor.id} value={vendor.id.toString()}>
//                         {vendor.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[800px] border-collapse">
//                 {/* Header Row - Vendor Cards */}
//                 <thead>
//                   <tr>
//                     <th className="w-48 p-4 text-left align-top">
//                       <div className="text-lg font-semibold text-foreground">Compare</div>
//                       <p className="mt-1 text-sm text-muted-foreground">
//                         {selectedVendors.length}/3 vendors
//                       </p>
//                       {selectedVendorIds.length < 3 && availableVendors.length > 0 && (
//                         <Select onValueChange={(value) => addVendor(Number(value))}>
//                           <SelectTrigger className="mt-3 w-full">
//                             <Plus className="mr-2 h-4 w-4" />
//                             <SelectValue placeholder="Add vendor" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {availableVendors.map((vendor) => (
//                               <SelectItem key={vendor.id} value={vendor.id.toString()}>
//                                 {vendor.name}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       )}
//                     </th>
//                     {selectedVendors.map((vendor) => (
//                       <th key={vendor.id} className="p-4 text-left align-top">
//                         <div className="relative rounded-xl border border-border bg-card p-4">
//                           <button
//                             onClick={() => removeVendor(vendor.id)}
//                             className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
//                           >
//                             <X className="h-4 w-4" />
//                           </button>
//                           <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
//                             {vendor.logo}
//                           </div>
//                           <h3 className="mt-3 font-semibold text-foreground">{vendor.name}</h3>
//                           <div className="mt-2 flex items-center gap-1">
//                             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                             <span className="font-medium">{vendor.rating}</span>
//                             <span className="text-sm text-muted-foreground">
//                               ({vendor.reviews})
//                             </span>
//                           </div>
//                           <div className="mt-3">
//                             <Button size="sm" asChild className="w-full">
//                               <Link href={`/get-quote?vendor=${vendor.slug}`}>
//                                 Get Quote
//                               </Link>
//                             </Button>
//                           </div>
//                         </div>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {/* Rating */}
//                   <tr className="border-b border-border">
//                     <td className="p-4 font-medium text-foreground">Rating</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="flex items-center gap-2">
//                           <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                           <span className="text-lg font-semibold">{vendor.rating}</span>
//                           <span className="text-sm text-muted-foreground">
//                             ({vendor.reviews} reviews)
//                           </span>
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Location */}
//                   <tr className="border-b border-border bg-muted/50">
//                     <td className="p-4 font-medium text-foreground">Location</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-primary" />
//                           {vendor.location}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Turnaround Time */}
//                   <tr className="border-b border-border">
//                     <td className="p-4 font-medium text-foreground">Turnaround Time</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-4 w-4 text-primary" />
//                           {vendor.deliveryTime}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Verified */}
//                   <tr className="border-b border-border bg-muted/50">
//                     <td className="p-4 font-medium text-foreground">Verified Vendor</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         {vendor.verified ? (
//                           <div className="flex items-center gap-2 text-green-600">
//                             <CheckCircle className="h-5 w-5" />
//                             <span>Yes</span>
//                           </div>
//                         ) : (
//                           <span className="text-muted-foreground">No</span>
//                         )}
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Services */}
//                   <tr className="border-b border-border">
//                     <td className="p-4 font-medium text-foreground align-top">Services</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="flex flex-wrap gap-1">
//                           {vendor.services.map((service) => (
//                             <span
//                               key={service}
//                               className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
//                             >
//                               {service}
//                             </span>
//                           ))}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Pricing */}
//                   <tr className="border-b border-border bg-muted/50">
//                     <td className="p-4 font-medium text-foreground align-top">Sample Pricing</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="space-y-2">
//                           {vendor.pricing.slice(0, 3).map((price, index) => (
//                             <div key={index} className="text-sm">
//                               <span className="text-muted-foreground">{price.service}:</span>
//                               <span className="ml-2 font-semibold text-primary">{price.startingPrice}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* MOQ */}
//                   <tr className="border-b border-border">
//                     <td className="p-4 font-medium text-foreground">Min. Order Quantity</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <span className="text-muted-foreground">
//                           From {vendor.pricing[0]?.moq || "1"} units
//                         </span>
//                       </td>
//                     ))}
//                   </tr>

//                   {/* Actions */}
//                   <tr>
//                     <td className="p-4 font-medium text-foreground">Actions</td>
//                     {selectedVendors.map((vendor) => (
//                       <td key={vendor.id} className="p-4">
//                         <div className="flex flex-col gap-2">
//                           <Button asChild>
//                             <Link href={`/get-quote?vendor=${vendor.slug}`}>
//                               Get Quote
//                               <ArrowRight className="ml-2 h-4 w-4" />
//                             </Link>
//                           </Button>
//                           <Button variant="outline" asChild>
//                             <Link href={`/vendors/${vendor.slug}`}>
//                               View Profile
//                             </Link>
//                           </Button>
//                         </div>
//                       </td>
//                     ))}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-muted py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
//           <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
//             Need Help Deciding?
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
//             Submit a quote request and let multiple vendors come to you. Compare their offers and choose the best one.
//           </p>
//           <div className="mt-8">
//             <Button size="lg" asChild>
//               <Link href="/get-quote">
//                 Request Multiple Quotes
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
