<script setup>
import { RouterView, useRoute } from "vue-router";
import Navigation from "./components/Navigation.vue";

const route = useRoute();
</script>

<template>
	<Navigation />
	<router-view v-slot="{ Component, route }">
		<Transition name="fade" mode="out-in">
			<div :key="route.name">
				<component :is="Component" />
			</div>
		</Transition>
	</router-view>
</template>

<style>
@import "./assets/main.css";

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
