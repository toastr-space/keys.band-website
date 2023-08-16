<script lang="ts">
  import Icon from "@iconify/svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Keys.Band Extension for Chrome"
  titleTemplate="%s | Svelte Meta Tags"
  description="Explore the Nostr Nip07 extension for browsers"
  canonical="https://www.canonical.ie/"
  openGraph={{
    url: "https://keys.band",
    title: "Unlock the Keys.Band Chrome Extension",
    description: "Discover the Nostr Nip07 extension for browsers.",
    images: [
      {
        url: "https://keys.band/img/logo.png",
        width: 800,
        height: 600,
        alt: "Keys.Band Og Image",
      },
    ],
    site_name: "Keys.Band",
  }}
  twitter={{
    handle: "@handle",
    site: "https://keys.band",
    cardType: "summary_large_image",
    title: "Unlock the Keys.Band Chrome Extension",
    description: "Discover the Nostr Nip07 extension for browsers.",
    image: "https://keys.band/img/logo.png",
    imageAlt: "Twitter Image for Keys.Band",
  }}
/>

<div class="w-full pl-16">
  <div class="absolute inset-0 bg-top bg-no-repeat bg-illustration-01" />
  <div class="absolute inset-0 bg-center bg-no-repeat bg-illustration-02" />
  <div class="container relative">
    <div class="flex items-center justify-between py-6">
      <a href="#" class="flex">
        <img
          class="block w-10 h-10"
          src="img/logo_white.png"
          alt="Keys.Band Logo"
        />
        &nbsp;
        <span
          class="text-2xl ml-4 mt-1 font-semibold font-sans text-purple-400"
          style="font-family: 'Futura', sans-serif;"
        >
          keys.<span class="text-white">band</span>
        </span>
      </a>

      <div class="flex items-center mb-4 md:block">
        <a
          class="mr-8 font-semibold hover:text-white"
          target="_blank"
          href="https://github.com/toastr-space/keys-band/">GitHub</a
        >
      </div>
    </div>
    <h1
      class="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl"
    >
      Keep your keys safe with the best Nostr Nip07 Extension for
      <span class="text-cyan-500">Chromium Browsers</span>
    </h1>
    <div
      class="py-4 flex flex-row space-x-10 mr-auto opacity-90 justify-center"
    >
      <Icon icon="logos:chrome" width={54} />
      <Icon icon="logos:brave" width={50} />
    </div>
    <p class="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
      Experience the free Nostr Nip07 multi-key manager for your browser, packed
      with innovative features.
    </p>
    <div
      class="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row"
    >
      <a
        class="mb-3 pb-14 pt-3 btn btn-primary text-black w-66 sm:mr-2 flex space-x-20"
        href="#"
      >
        <Icon icon="logos:chrome-web-store" width={48} class="pr-2" />
        Get It from the Chrome Web Store
      </a>
    </div>
    <div class="mb-16">
      <img
        class="block w-full max-w-2xl mx-auto rounded-2xl"
        src="https://www.blackbitcoinbillionaire.com/content/images/2023/02/Screenshot-2023-02-26-at-4.50.24-PM.png"
        width="260"
        alt="Extension Screenshot"
      />
    </div>
    <div>
      <h2 class="title sm:text-4xl md:text-5xl">Fortify Your Nostr Keys</h2>
      <p class="mb-16 mx-auto intro sm:max-w-xl">
        Elevate security with the Nostr Nip07 extension, safeguarding your keys
        and overseeing activities, notifications, and more.
      </p>
      <ul
        class="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row"
      >
        <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
          >
            <Icon icon="game-icons:house-keys" />
          </span>
          <h3 class="mb-2 text-2xl font-bold text-white">
            Multi-key Management
          </h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            Simplify key management and effortlessly switch between multiple
            keys with a single click.
          </p>
        </li>
        <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
          >
            <Icon icon="mdi:shield-key-outline" />
          </span>
          <h3 class="mb-2 text-2xl font-bold text-white">Permission Control</h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            Manage permissions, including duration and scope, and block
            untrusted websites effortlessly.
          </p>
        </li>
        <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
          >
            <Icon icon="ph:notification-bold" />
          </span>
          <h3 class="mb-2 text-2xl font-bold text-white">
            History & Notifications
          </h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            Keep track of all activities and manage notifications for each event
            by priority.
          </p>
        </li>
      </ul>
    </div>
    <div class="mb-16 border-b border-gray-800">
      <h2 class="mb-2 title sm:text-4xl md:text-5xl">Screenshots</h2>
      <p class="mb-20 mx-auto intro sm:max-w-xl">
        See what we have cooked up for you.
      </p>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
          <img src="/img/frame-1.svg" alt="Screenshot 1" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            Explore Your Activities
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Real-Time Monitoring
          </h3>
          <p class="text md:text-left">
            In this screenshot, you can observe the request count, current
            website information, and permission status. You also have the
            ability to update website permissions by simply clicking on the
            'Update' button. For limited-time permissions, a countdown timer is
            displayed.
          </p>
        </div>
      </div>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
          <img class="rounded-sm" src="/img/frame-2.svg" alt="Screenshot 2" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            Logging and Notifications
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Keep Track of Your Activities
          </h3>
          <p class="text md:text-left">
            Welcome to the logging page! Witness a comprehensive view of all
            your activities. You also have the capability to manage notification
            alerts for each event.
          </p>
        </div>
      </div>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
          <img class="rounded-sm" src="/img/frame-3.svg" alt="Screenshot 3" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            Enhanced Security
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Control Secure Request Access
          </h3>
          <p class="text md:text-left">
            All requests are presented in a popup in a separate context that is
            inaccessible to websites. Only the user has the authority to accept
            or deny the requests, ensuring a heightened level of security.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
      <a class="text-indigo-700" href="https://keys.band">
        <img
          src="img/logo_white.png"
          width="48"
          alt="Keys.Band Logo"
          class="mx-auto mb-4"
        />
      </a>
    </div>
    <div class="flex flex-col justify-between mb-8 text-center sm:flex-row">
      <p class="order-last mb-4 text-sm text-gray-500 sm:order-first">
        Crafted with <span class="text-red-500">❤️</span> by the
        <a href="https://toastr.space/" class="text-white">Toastr.Space</a> Team
      </p>
    </div>
  </div>
</div>
