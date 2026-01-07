import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        We are a company focused on delivering quality products and services.
        Our team is dedicated to innovation and customer satisfaction.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Our Mission</h2>
        <p style={{ marginTop: '0.5rem' }}>
          To provide exceptional value through cutting-edge technology solutions.
        </p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}

