import Link from 'next/link';

const products = [
  { id: 1, name: 'Laptop', price: '$999' },
  { id: 2, name: 'Phone', price: '$699' },
  { id: 3, name: 'Tablet', price: '$499' },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <p>Browse our product catalog</p>
      <ul style={{ marginTop: '1rem' }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}

