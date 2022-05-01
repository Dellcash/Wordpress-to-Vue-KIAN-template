<script setup></script>

<template>
	<div>
		<!-- BANNER -->
		<div class="mt-4 bg-#4362c1 items-center relative" flex="~ col">
			<img
				src="../assets/images/img_1.jpg"
				alt=""
				class="object-cover w-full h-40 sm:h-60 md:h-full"
			/>
			<div class="py-5 text-center md:pb-15 xl:pb-40 xl:pt-10">
				<h1
					class="pb-3 leading-normal sm:leading-15 md:pb-5"
					text="2xl white sm:4xl md:2.3rem"
				>
					عنوان خدمت <br md:hidden />
					اصلی
				</h1>
				<p text="10px white sm:14px md:16px" px-3 sm:w-468px md:w-768px>
					این سال ما از ساخت و سازهای پیچیده بیشتر از گذشته استفاده می کنیم.
				</p>
			</div>
		</div>

		<!-- FIRST -->
		<div
			flex="~ col xl:row"
			items-center
			space="y-3 sm:y-10 md:y-0"
			md:mt-10
			xl:px-25
			xl:absolute
			xl:top-48rem
			class="2xl:top-53rem"
		>
			<div
				class="flex items-end p-4 md:p-2"
				sm:w-468px
				md:w-768px
				md:px-6rem
				xl:w-full
				xl:px-0
			>
				<img
					src="../assets/images/img_2.jpg"
					class="w-50% h-50%"
					md="w-50% h-50%"
				/>
				<div
					class="mb-5 pr-4 sm:pr-7 md:w50% md:pr-15 md:pb-10 xl:pb-5 xl:pr-5"
				>
					<h1 mb-3 tracking-tight sm:text-18px md:mb-7>خانه خود را بسازید</h1>
					<p text="10px sm:14px" tracking-tighter xl:pl-5>
						در راه کار خود چه چیزی را پشت سر می گذارید؟ معماری در همه جا در
						زندگی روزمره وجود دارد.
					</p>
				</div>
			</div>
			<div
				class="flex items-end p-4 md:p-2"
				sm:w-468px
				md:w-768px
				md:px-6rem
				xl:w-full
				xl:px-0
			>
				<img
					src="../assets/images/img_3.jpg"
					class="w-50% h-50%"
					md:hidden
					xl:block
				/>
				<div
					class="mb-5 pr-4 sm:pr-7 md:w50% md:pl-15 md:pb-10 xl:pb-5 xl:pl-5"
				>
					<h1 mb-3 tracking-tight sm:text-18px md:mb-7>
						ایجاد معماری خیره کننده
					</h1>
					<p text="10px sm:14px" tracking-tighter>
						به طور معمول ، معماران به شدت به جنبه هایی مانند فضا ، زمان ، پول و
						محدودیت های دیگر وابسته هستند.
					</p>
				</div>
				<img
					src="../assets/images/img_3.jpg"
					class="w-50% h-50% hidden"
					md="w-50% h-50% block"
					xl:hidden
				/>
			</div>
		</div>
	</div>
</template>
