<script lang="ts">
  import { MetaTags, JsonLd } from "svelte-meta-tags";
  import { KeyRound, ShieldCheck, Bell, Github, Chrome, ArrowDown } from "lucide-svelte";
</script>

<MetaTags
  title="Keys.Band — Secure Nostr Key Management Extension"
  titleTemplate="%s"
  description="Keys.Band is the most secure NIP-07 browser extension for Nostr. Manage multiple keys, control website permissions, track signing history, and protect your digital identity on Chromium browsers."
  canonical="https://keys.band"
  keywords={["nostr", "nip-07", "browser extension", "chrome extension", "key management", "nsec", "npub", "cryptographic keys", "digital identity", "decentralized", "privacy", "security"]}
  openGraph={{
    type: "website",
    url: "https://keys.band",
    title: "Keys.Band — Secure Nostr Key Management",
    description: "The most secure NIP-07 browser extension for Nostr. Manage multiple keys, control permissions, and protect your digital identity.",
    siteName: "Keys.Band",
    locale: "en_US",
    images: [
      {
        url: "https://keys.band/img/key-logo.png",
        width: 512,
        height: 512,
        alt: "Keys.Band - Secure Nostr Key Management Extension",
        type: "image/png",
      },
    ],
  }}
  twitter={{
    site: "@keysband",
    cardType: "summary_large_image",
    title: "Keys.Band — Secure Nostr Key Management",
    description: "The most secure NIP-07 browser extension for Nostr. Manage multiple keys, control permissions, and protect your identity.",
    image: "https://keys.band/img/key-logo.png",
    imageAlt: "Keys.Band - Secure Nostr Key Management Extension",
  }}
  additionalMetaTags={[
    { name: "author", content: "Tirith.tech" },
    { name: "theme-color", content: "#2FC6B4" },
    { name: "application-name", content: "Keys.Band" },
    { name: "apple-mobile-web-app-title", content: "Keys.Band" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { property: "og:locale", content: "en_US" },
  ]}
  additionalLinkTags={[
    { rel: "icon", href: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", href: "/img/key-logo.png" },
  ]}
/>

<JsonLd
  schema={{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Keys.Band",
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Chrome, Brave, Edge, Opera",
    "description": "Secure NIP-07 browser extension for Nostr key management. Manage multiple keys, control website permissions, and protect your digital identity.",
    "url": "https://keys.band",
    "downloadUrl": "https://chrome.google.com/webstore/detail/keysband/jdencabhccnfhedpfoojbbdlgmecnlkm",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Tirith.tech",
      "url": "https://tirith.tech"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "10"
    },
    "featureList": [
      "Multi-key management",
      "Fine-grained permission control",
      "Activity history and notifications",
      "Dark and light mode support",
      "NIP-07 compliant"
    ],
    "screenshot": "https://keys.band/img/main-screen.png",
    "browserRequirements": "Requires Chromium-based browser (Chrome, Brave, Edge, Opera)"
  }}
/>

<JsonLd
  schema={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Keys.Band",
    "url": "https://keys.band",
    "description": "Secure Nostr key management browser extension",
    "publisher": {
      "@type": "Organization",
      "name": "Tirith.tech",
      "url": "https://tirith.tech"
    }
  }}
/>

<JsonLd
  schema={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Keys.Band?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keys.Band is a secure NIP-07 browser extension for Nostr that allows you to manage multiple cryptographic keys, control website permissions, and protect your digital identity on Chromium-based browsers."
        }
      },
      {
        "@type": "Question",
        "name": "Which browsers support Keys.Band?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keys.Band works on all Chromium-based browsers including Google Chrome, Brave, Microsoft Edge, and Opera."
        }
      },
      {
        "@type": "Question",
        "name": "Is Keys.Band free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Keys.Band is completely free to use. You can download it from the Chrome Web Store."
        }
      }
    ]
  }}
/>

