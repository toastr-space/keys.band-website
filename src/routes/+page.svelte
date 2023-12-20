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

<div
  class="background-gradient flex w-full flex-col justify-center items-center px-16 py-11 max-md:max-w-full max-md:px-5"
>
  <header
    class="flex w-full max-w-[1200px] flex-col items-stretch mb-8 max-md:max-w-full"
  >
    <div
      class="justify-between items-stretch flex w-full gap-5 pr-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
    >
      <div class="items-stretch flex justify-between gap-5">
        <img
          loading="lazy"
          src="/img/key-logo.png"
          class="aspect-[0.76] object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
        />
        <div class="text-white text-2xl font-medium my-auto">keys.band</div>
      </div>
      <div
        class="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center"
      >
        <a
          href="https://github.com/toastr-space/keys-band"
          target="_blank"
          class="text-white text-base font-medium self-center my-auto"
        >
          GitHub
        </a>
        <!-- Add back once we have more reviews -->
        <!-- <div
          class="justify-between items-stretch bg-zinc-800 bg-opacity-70 flex gap-4 px-6 py-4 rounded-2xl border-[0.33px] border-solid border-white border-opacity-30 max-md:px-5"
        >
          <div class="text-white text-base font-medium grow whitespace-nowrap">
            Reviews
          </div>
          <div
            class="items-stretch self-center flex gap-1.5 my-auto max-md:justify-center"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab10583b4d1e06c6032a71ff36ba539ba95f9444442876c88ef0164a064f836f?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="aspect-[1.07] object-contain object-center w-4 fill-teal-400 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab10583b4d1e06c6032a71ff36ba539ba95f9444442876c88ef0164a064f836f?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="aspect-[1.07] object-contain object-center w-4 fill-teal-400 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab10583b4d1e06c6032a71ff36ba539ba95f9444442876c88ef0164a064f836f?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="aspect-[1.07] object-contain object-center w-4 fill-teal-400 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab10583b4d1e06c6032a71ff36ba539ba95f9444442876c88ef0164a064f836f?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="aspect-[1.07] object-contain object-center w-4 fill-teal-400 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f98517d564536fa4574fb880f54d6bd709127bb808d14aace03eded6fbc9d1d?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="aspect-[1.07] object-contain object-center w-4 fill-white fill-opacity-30 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div> -->
      </div>
    </div>
  </header>
  <div
    class="flex w-full max-w-[1200px] flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10 border-b border-gray-800 pb-20"
  >
    <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div
        class="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0"
      >
        <div class="flex grow flex-col max-md:mt-10">
          <h1
            class="text-white text-9xl font-semibold self-stretch max-md:max-w-full max-md:text-6xl"
          >
            Safe nsecs
          </h1>
          <h2
            class="text-teal-400 text-5xl font-medium self-stretch max-md:max-w-full"
          >
            On Chromium browsers
          </h2>
          <div
            class="text-white text-2xl font-medium leading-9 self-stretch mt-6 max-md:max-w-full"
          >
            Download our carefully crafted <br />
            <a class="underline" href="https://nostr.com" target="_blank"
              >Nostr</a
            > browser extension
          </div>
          <a
            class="link-max-width flex items-stretch justify-between border-[color:var(--AccentColour,#2FC6B4)] gap-2 mt-10 pl-9 pr-11 py-4 rounded-2xl border-[1.4px] border-solid max-md:flex-wrap max-md:px-5"
            href="https://chrome.google.com/webstore/detail/keysband/jdencabhccnfhedpfoojbbdlgmecnlkm"
            target="_blank"
          >
            <div
              class="flex-shrink basis-auto text-white text-base font-medium"
            >
              <span class="font-medium">Download</span>
              <span class="font-light">in Chrome Store</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a629e858d3575d0f2b7f47c4bb5a9a1b84c685d44dc35b117684d3ba721e9499?apiKey=f7abd25632984a63bf82dda361df2c86&"
              class="w-4 self-center shrink-0 max-w-full my-auto aspect-square object-contain object-center overflow-hidden stroke-[2px] stroke-teal-400"
              loading="lazy"
              alt="Chrome Store"
            />
          </a>
        </div>
      </div>
      <div
        class="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0"
      >
        <img
          loading="lazy"
          src="/img/main-screen.png"
          class="aspect-[0.82] object-contain object-center w-full items-start overflow-hidden max-md:mt-10"
        />
      </div>
    </div>
  </div>
  <div class="mt-20">
    <h2 class="title sm:text-4xl md:text-5xl">Fortify Your Nostr Keys</h2>
    <p class="mb-16 mx-auto intro sm:max-w-xl">
      Elevate security with our Nostr Nip07 extension, safeguarding your keys
      and overseeing activities, notifications, and more.
    </p>
    <ul
      class="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row"
    >
      <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
        <span
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-teal-400 rounded-full"
        >
          <Icon icon="game-icons:house-keys" />
        </span>
        <h3 class="mb-2 text-2xl font-bold text-white">Multi-key Management</h3>
        <p class="max-w-xs mx-auto text-lg text-gray-400">
          Simplify key management and effortlessly switch between multiple keys
          with a few clicks.
        </p>
      </li>
      <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
        <span
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-teal-400 rounded-full"
        >
          <Icon icon="mdi:shield-key-outline" />
        </span>
        <h3 class="mb-2 text-2xl font-bold text-white">Permission Control</h3>
        <p class="max-w-xs mx-auto text-lg text-gray-400">
          Manage permissions, including duration and scope, and block untrusted
          websites effortlessly.
        </p>
      </li>
      <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
        <span
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-teal-400 rounded-full"
        >
          <Icon icon="ph:notification-bold" />
        </span>
        <h3 class="mb-2 text-2xl font-bold text-white">
          History & Notifications
        </h3>
        <p class="max-w-xs mx-auto text-lg text-gray-400">
          Keep track of all activities and manage notifications for each event
          by priority.
        </p>
      </li>
    </ul>
  </div>
  <div class="max-w-[1200px] mb-16 border-b border-gray-800">
    <h2 class="mb-2 title sm:text-4xl md:text-5xl">Screenshots</h2>
    <p class="mb-20 mx-auto intro sm:max-w-xl">
      See what we have cooked up for you.
    </p>
    <div class="flex flex-col mb-8 sm:flex-row">
      <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
        <img
          class="rounded-sm w-80"
          src="/img/frame-1.png"
          alt="Screenshot 1"
        />
      </div>
      <div
        class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
      >
        <p
          class="mb-2 text-sm font-semibold leading-none text-center text-teal-400 uppercase sm:text-left"
        >
          Website Authorization
        </p>
        <h3 class="title title-small sm:text-left md:text-4xl">
          Fine-Grained Control
        </h3>
        <p class="text md:text-left">
          Easily manage permissions for each website, including duration of
          authorization and scope of access.
        </p>
      </div>
    </div>
    <div class="flex flex-col mb-8 sm:flex-row">
      <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
        <img
          class="rounded-sm w-80"
          src="/img/frame-2.png"
          alt="Screenshot 2"
        />
      </div>
      <div
        class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
      >
        <p
          class="mb-2 text-sm font-semibold leading-none text-center text-teal-400 uppercase sm:text-left"
        >
          Relays and Notifications
        </p>
        <h3 class="title title-small sm:text-left md:text-4xl">
          Keep Track of Your Activities and Manage Relays
        </h3>
        <p class="text md:text-left">
          Toggle on/off notifications for events and manage relays.
        </p>
      </div>
    </div>
    <div class="flex flex-col mb-8 sm:flex-row">
      <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
        <img
          class="rounded-sm w-80"
          src="/img/frame-3.png"
          alt="Screenshot 3"
        />
      </div>
      <div
        class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
      >
        <p
          class="mb-2 text-sm font-semibold leading-none text-center text-teal-400 uppercase sm:text-left"
        >
          Dark and Light Mode
        </p>
        <h3 class="title title-small sm:text-left md:text-4xl">
          Kind on the Eyes
        </h3>
        <p class="text md:text-left">
          Pixel perfect design with dark and light mode support.
        </p>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center sm:flex-row sm:justify-between">
    <a class="text-teal-400" href="https://keys.band">
      <img
        src="img/key-logo.png"
        width="48"
        alt="Keys.Band Logo"
        class="mx-auto mb-4"
      />
    </a>
  </div>
  <div class="flex flex-col justify-between mb-8 text-center sm:flex-row">
    <p class="order-last mb-4 text-sm text-gray-500 sm:order-first">
      Crafted with <span class="text-red-500">❤️</span> by the
      <a href="https://toastr.space/" target="_blank" class="text-white"
        >Toastr.Space</a
      > Team
    </p>
  </div>
</div>

<style>
  .background-gradient {
    background-image: linear-gradient(to bottom, black, #1c4844, black);
  }
  .link-max-width {
    max-width: 300px;
  }
</style>
