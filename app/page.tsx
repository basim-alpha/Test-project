import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to My Next.js App</h1>
      <p style={{ marginTop: '1rem' }}>
        This is a simple demo with multiple routes and nested pages.
      </p>
      
      <nav style={{ marginTop: '2rem' }}>
        <h2>Explore:</h2>
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link href="/products" style={{ fontSize: '1.125rem', color: '#0070f3' }}>
              📦 Products
            </Link>
            <span style={{ marginLeft: '0.5rem', color: '#666' }}>
              (with nested product detail pages)
            </span>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link href="/blog" style={{ fontSize: '1.125rem', color: '#0070f3' }}>
              📝 Blog
            </Link>
            <span style={{ marginLeft: '0.5rem', color: '#666' }}>
              (with nested blog post pages)
            </span>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link href="/about" style={{ fontSize: '1.125rem', color: '#0070f3' }}>
              ℹ️ About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
