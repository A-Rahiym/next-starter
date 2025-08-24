"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Fuel, 
  Gauge, 
  Settings, 
  Calendar, 
  Car, 
  Shield, 
  MessageSquare, 
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

interface VehicleModalProps {
  vehicle: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, isOpen, onClose }: VehicleModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  if (!vehicle) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // For demo purposes, we'll use the same image multiple times
  const images = [vehicle.image[0], vehicle.image[1], vehicle.image[2]];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openInquiry = () => {
    setShowInquiryModal(true);
  };

  const openBooking = () => {
    onClose(); // Close the vehicle modal first
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {vehicle.make} {vehicle.model} {vehicle.year}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt={`${vehicle.make} ${vehicle.model} - Image ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover"
                />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {vehicle.featured && (
                  <Badge className="absolute top-4 left-4 bg-orange-600">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex space-x-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-16 rounded border-2 overflow-hidden ${
                        index === currentImageIndex ? 'border-orange-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Details */}
            <div className="space-y-6">
              <div className="text-3xl font-bold text-orange-600">
                {formatPrice(vehicle.price)}
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {vehicle.mileage.toLocaleString()} km
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">{vehicle.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">{vehicle.fuelType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">{vehicle.transmission}</span>
                </div>
              </div>

              {/* Additional Details */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Vehicle Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Body Type:</span>
                    <span className="ml-2 text-gray-900">{vehicle.bodyType || 'Sedan'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    <span className="ml-2 text-gray-900">{vehicle.color || 'Black'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Engine:</span>
                    <span className="ml-2 text-gray-900">{vehicle.engine || '2.0L'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Condition:</span>
                    <span className="ml-2 text-gray-900">Excellent</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    Comprehensive Inspection
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-green-500" />
                    Clean Title
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    Warranty Included
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-green-500" />
                    Service Records
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t">
                <Button
                  onClick={openInquiry}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Inquire About This Vehicle
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={openBooking}
                    variant="outline"
                    className="hover:bg-orange-50 hover:border-orange-300"
                  >
                    Book Test Drive
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-green-50 hover:border-green-300"
                    asChild
                  >
                    <a
                      href={`https://wa.me/2348123456789?text=Hi%2C%20I'm%20interested%20in%20the%20${vehicle.make}%20${vehicle.model}%20${vehicle.year}%20priced%20at%20${formatPrice(vehicle.price)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 pt-4 border-t">
                Available for immediate delivery • Trade-ins accepted
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showInquiryModal && (
        <InquiryModal
          isOpen={showInquiryModal}
          onClose={() => setShowInquiryModal(false)}
          vehicle={vehicle}
        />
      )}
    </>
  );
}