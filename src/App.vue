<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
	<Navigation />
	<router-view v-slot="{ Component }">
		<Transition name="fade" mode="out-in">
			<component :is="Component" />
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
