export type ProductFeature = { title: string; body: string };

export type Product = {
  slug: string;
  number: string;
  name: string;
  tint: 'cold' | 'hot';
  icon: string;
  blurb: string;
  description: string;
  features: ProductFeature[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: 'gas-equipment',
    number: '01',
    name: 'Gas Equipment',
    tint: 'cold',
    icon: 'k-reg',
    blurb:
      'Regulators, valves, meters, hoses, fittings and detection for commercial, industrial and LPG gas applications.',
    description:
      'Regulators, valves, meters, hoses, fittings and detection for commercial, industrial and LPG gas applications — sourced from qualified international manufacturers and delivered across the UAE and GCC.',
    features: [
      { title: 'Regulators & valves', body: 'Pressure regulators, changeover valves and safety shut-off devices for LPG and natural gas.' },
      { title: 'Meters & gauges', body: 'Flow meters, pressure gauges and instrumentation for commercial and industrial gas systems.' },
      { title: 'Hoses & fittings', body: 'Approved hoses, couplings, adapters and fittings for gas transfer and pipeline assemblies.' },
      { title: 'Gas detection', body: 'Fixed and portable gas detection for LPG, natural gas and industrial gases.' },
      { title: 'Industrial accessories', body: 'Filters, vaporisers, manifolds and ancillary components for gas installations.' },
      { title: 'Compliance support', body: 'Documentation aligned to applicable Civil Defense and Department of Energy requirements.' }
    ],
    applications: [
      'Commercial kitchens',
      'Industrial facilities',
      'LPG storage & distribution',
      'Hotels & hospitality',
      'MEP contractors',
      'Facility management'
    ]
  },
  {
    slug: 'fire-alarm',
    number: '02',
    name: 'Fire Alarm Equipment',
    tint: 'hot',
    icon: 'k-alarm',
    blurb:
      'Panels, detectors, call points, sounders and notification devices for commercial, industrial and residential buildings.',
    description:
      'Addressable and conventional fire alarm systems for commercial, industrial and residential buildings — panels, detection, notification and integration components.',
    features: [
      { title: 'Control panels', body: 'Addressable and conventional fire alarm control panels, repeaters and network modules.' },
      { title: 'Detection', body: 'Smoke, heat, multi-criteria and beam detectors for a range of environments.' },
      { title: 'Manual call points', body: 'Manual call points and interface units suitable for UAE installation standards.' },
      { title: 'Notification', body: 'Sounders, beacons, voice evacuation and combined notification appliances.' },
      { title: 'Integration', body: 'Interfaces for suppression, BMS, access control and other building systems.' },
      { title: 'Compliance support', body: 'Documentation aligned to Civil Defense and UAE Fire & Life Safety Code.' }
    ],
    applications: [
      'Commercial buildings',
      'Industrial facilities',
      'Hospitality',
      'Warehouses',
      'Residential towers',
      'MEP contractors'
    ]
  },
  {
    slug: 'firefighting',
    number: '03',
    name: 'Firefighting Equipment',
    tint: 'hot',
    icon: 'k-hose',
    blurb:
      'Extinguishers, hydrants, hose reels, nozzles, valves, cabinets and sprinkler system components.',
    description:
      'Extinguishers, hydrants, hose reels, nozzles, valves, cabinets and sprinkler system components for the protection of commercial, industrial and residential buildings.',
    features: [
      { title: 'Extinguishers', body: 'Portable and wheeled extinguishers for a range of fire classes and applications.' },
      { title: 'Hydrants & landing valves', body: 'Wet and dry hydrants, landing valves and associated fittings.' },
      { title: 'Hose reels & hoses', body: 'Fixed hose reels, fire hoses and couplings certified for regional use.' },
      { title: 'Nozzles & valves', body: 'Branch pipes, nozzles, valves and flow control devices.' },
      { title: 'Cabinets & accessories', body: 'Fire cabinets, brackets, signage and installation accessories.' },
      { title: 'Sprinkler components', body: 'Sprinkler heads, alarm valves, flow switches and pipeline components.' }
    ],
    applications: [
      'Commercial buildings',
      'Industrial facilities',
      'Warehouses',
      'Hospitality',
      'Facility management',
      'Fire & safety contractors'
    ]
  },
  {
    slug: 'kitchen-hood',
    number: '04',
    name: 'Kitchen Hood Suppression',
    tint: 'hot',
    icon: 'k-hood',
    blurb:
      'Detection, cylinders, nozzles, fusible links and control panels for commercial kitchen fire protection.',
    description:
      'Complete kitchen hood suppression systems for commercial kitchens — detection, agent storage, distribution and control.',
    features: [
      { title: 'Detection', body: 'Fusible links, heat detection and manual release stations for hood and duct coverage.' },
      { title: 'Cylinders & agents', body: 'Wet chemical and clean agent cylinders sized for kitchen applications.' },
      { title: 'Nozzles & piping', body: 'Appliance, plenum and duct nozzles with appropriate piping and fittings.' },
      { title: 'Control panels', body: 'Dedicated control panels with gas and power shut-off interfaces.' },
      { title: 'Integration', body: 'Interfaces for gas valves, electrical isolation and fire alarm systems.' },
      { title: 'Compliance support', body: 'Documentation aligned to Civil Defense and UAE Fire & Life Safety Code.' }
    ],
    applications: [
      'Restaurants & commercial kitchens',
      'Hotels & hospitality',
      'Cloud kitchens',
      'Industrial canteens',
      'Facility management',
      'Fire & safety contractors'
    ]
  },
  {
    slug: 'industrial-gas',
    number: '05',
    name: 'Industrial Gas Equipment',
    tint: 'cold',
    icon: 'k-plant',
    blurb:
      'Manifolds, pressure control, vaporisation, monitoring and pipeline components for industrial installations.',
    description:
      'Manifolds, pressure control, vaporisation, monitoring and pipeline components for industrial gas installations across manufacturing, processing and utilities.',
    features: [
      { title: 'Manifolds & headers', body: 'High and low pressure manifolds for cylinder and bulk gas distribution.' },
      { title: 'Pressure control', body: 'Industrial regulators, relief valves and safety systems.' },
      { title: 'Vaporisation', body: 'Electric and steam vaporisers for high-flow industrial gas applications.' },
      { title: 'Monitoring', body: 'Pressure, flow and level monitoring devices and instrumentation.' },
      { title: 'Pipeline components', body: 'Valves, filters, gauges and pipeline accessories for gas distribution.' },
      { title: 'Compliance support', body: 'Documentation aligned to Department of Energy and applicable regional requirements.' }
    ],
    applications: [
      'Manufacturing plants',
      'Industrial facilities',
      'Processing plants',
      'Utilities',
      'Engineering companies',
      'System integrators'
    ]
  },
  {
    slug: 'oilgas-iot',
    number: '06',
    name: 'IoT for Oil & Gas',
    tint: 'cold',
    icon: 'k-iot',
    blurb:
      'Remote monitoring, leak detection, condition monitoring and industrial connectivity for Oil & Gas operations.',
    description:
      'IoT and remote monitoring solutions for Oil & Gas operations — leak detection, condition monitoring and industrial connectivity for pipelines, tanks and rotating equipment.',
    features: [
      { title: 'Remote monitoring', body: 'Wireless sensors and gateways for remote assets and unmanned sites.' },
      { title: 'Leak detection', body: 'Gas and liquid leak detection for pipelines, tanks and process areas.' },
      { title: 'Condition monitoring', body: 'Vibration, temperature and pressure monitoring for rotating and static equipment.' },
      { title: 'Industrial connectivity', body: 'Industrial gateways, protocol converters and secure connectivity options.' },
      { title: 'Dashboards & alerts', body: 'Data visualisation and alerting suitable for operations and maintenance teams.' },
      { title: 'Integration support', body: 'Interfaces for SCADA, BMS and enterprise systems.' }
    ],
    applications: [
      'Oil & Gas operations',
      'Pipelines & terminals',
      'Refineries & petrochemical',
      'Tank farms',
      'System integrators',
      'Equipment distributors'
    ]
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}