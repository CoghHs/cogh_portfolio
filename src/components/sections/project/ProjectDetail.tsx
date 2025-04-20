export default function ProjectDetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
