<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<div class="w-full pl-16">
  <div class="absolute inset-0 bg-top bg-no-repeat bg-illustration-01" />
  <div class="absolute inset-0 bg-center bg-no-repeat bg-illustration-02" />
  <div class="container relative">
    <div class="flex items-center justify-between py-6">
      <a href="#" class="flex">
        <img class="block w-10 h-10" src="img/logo_white.png" alt="" />
        &nbsp
        <span
          class="text-2xl ml-4 mt-1 font-semibold font-sans text-purple-400"
          style="font-family: 'Courier New', Courier, monospace;"
          >Keys.<span class="text-white">band</span></span
        >
      </a>

      <div class="flex items-center mb-4 md:block">
        <a class="mr-8 font-semibold hover:text-white" href="#">Github</a>
      </div>
    </div>
    <h1
      class="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl"
    >
      Nostr Nip07 extension for <br />
      <span class="text-cyan-500"> browsers </span>
    </h1>
    <div
      class="py-4 flex flex-row space-x-10 mr-auto opacity-60 justify-center"
    >
      <Icon icon="logos:chrome" width={54} />
      <Icon icon="logos:brave" width={52} />
      <Icon icon="logos:microsoft-edge" width={54} class="opacity-20" />
      <Icon icon="logos:firefox" width={54} class="opacity-20" />
    </div>
    <p class="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
      100% free nostr nip07 multi-key manager for your browser, with lot of
      innovative new feature
    </p>
    <div
      class="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row"
    >
      <a
        class="mb-4 pb-14 py-2 bg-cyan-900 btn w-64 hover:bg-cyan-700 sm:mr-2 flex space-x-20 rounded rounded-xl"
        href="#"
      >
        <Icon icon="logos:chrome" width={48} class="pr-2" />
        Install on chrome
      </a>
    </div>
    <div class="mb-16">
      <img
        class="block w-full max-w-5xl mx-auto rounded"
        src="img/video-placeholder.jpg"
        alt=""
      />
    </div>
    <div>
      <h2 class="title sm:text-4xl md:text-5xl">Secure your nostr keys</h2>
      <p class="mb-16 mx-auto intro sm:max-w-xl">
        By using nostr nip07 extension you can secure your nostr keys and follow
        all your activity, manage notification, block website and much more.
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
          <h3 class="mb-2 text-2xl font-bold text-white">Multi-key Manager</h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            Keys.band extension allow you to manage multiple keys, and switch
            between them with a single click.
          </p>
        </li>
        <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
          >
            <Icon icon="mdi:shield-key-outline" />
          </span>
          <h3 class="mb-2 text-2xl font-bold text-white">Permission manager</h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            Keys.band give you the possibility to manage all your permission
            (duration, scope, etc.) and block website that you don't trust.
          </p>
        </li>
        <li class="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
          >
            <Icon icon="ph:notification-bold" />
          </span>
          <h3 class="mb-2 text-2xl font-bold text-white">
            History & Notification
          </h3>
          <p class="max-w-xs mx-auto text-lg text-gray-500">
            You can follow all your activity and manage notification for each
            event by priority.
          </p>
        </li>
      </ul>
    </div>
    <div class="mb-16 border-b border-gray-800">
      <h2 class="mb-2 title sm:text-4xl md:text-5xl">Screenshot and preview</h2>
      <p class="mb-20 mx-auto intro sm:max-w-xl">
        Discover the extension with some screenshot and preview
      </p>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
          <img src="/img/frame-1.svg" alt="" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            View your activity
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Real-time monitoring
          </h3>
          <p class="text md:text-left">
            On this screenshot you can see the request count and current website
            information and permission state. You can also update website
            permission by clicking on update. If its limited time permission you
            should see a count-down timer
          </p>
        </div>
      </div>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
          <img class="rounded-sm" src="/img/frame-2.svg" alt="" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            Logging and notification
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Follow your activity
          </h3>
          <p class="text md:text-left">
            Here were are on the logging page, you can see all your activity.
            You can also manage notification alert for each event.
          </p>
        </div>
      </div>
      <div class="flex flex-col mb-8 sm:flex-row">
        <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
          <img class="rounded-sm" src="/img/frame-3.svg" alt="" />
        </div>
        <div
          class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
        >
          <p
            class="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
          >
            Security
          </p>
          <h3 class="title title-small sm:text-left md:text-4xl">
            Secure request access
          </h3>
          <p class="text md:text-left">
            All the request display a popup in another context inaccessible by
            website and only user can accept or deny the request.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
      <a class="text-indigo-700" href="#!">
        <img src="img/logo_white.png" width="48" alt="" class="mx-auto mb-4" />
      </a>
    </div>
    <div class="flex flex-col justify-between mb-8 text-center sm:flex-row">
      <p class="order-last mb-4 text-sm text-gray-500 sm:order-first">
        Built with <span class="text-red-500">❤️</span> by the
        <a href="https://toastr.space/" class="text-white">toastr.space</a> Team
      </p>
    </div>
  </div>
</div>
