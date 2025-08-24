export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;
  engine: string;
  image: string;
  featured: boolean;
  availability: 'available' | 'sold' | 'reserved';
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 8500000,
    mileage: 25000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Black',
    engine: '2.5L',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    
    featured: true,
    availability: 'available'
  },
  {
    id: 2,
    make: 'Lexus',
    model: 'RX 350',
    year: 2019,
    price: 12000000,
    mileage: 35000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'White',
    engine: '3.5L V6',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    availability: 'available'
  },
  {
    id: 3,
    make: 'Honda',
    model: 'Accord',
    year: 2018,
    price: 6800000,
    mileage: 40000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Blue',
    engine: '2.4L',
    image: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    availability: 'available'
  },
  {
    id: 4,
    make: 'Mercedes-Benz',
    model: 'C300',
    year: 2021,
    price: 15500000,
    mileage: 18000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Silver',
    engine: '2.0L Turbo',
    image: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    availability: 'available'
  },
  {
    id: 5,
    make: 'BMW',
    model: 'X3',
    year: 2019,
    price: 13200000,
    mileage: 32000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Black',
    engine: '2.0L Turbo',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    availability: 'available'
  },
  {
    id: 6,
    make: 'Hyundai',
    model: 'Elantra',
    year: 2020,
    price: 4800000,
    mileage: 28000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Red',
    engine: '2.0L',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    availability: 'available'
  },
  {
    id: 7,
    make: 'Ford',
    model: 'Explorer',
    year: 2018,
    price: 9200000,
    mileage: 45000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'White',
    engine: '3.5L V6',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    availability: 'available'
  },
  {
    id: 8,
    make: 'Nissan',
    model: 'Altima',
    year: 2019,
    price: 5500000,
    mileage: 38000,
    fuelType: 'Petrol',
    transmission: 'CVT',
    bodyType: 'Sedan',
    color: 'Gray',
    engine: '2.5L',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    availability: 'available'
  }
];