<div class="min-h-screen noise grid-pattern">
  <!-- Ambient glow effects -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2FC6B4] opacity-[0.03] blur-[150px] rounded-full"></div>
    <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#2FC6B4] opacity-[0.02] blur-[120px] rounded-full"></div>
  </div>

  <!-- Navigation -->
  <nav class="relative z-10 px-6 lg:px-12 py-6">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 group fade-in">
        <div class="relative">
          <img
            src="/img/key-logo.png"
            alt="Keys.Band"
            class="w-10 h-auto transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-[#2FC6B4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </div>
        <span class="font-display font-semibold text-xl tracking-tight">keys.band</span>
      </a>

      <div class="flex items-center gap-8">
        <a
          href="https://github.com/toastr-space/keys-band"
          target="_blank"
          rel="noopener noreferrer"
          class="fade-in stagger-1 text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-2"
        >
          <Github class="w-5 h-5" />
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative z-10 px-6 lg:px-12 pt-16 pb-32 lg:pt-24 lg:pb-40">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <!-- Left: Content -->
        <div class="max-w-xl">
          <div class="fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] mb-8">
            <span class="relative flex h-2 w-2">
              <span class="pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span class="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">NIP-07 Extension</span>
          </div>

          <h1 class="fade-in-up stagger-2 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            Your keys,<br/>
            <span class="text-gradient glow-text">your identity</span>
          </h1>

          <p class="fade-in-up stagger-3 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-md">
            The secure way to manage your Nostr keys. One extension, complete control over your digital identity.
          </p>

          <div class="fade-in-up stagger-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://chrome.google.com/webstore/detail/keysband/jdencabhccnfhedpfoojbbdlgmecnlkm"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary flex items-center justify-center gap-3"
            >
              <Chrome class="w-5 h-5" />
              <span>Add to Chrome</span>
            </a>
            <a href="#features" class="btn-outline flex items-center justify-center gap-2">
              <span>Learn more</span>
              <ArrowDown class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Right: Screenshot -->
        <div class="fade-in-up stagger-5 relative flex justify-center lg:justify-end">
          <div class="relative">
            <div class="screenshot-frame glow">
              <img
                src="/img/main-screen.png"
                alt="Keys.Band Extension Interface"
                class="w-full max-w-[320px] h-auto"
              />
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 border border-[var(--border)] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="divider max-w-4xl mx-auto"></div>

  <!-- Features Section -->
  <section id="features" class="relative z-10 px-6 lg:px-12 py-32">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="fade-in-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
          Built for security
        </h2>
        <p class="fade-in-up stagger-1 text-[var(--text-secondary)] text-lg max-w-lg mx-auto">
          Every feature designed with one goal: keeping your Nostr identity safe.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Feature 1 -->
        <div class="feature-card hover-lift fade-in-up stagger-2">
          <div class="w-12 h-12 flex items-center justify-center rounded bg-[var(--accent)] mb-6">
            <KeyRound class="w-6 h-6 text-[var(--bg-deep)]" />
          </div>
          <h3 class="font-display font-semibold text-xl mb-3">Multi-Key Management</h3>
          <p class="text-[var(--text-secondary)] leading-relaxed">
            Seamlessly switch between multiple identities. One click to change who you are on Nostr.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card hover-lift fade-in-up stagger-3">
          <div class="w-12 h-12 flex items-center justify-center rounded bg-[var(--accent)] mb-6">
            <ShieldCheck class="w-6 h-6 text-[var(--bg-deep)]" />
          </div>
          <h3 class="font-display font-semibold text-xl mb-3">Permission Control</h3>
          <p class="text-[var(--text-secondary)] leading-relaxed">
            Fine-grained access control. Decide exactly what each site can do with your keys.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card hover-lift fade-in-up stagger-4">
          <div class="w-12 h-12 flex items-center justify-center rounded bg-[var(--accent)] mb-6">
            <Bell class="w-6 h-6 text-[var(--bg-deep)]" />
          </div>
          <h3 class="font-display font-semibold text-xl mb-3">Activity History</h3>
          <p class="text-[var(--text-secondary)] leading-relaxed">
            Complete visibility into every signing request. Know exactly what's happening with your keys.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="divider max-w-4xl mx-auto"></div>

  <!-- Screenshots Section -->
  <section class="relative z-10 px-6 lg:px-12 py-32">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="fade-in-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
          Crafted with care
        </h2>
        <p class="fade-in-up stagger-1 text-[var(--text-secondary)] text-lg max-w-lg mx-auto">
          Every pixel considered. Every interaction refined.
        </p>
      </div>

      <div class="space-y-32">
        <!-- Screenshot 1 -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="order-2 lg:order-1">
            <span class="fade-in-up inline-block text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-4">Authorization</span>
            <h3 class="fade-in-up stagger-1 font-display font-bold text-2xl sm:text-3xl mb-4">Granular Permissions</h3>
            <p class="fade-in-up stagger-2 text-[var(--text-secondary)] text-lg leading-relaxed">
              Control access duration and scope for each website. Block untrusted sites instantly. Your keys, your rules.
            </p>
          </div>
          <div class="fade-in-up stagger-3 order-1 lg:order-2 flex justify-center">
            <div class="screenshot-frame hover-lift">
              <img src="/img/frame-1.png" alt="Permission Control Interface" class="w-full max-w-[280px]" />
            </div>
          </div>
        </div>

        <!-- Screenshot 2 -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="fade-in-up flex justify-center">
            <div class="screenshot-frame hover-lift">
              <img src="/img/frame-2.png" alt="Relay Management Interface" class="w-full max-w-[280px]" />
            </div>
          </div>
          <div>
            <span class="fade-in-up inline-block text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-4">Relays</span>
            <h3 class="fade-in-up stagger-1 font-display font-bold text-2xl sm:text-3xl mb-4">Relay Management</h3>
            <p class="fade-in-up stagger-2 text-[var(--text-secondary)] text-lg leading-relaxed">
              Configure your relay connections. Toggle notifications. Stay informed about every event that matters.
            </p>
          </div>
        </div>

        <!-- Screenshot 3 -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="order-2 lg:order-1">
            <span class="fade-in-up inline-block text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-4">Themes</span>
            <h3 class="fade-in-up stagger-1 font-display font-bold text-2xl sm:text-3xl mb-4">Light & Dark</h3>
            <p class="fade-in-up stagger-2 text-[var(--text-secondary)] text-lg leading-relaxed">
              Pixel-perfect design in both modes. Easy on the eyes, day or night.
            </p>
          </div>
          <div class="fade-in-up stagger-3 order-1 lg:order-2 flex justify-center">
            <div class="screenshot-frame hover-lift">
              <img src="/img/frame-3.png" alt="Theme Options" class="w-full max-w-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="relative z-10 px-6 lg:px-12 py-32">
    <div class="max-w-3xl mx-auto text-center">
      <div class="fade-in-up relative p-12 sm:p-16 rounded-lg border border-[var(--border)] bg-gradient-to-b from-[var(--bg-surface)] to-transparent">
        <div class="absolute inset-0 bg-[var(--accent)] opacity-[0.02] rounded-lg"></div>
        <h2 class="relative font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6">
          Ready to secure your identity?
        </h2>
        <p class="relative text-[var(--text-secondary)] text-lg mb-10 max-w-md mx-auto">
          Join thousands of Nostr users who trust Keys.Band with their keys.
        </p>
        <a
          href="https://chrome.google.com/webstore/detail/keysband/jdencabhccnfhedpfoojbbdlgmecnlkm"
          target="_blank"
          rel="noopener noreferrer"
          class="relative btn-primary inline-flex items-center gap-3"
        >
          <Chrome class="w-5 h-5" />
          <span>Install Keys.Band</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="relative z-10 px-6 lg:px-12 py-12 border-t border-[var(--border)]">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <a href="/" class="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
        <img src="/img/key-logo.png" alt="Keys.Band" class="w-8 h-auto" />
        <span class="font-display font-medium">keys.band</span>
      </a>

      <p class="text-sm text-[var(--text-muted)]">
        Crafted by <a href="https://tirith.tech/" target="_blank" rel="noopener noreferrer" class="text-[var(--text-secondary)] hover:text-white transition-colors">Tirith.tech</a>
      </p>
    </div>
  </footer>
</div>
