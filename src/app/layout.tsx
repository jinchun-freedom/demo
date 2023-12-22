
import '~/styles/globals.scss';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
