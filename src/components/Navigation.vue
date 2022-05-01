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
		class="flex flex-col items-center justify-center"
		md="flex-row justify-between p-5"
	>
		<h1 text="#4362c1 base md:xl" my-2>عنوان سایت شما...</h1>
		<div>
			<ul flex="~ row" justify-center>
				<li v-for="nav in navs" :key="nav" ml-5 last:ml-0>
					<RouterLink
						:to="nav.to"
						class="px-1 py-1 tracking-tighter text-10px"
						exact-active-class="border-t-2 border-#4362c1 duration-300"
						>{{ nav.title }}</RouterLink
					>
				</li>
			</ul>
			<form
				@click.prevent=""
				class="flex justify-between w-full m-auto mt-4 border border-gray-300"
				rounded="r-4px l-4px"
			>
				<input
					type="text"
					placeholder="جستجو در سایت..."
					class="w-full pr-2 border-none outline-none  rounded-r-4px placeholder-text-9px"
				/>
				<button text="white 10px" class="bg-#4362c1 py-1 px-5 rounded-l-4px">
					جستجو
				</button>
			</form>
		</div>
	</header>
</template>
