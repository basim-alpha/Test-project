import Link from 'next/link';

const posts = [
  { slug: 'getting-started', title: 'Getting Started with Next.js', date: '2025-01-15' },
  { slug: 'web-development', title: 'Modern Web Development Tips', date: '2025-02-20' },
  { slug: 'design-patterns', title: 'Design Patterns in React', date: '2025-03-10' },
];

export default function BlogPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      <p>Read our latest articles</p>
      <ul style={{ marginTop: '1rem' }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/blog/${post.slug}`}>
              <div>
                <strong>{post.title}</strong>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>{post.date}</div>
              </div>
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

