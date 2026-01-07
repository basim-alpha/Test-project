import Link from 'next/link';

const products = [
  { id: 1, name: 'Laptop', price: '$999', description: 'High-performance laptop for professionals' },
  { id: 2, name: 'Phone', price: '$699', description: 'Latest smartphone with amazing features' },
  { id: 3, name: 'Tablet', price: '$499', description: 'Portable tablet for work and play' },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Product Not Found</h1>
        <Link href="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p style={{ fontSize: '1.5rem', color: '#0070f3' }}>{product.price}</p>
      <p style={{ marginTop: '1rem' }}>{product.description}</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/products">← Back to Products</Link>
      </div>
    </div>
  );
}

