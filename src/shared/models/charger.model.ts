// export interface Charger {
//   serialNumber: string;
//   unitId: string;
//   status: string;
//   lastUpdated: string;
//   type: string;
//   typeIcon: string;
//   location: {
//     name: string;
//     address: string;
//     postcode: string;
//     region: string;
//     coordinates: {
//       lat: number;
//       lng: number;
//     };
//   };
//   vehicleType: string;
//   openingHours: string;
//   supportContact: string;
//   parkingChargesApply: boolean;
//   hgvAccess?: boolean;
//   largeBays?: boolean;
//   easyTurning?: boolean;
//   open24h?: boolean;
//   connectors: {
//     type: string;
//     maxPower: string;
//     pricing: string;
//   }[];
//   maxPower: number;
//   amenities?: {
//     tag: string;
//     icon: string;
//   }[];
// }

export interface Charger {
  serialNumber: string;
  unitId: string;
  status: 'available' | 'charging' | 'maintenance' | 'unknown' | string;
  lastUpdated: string;
  lastUsed: string;
  price: string;
  priceChange: number;
  uptime: number;
  uptimeChange: number;
  type: string;
  typeIcon: string;
  location: {
    name: string;
    address: string;
    postcode: string;
    region: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  vehicleType: string;
  openingHours: Array<{
    day: string;
    hours: string;
  }>;
  supportContact: string;
  parkingChargesApply: boolean;
  hgvAccess: boolean;
  largeBays: boolean;
  easyTurning: boolean;
  open24h: boolean;
  bays: Array<{
    type: string;
    maxPower: string;
  }>;
  maxPower: number;
  amenities: Array<{
    tag: string;
    icon: string;
  }>;
}
