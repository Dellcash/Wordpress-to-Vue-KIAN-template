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
	<header>
		<h1>عنوان سایت شما...</h1>

		<ul class="xl-navs">
			<li v-for="nav in navs" :key="nav">
				<RouterLink
					:to="nav.to"
					class="sm:px-2 text-13px"
					exact-active-class="border-t-2 border-#4362c1 duration-300 text-#4362c1 pt-2"
					>{{ nav.title }}</RouterLink
				>
			</li>
		</ul>

		<!--  -->
		<div>
			<ul class="md-navs">
				<li v-for="nav in navs" :key="nav">
					<RouterLink
						:to="nav.to"
						class="md-router"
						exact-active-class="border-t-2 border-#4362c1 duration-300 text-#4362c1"
						>{{ nav.title }}</RouterLink
					>
				</li>
			</ul>
			<form @click.prevent="">
				<input type="text" placeholder="جستجو در سایت..." class="" />
				<button>جستجو</button>
			</form>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	@apply flex flex-col items-center justify-center sm:mt-2 md:flex-row md:justify-between md:p-5 xl:px-20 xl:items-start;

	h1 {
		@apply text-base text-#4362c1 sm:text-1.7rem m-y-3 sm:m-y-4;
	}

	.xl-navs {
		@apply flex-row justify-center hidden sm:my-5 xl:flex;

		li {
			@apply m-l-10 last:m-l-0 first:m-r-15;
		}
	}

	.md-navs {
		@apply flex flex-row justify-center sm:my-5 xl:hidden;

		li {
			@apply m-l-3 sm:m-l-5 last:m-l-0;
		}

		.md-router {
			@apply px-1 py-1 tracking-tighter text-10px sm:px-2 sm:text-13px;
		}
	}

	form {
		@apply flex justify-between w90% md:w100% m-auto mt-4 border border-gray-300 rounded-r-4px rounded-l-4px;

		input {
			@apply w-full pr-2 border-none outline-none rounded-r-4px placeholder-text-10px xl:w-15rem;
		}

		button {
			@apply text-white text-10px bg-#4362c1 py-1 px-5 rounded-l-4px sm:py-2 lg:px-7;
		}
	}
}
</style>
