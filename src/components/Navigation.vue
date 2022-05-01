<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const navs = ref([
	{
		title: "صفحه نخست",
		to: "/",
	},
	{
		title: "درباره ما",
		to: "/about",
	},
	{
		title: "گالری",
		to: "/gallery",
	},
	{
		title: "ارتباط با ما",
		to: "/contact",
	},
]);
</script>

<template>
	<header
		class="flex flex-col items-center justify-center sm:mt-2 xl:px-20"
		md="flex-row justify-between p-5"
	>
		<h1 text="#4362c1 base sm:1.7rem" m="y-3 sm:y-4">عنوان سایت شما...</h1>

		<ul class="flex-row justify-center hidden sm:my-5 xl:flex">
			<li v-for="nav in navs" :key="nav" m="l-3 sm:l-5 last:l-0">
				<RouterLink
					:to="nav.to"
					class="px-1 py-1 tracking-tighter text-10px sm:px-2 sm:text-13px"
					exact-active-class="border-t-2 border-#4362c1 duration-300 text-#4362c1"
					>{{ nav.title }}</RouterLink
				>
			</li>
		</ul>
		<div>
			<ul class="flex flex-row justify-center sm:my-5 xl:hidden">
				<li v-for="nav in navs" :key="nav" m="l-3 sm:l-5 last:l-0">
					<RouterLink
						:to="nav.to"
						class="px-1 py-1 tracking-tighter text-10px sm:px-2 sm:text-13px"
						exact-active-class="border-t-2 border-#4362c1 duration-300 text-#4362c1"
						>{{ nav.title }}</RouterLink
					>
				</li>
			</ul>
			<form
				@click.prevent=""
				class="
					flex
					justify-between
					w90%
					md:w100%
					m-auto
					mt-4
					border border-gray-300
				"
				rounded="r-4px l-4px"
			>
				<input
					type="text"
					placeholder="جستجو در سایت..."
					class="w-full pr-2 border-none outline-none  rounded-r-4px placeholder-text-10px"
				/>
				<button
					text="white 10px"
					class="bg-#4362c1 py-1 px-5 rounded-l-4px sm:py-2"
				>
					جستجو
				</button>
			</form>
		</div>
	</header>
</template>
