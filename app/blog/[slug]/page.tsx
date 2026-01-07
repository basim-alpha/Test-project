import Link from 'next/link';

const posts = [
  { 
    slug: 'getting-started', 
    title: 'Getting Started with Next.js', 
    date: '2025-01-15',
    content: 'Next.js is a powerful React framework that makes building web applications easy and efficient.' 
  },
  { 
    slug: 'web-development', 
    title: 'Modern Web Development Tips', 
    date: '2025-02-20',
    content: 'Learn the best practices for modern web development including performance optimization and accessibility.' 
  },
  { 
    slug: 'design-patterns', 
    title: 'Design Patterns in React', 
    date: '2025-03-10',
    content: 'Explore common design patterns used in React applications to write cleaner and more maintainable code.' 
  },
];

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Post Not Found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <article>
        <h1>{post.title}</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>{post.date}</p>
        <p style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>{post.content}</p>
      </article>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    </div>
  );
}

