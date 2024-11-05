import dynamic from 'next/dynamic';

const ShipyardComponent = dynamic(() => import('@/components/Shipyard/ShipyardComponent'), {
  ssr: false,
});

export default function ShipyardPage() {
  return <ShipyardComponent />;
}