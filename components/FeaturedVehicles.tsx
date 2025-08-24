"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Settings, Eye } from "lucide-react";
import VehicleModal from "@/components/VehicleModal";
import { vehicles } from "@/lib/vehicleData";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedVehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVehicleModal = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <>
      <section id="inventory" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of quality vehicles, thoroughly
              inspected and ready for immediate delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={vehicle.image[1]}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    width={1000} // Add a fixed width
                    height={600} // Add a fixed height
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {vehicle.featured && (
                    <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vehicle.make} {vehicle.model} {vehicle.year}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Gauge className="w-4 h-4 mr-1 text-orange-600" />
                      {vehicle.mileage.toLocaleString()} km
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-1 text-orange-600" />
                      {vehicle.fuelType}
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-1 text-orange-600" />
                      {vehicle.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-orange-600">
                      {formatPrice(vehicle.price)}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => openVehicleModal(vehicle)}
                      className="hover:bg-orange-600 hover:text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8"
              asChild
            >
              <Link href="/inventory">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>

      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedVehicle(null);
          }}
        />
      )}
    </>
  );
}
