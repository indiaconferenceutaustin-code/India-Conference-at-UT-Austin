import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-mono text-7xl font-bold text-accent">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-accent"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-accent"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "UT Austin India Conference — India at 100: Decades of Decisions" },
      {
        name: "description",
        content:
          "The inaugural UT Austin India Conference. A pan-university forum on India's next two decades — economy, technology, sustainability, and identity.",
      },
      { name: "author", content: "India Conference at UT Austin" },
      { property: "og:title", content: "UT Austin India Conference — India at 100: Decades of Decisions" },
      {
        property: "og:description",
        content: "The inaugural UT Austin India Conference. A pan-university forum on India's next two decades — economy, technology, sustainability, and identity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UT Austin India Conference — India at 100: Decades of Decisions" },
      { name: "twitter:description", content: "The inaugural UT Austin India Conference. A pan-university forum on India's next two decades — economy, technology, sustainability, and identity." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d584346f-01c6-4841-a2be-23b5b8c241a6/id-preview-740f852c--9dce0c63-7839-417b-9ade-f0d25767066d.lovable.app-1784364629555.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d584346f-01c6-4841-a2be-23b5b8c241a6/id-preview-740f852c--9dce0c63-7839-417b-9ade-f0d25767066d.lovable.app-1784364629555.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 relative overflow-hidden">
        {/* Ambient background glows - Indian Tricolor */}
        <div className="pointer-events-none absolute top-[5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF671F]/12 blur-[120px] mix-blend-screen animate-pulse duration-[8000ms]" />
        <div className="pointer-events-none absolute top-[35%] right-[-15%] w-[600px] h-[600px] rounded-full bg-white/[0.06] blur-[140px] mix-blend-screen animate-pulse duration-[12000ms]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#046A38]/12 blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />

        <SiteHeader />
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
