import "@styles/global.css";

export default function Layout({ children }: Components.BaseProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
