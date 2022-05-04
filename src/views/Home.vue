<script setup>
import { ref } from "vue";

// ICONS
import building from "../assets/images/img_4.png";
import note from "../assets/images/img_5.png";
import pen from "../assets/images/img_6.png";
import compass from "../assets/images/img_7.png";

// SECTION TWO IMGs
import firstImg from "../assets/images/img_8.jpg";
import secImg from "../assets/images/img_9.jpg";
import thridImg from "../assets/images/img_10.jpg";
import forthImg from "../assets/images/img_11.jpg";

const services = ref([
	{
		img: building,
		title: "مدلسازی اطلاعات ساختمان",
		description:
			"اغلب اوقات ماهیت بدنی و عملکردی هر پروژه ساختمانی باید به صورت دیجیتالی ارائه شود.",
	},
	{
		img: note,
		title: "خدمات ساختمانی",
		description:
			"مشتریان ما عاشق سرعت / کیفیتی هستند که در طی هر یک از مراحل اصلی ساخت و ساز نشان می دهیم!",
	},
	{
		img: pen,
		title: "خدمات قبل از ساخت",
		description:
			"ما قبل از شروع هرگونه ساخت و ساز ، وقت خود را در برنامه ریزی اولیه می گذاریم تا تمام مالی و کارایی را به تعادل برساند.",
	},
	{
		img: compass,
		title: "مدیریت ساخت و ساز",
		description:
			"مدیریت پروژه ساخت و ساز ضروری است. ما برای این کار بیشترین زمان و تکرار چرخه های زندگی را داریم.",
	},
]);

const plans = ref([
	{
		img: firstImg,
		title: "تجاری",
		description:
			"این احتمالاً متنوع ترین رده ساختمانی است که می توان در آن کار کرد. اما ما ...",
	},
	{
		img: secImg,
		title: "فرهنگی / مادام العمر",
		description:
			"کار بر روی یک ساختمان مهم اجتماعی ، مانند یک پارک ، شامل موارد ...",
	},
	{
		img: thridImg,
		title: "داده ها / فن آوری",
		description:
			"در حالی که ساخت یک ساختمان چهارم برای یک شرکت فناوری اطلاعات نسبتاً آسان است ...",
	},
	{
		img: forthImg,
		title: "آموزشی",
		description:
			"موسسات آموزشی می توانند بسیار خلاق تر از مدرسه معمولی شما باشند ...",
	},
]);
</script>

<template>
	<main>
		<!-- BANNER -->
		<div class="banner">
			<img src="../assets/images/img_1.jpg" />
			<div>
				<h1>
					عنوان خدمت <br md:hidden />
					اصلی
				</h1>
				<p>
					این سال ما از ساخت و سازهای پیچیده بیشتر از گذشته استفاده می کنیم.
				</p>
			</div>
		</div>

		<!-- FIRST SECTION -->
		<section class="section-one">
			<!-- TOP -->
			<div class="div">
				<img
					src="../assets/images/img_2.jpg"
					class="w-50% h-50%"
					md="w-50% h-50%"
				/>
				<div>
					<h1>خانه خود را بسازید</h1>
					<p>
						در راه کار خود چه چیزی را پشت سر می گذارید؟ معماری در همه جا در
						زندگی روزمره وجود دارد.
					</p>
				</div>
			</div>

			<!-- BOTTOM -->
			<div class="div">
				<img
					src="../assets/images/img_3.jpg"
					class="w-50% h-50% md:hidden xl:block"
				/>
				<div class="md:!pr-0 md:w50% md:!pl-15 xl:!pr-5 xl:!pl-0">
					<h1>معماری خیره کننده</h1>
					<p>
						به طور معمول ، معماران به شدت به جنبه هایی مانند فضا ، زمان ، پول و
						محدودیت های دیگر وابسته هستند.
					</p>
				</div>
				<img
					src="../assets/images/img_3.jpg"
					class="w-50% h-50% hidden xl:hidden"
					md="w-50% h-50% block"
				/>
			</div>
		</section>

		<!-- SECOND SECTION -->
		<section class="section-two">
			<div class="into-section">
				<!-- PART ONE -->
				<div class="part-one">
					<h1 text="white sm:3xl">خدمات ما</h1>

					<!--  -->
					<div v-for="service in services" :key="service" class="into-one">
						<img :src="service.img" alt="" w="14px sm:20px" />
						<div mr-3>
							<h6>
								{{ service.title }}
							</h6>
							<p>
								{{ service.description }}
							</p>
						</div>
					</div>
				</div>

				<!-- PART TWO -->
				<div class="part-two">
					<div v-for="plan in plans" :key="plan" class="into-two">
						<img :src="plan.img" alt="" />
						<div>
							<h3>
								{{ plan.title }}
							</h3>
							<p>
								{{ plan.description }}
							</p>
						</div>
					</div>
				</div>

				<h5>خدمات ما</h5>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.banner {
	@apply flex flex-col mt-4 items-center relative bg-#4362c1;

	img {
		@apply object-cover w-full h-40 sm:h-60 md:h-full;
	}

	div {
		@apply py-5 text-center md:pb-15 xl:pb-40 xl:pt-10;

		h1 {
			@apply pb-3 leading-normal sm:leading-15 md:pb-5 text-2xl text-white sm:text-4xl md:text-2.3rem;
		}

		p {
			@apply text-10px text-white px-3 w-320px sm:text-14px sm:w-468px md:text-16px md:w-768px;
		}
	}
}

