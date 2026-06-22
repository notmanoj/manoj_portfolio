export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container-frame">{children}</div>;
}
