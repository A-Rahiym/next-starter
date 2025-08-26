"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fuel, Gauge, Settings, Eye, Search, Filter } from "lucide-react";
import VehicleModal from "@/components/VehicleModal";
import { vehicles } from "@/lib/vehicleData";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function InventoryPage() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [makeFilter, setMakeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

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

  // Get unique makes for filter
const uniqueMakes = Array.from(new Set(vehicles.map(vehicle => vehicle.make)));

  // Filter vehicles based on search and filters
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      searchTerm === "" ||
      `${vehicle.make} ${vehicle.model} ${vehicle.year}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesMake = makeFilter === "all" || vehicle.make === makeFilter;

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under-5m" && vehicle.price < 5000000) ||
      (priceFilter === "5m-10m" &&
        vehicle.price >= 5000000 &&
        vehicle.price <= 10000000) ||
      (priceFilter === "10m-15m" &&
        vehicle.price >= 10000000 &&
        vehicle.price <= 15000000) ||
      (priceFilter === "over-15m" && vehicle.price > 15000000);

    const matchesYear =
      yearFilter === "all" ||
      (yearFilter === "2020-2024" && vehicle.year >= 2020) ||
      (yearFilter === "2018-2019" &&
        vehicle.year >= 2018 &&
        vehicle.year <= 2019) ||
      (yearFilter === "2015-2017" &&
        vehicle.year >= 2015 &&
        vehicle.year <= 2017);

    return matchesSearch && matchesMake && matchesPrice && matchesYear;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setMakeFilter("all");
    setPriceFilter("all");
    setYearFilter("all");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Page Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vehicle Inventory
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of quality vehicles, all thoroughly
              inspected and ready for delivery
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search by make, model, or year..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Make Filter */}
              <div>
                <Select value={makeFilter} onValueChange={setMakeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Makes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Makes</SelectItem>
                    {uniqueMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-5m">Under ₦5M</SelectItem>
                    <SelectItem value="5m-10m">₦5M - ₦10M</SelectItem>
                    <SelectItem value="10m-15m">₦10M - ₦15M</SelectItem>
                    <SelectItem value="over-15m">Over ₦15M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Year Filter */}
              <div>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Year Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2020-2024">2020 - 2024</SelectItem>
                    <SelectItem value="2018-2019">2018 - 2019</SelectItem>
                    <SelectItem value="2015-2017">2015 - 2017</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                Showing {filteredVehicles.length} of {vehicles.length} vehicles
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="text-orange-600 hover:bg-orange-50"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Vehicle Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={vehicle.image[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      width={600} // Example width, you can adjust this
                      height={400} // Example height, you can adjust this
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {vehicle.featured && (
                      <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      className={`absolute top-4 right-4 ${
                        vehicle.availability === "available"
                          ? "bg-green-600"
                          : vehicle.availability === "reserved"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {vehicle.availability === "available"
                        ? "Available"
                        : vehicle.availability === "reserved"
                        ? "Reserved"
                        : "Sold"}
                    </Badge>
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
                        disabled={vehicle.availability === "sold"}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No vehicles found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="bg-orange-600 rounded-xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-xl mb-6">
              Our vehicle sourcing service can help you find the perfect car
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <a
                  href="https://wa.me/2348123456789?text=Hi%2C%20I'm%20looking%20for%20a%20specific%20vehicle.%20Can%20you%20help%20me%20find%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

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