.section-one {
	@apply flex flex-col items-center space-y-3 mb-5 sm:space-y-10 md:space-y-0 md:mt-10 xl:absolute xl:flex-row xl:px-25 xl:top-44rem 2xl:top-47rem;

	.div {
		@apply flex items-end p-4 w-320px sm:w-468px md:p-2 md:w-768px md:px-6rem xl:w-full xl:px-0;

		div {
			@apply mb-5 pr-4 sm:pr-7 md:pr-0 md:w50% md:pr-15 md:pb-10 xl:pb-5 xl:pr-5;

			h1 {
				@apply text-14px mb-3 tracking-tight sm:text-18px md:mb-7;
			}

			p {
				@apply text-10px tracking-tighter xl:pl-5 sm:text-14px;
			}
		}
	}
}

.section-two {
	@apply lg:flex lg:flex-col lg:justify-center lg:items-center xl:mt-55 2xl:mt-70;

	.into-section {
		@apply flex flex-col items-center relative md:flex-row sm:mt-10 md:mt-20 lg:w-768px xl:w-1380px 2xl:w-1550px;

		.part-one {
			@apply m-4 px-10 pt-5 pb-10 bg-#4362c1 sm:pr-20 sm:pl-15 sm:w-440px md:mr-0 xl:w-600px xl:pr-30 xl:py-21 2xl:w-768px 2xl:pr-50 2xl:pl-30;

			.into-one {
				@apply flex items-start mt-7 sm:mt-14;

				h6 {
					@apply text-white text-10px mb-5 sm:text-14px sm:mb-8;
				}

				p {
					@apply text-10px text-gray-1 tracking-tighter sm:text-13px;
				}
			}
		}

		.part-two {
			@apply m-4 space-y-7 sm:w-440px md:mr-2 md:space-y-12.2 xl:mr-30;

			.into-two {
				@apply flex items-center;

				img {
					@apply w-40% h-40% md:w-60% md:h-60%;
				}

				div {
					@apply px-4 sm:px-7 md:px-3 xl:px-5 xl:pl-10;

					h3 {
						@apply text-12px mb-3 tracking-tight sm:text-18px;
					}

					p {
						@apply text-10px tracking-tighter leading-5 sm:text-14px;
					}
				}
			}
		}

		h5 {
			@apply absolute left-21.7rem top-10 -rotate-90 md:block hidden xl:left-39.5rem 2xl:left-40rem;
		}
	}
}
</style>
