<script setup lang="ts">
import { ref, onMounted } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import ArrowUp from "../icons/ArrowUp.vue";

const props = defineProps(["initialY"]);
const y = ref(props.initialY);

const scrollToSection = (id: string) => {
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  const target = document.querySelector(id);

  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const goTop = () => {
  scrollToSection("#hero");
};

onMounted(() => {
  const updateScroll = () => {
    y.value = window.scrollY;
  };
  window.addEventListener("scroll", updateScroll);
  window.addEventListener("resize", updateScroll);

  return () => {
    window.removeEventListener("scroll", updateScroll);
    window.removeEventListener("resize", updateScroll);
  };
});

const isOpen = ref(false);
</script>

<template>
  <header
    class="sticky z-50 top-0 duration-200 px-4 border-b border-solid"
    :class="{
      'py-4 dark:bg-[#040917] bg-slate-200 border-white/10 ': y > 0,
      'py-6 bg-transparent border-transparent': y <= 0,
    }"
  >
    <nav class="flex flex-row items-center justify-between max-w-[1400px] mx-auto">
      <div
        class="flex gap-4 items-center cursor-pointer text-primary hover:text-primary/80"
        @click="goTop"
      >
        <span class="inline-block">
          <img class="px-2 w-[5rem]" src="/lionware/lionwareok.svg" alt="" />
        </span>
        <h1 class="font-medium text-xl">
          <span class="font-bold poppins ml-1 hidden md:inline-block">Lionware Solutions</span>
        </h1>
      </div>

      <div class="flex gap-4 items-center ml-auto relative">
        <button
          aria-label="expand mobile menu button"
          @click="isOpen = !isOpen"
          class="md:hidden block p-2 absolute -top-4 right-0"
          :class="{
            open: isOpen,
            'focus:outline-none': true,
          }"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <nav class="items-center flex-row hidden md:flex">
        <div class="flex pr-3">
          <div class="sm:flex items-center gap-4 text-center hidden">
            <a
              href="#hero"
              @click.prevent="scrollToSection('#hero')"
              class="hover:text-primary"
            >
              <p>Home</p>
            </a>
            <a
              href="#about"
              @click.prevent="scrollToSection('#about')"
              class="hover:text-primary"
            >
              <p>About us</p>
            </a>
            <a
              href="#services"
              @click.prevent="scrollToSection('#services')"
              class="hover:text-primary"
            >
              <p>Services</p>
            </a>
            <a
              href="#contact"
              @click.prevent="scrollToSection('#contact')"
              class="hover:text-primary"
            >
              <p>Contact</p>
            </a>
          </div>
        </div>
      </nav>
      <div class="ml-4">
        <ThemeToggle />
      </div>
    </nav>

    <nav
      v-show="isOpen"
      @click="isOpen = false"
      class="md:hidden p-4 mt-2 flex flex-col gap-2 text-center font-bold"
      :class="{
        'py-4 dark:bg-slate-950 bg-slate-200 border-primary  dark:border-green-950 ': y > 0,
        'py-6 bg-transparent border-transparent': y <= 0,
      }"
    >
      <a
        href="#hero"
        @click.prevent="scrollToSection('#hero')"
        aria-label="Projects page link"
        class="border rounded p-2 border-primary animate-link"
      >
        Home
      </a>
      <a
        href="#about"
        @click.prevent="scrollToSection('#about')"
        aria-label="About me page link"
        class="border rounded p-2 border-primary animate-link"
      >
        About us
      </a>
      <a
        href="#contact"
        @click.prevent="scrollToSection('#contact')"
        aria-label="Contact page link"
        class="border rounded p-2 border-primary animate-link"
      >
        Contact
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        aria-label="Contact page link"
        class="rounded p-2 bg-primary animate-link text-black"
      >
        Get in touch
      </a>
    </nav>

    <div class="fixed bottom-0 right-0 p-10 z-[10]">
      <button
        aria-label="go to top button"
        @click="goTop"
        class="rounded-full bg-transparent text-primary px-3 sm:px-4 hover:scale-[1.3] transition-all cursor-pointer aspect-square grid place-items-center"
        :class="{ hidden: y < 20 }"
      >
        <ArrowUp />
      </button>
    </div>
  </header>
</template>
