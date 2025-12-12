import { BlogSidebar } from './components/BlogSidebar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
      <aside className="lg:col-span-1 order-2 lg:order-1">
        <BlogSidebar />
      </aside>
      <main className="lg:col-span-3 order-1 lg:order-2">
        {children}
      </main>
    </div>
  );
}