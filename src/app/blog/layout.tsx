import { BlogSidebar } from './components/BlogSidebar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1">
        <BlogSidebar />
      </aside>
      <main className="md:col-span-3">
        {children}
      </main>
    </div>
  );
}