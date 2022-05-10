<script setup>
import { reactive, ref } from "vue";

// ICONS
import building from "../assets/images/img_4.png";
import note from "../assets/images/img_5.png";
import pen from "../assets/images/img_6.png";
import compass from "../assets/images/img_7.png";
import Loading from "../components/Icons/Loading.vue";

// SECTION TWO IMGs
import firstImg from "../assets/images/img_8.jpg";
import secImg from "../assets/images/img_9.jpg";
import thridImg from "../assets/images/img_10.jpg";
import forthImg from "../assets/images/img_11.jpg";
import Telegram from "../components/Icons/Telegram.vue";
import Instagram from "../components/Icons/Instagram.vue";
import Whatsapp from "../components/Icons/Whatsapp.vue";

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

const infos = ref([
	"آدرس دفتر شما... <br /> نام شهر، نام منطقه، نام خیابان، پلاک شما",
	"شماره تلفن خودتان را وارد کنید...",
	"پشتیبانی: info@yourdomain.ir",
	"فروش: sales@yourdomain.ir",
]);

const listOfServices = ref([
	"طراحی داخلی",
	"معماری",
	"طراحی اتاق خاب",
	"فضای داخل حمام",
	"اتاق نشیمن",
	"فضای داخل خانه",
]);

const form = reactive({
	name: "",
	nameErr: "",
	email: "",
	emailErr: "",
	title: "",
	content: "",
	contentErr: "",
});
const loading = ref(false);
const validation = () => {
	if (form.name === "") {
		form.nameErr = "لطفا نام خود را وارد کنید!";
	} else {
		form.nameErr = "";
	}
	if (form.email === "") {
		form.emailErr = "لطفا پست الکترونیک خود را وارد کنید!";
	} else {
		form.emailErr = "";
	}
	if (form.content === "") {
		form.contentErr = "لطفا پیغام بگذارید!";
	} else {
		form.contentErr = "";
	}

	if (form.name !== "" && form.email !== "" && form.content !== "") {
		setTimeout(() => {
			form.name = "";
			form.email = "";
			form.title = "";
			form.content = "";
		}, 2000);
		loading.value = true;
	}

	// SIMULATE API REQUEST
	setTimeout(() => {
		loading.value = false;
	}, 2000);
};

const follows = ref(["تلگرام", "واتس اپ", "اینستاگرام", "فیسبوک"]);
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

		<!-- THIRD SECTION -->
		<section class="section-three">
			<div>
				<h1>پروژه‌های ما</h1>

				<!-- TOP -->
				<div>
					<img src="../assets/images/img_12.jpg" alt="" w-full h-full />

					<!--  -->
					<div class="!m-0">
						<h3>عنوان پروژه‌ ما</h3>
						<p>
							توضیحاتی درباره‌ی پروژه شما. شما می‌توانید با دابل کلیک روی این
							قسمت متن مورد نظر خودتان را وارد کنید...
						</p>
					</div>
				</div>

				<!-- MIDD -->
				<div>
					<img
						src="../assets/images/img_13.jpg"
						alt=""
						class="w-full h-full xl:hidden"
					/>

					<!--  -->
					<div class="!m-0 !xl:pr-0">
						<h3>عنوان پروژه‌ ما</h3>
						<p>
							توضیحاتی درباره‌ی پروژه شما. شما می‌توانید با دابل کلیک روی این
							قسمت متن مورد نظر خودتان را وارد کنید...
						</p>
					</div>

					<img
						src="../assets/images/img_13.jpg"
						alt=""
						class="hidden w-full h-full xl:block"
					/>
				</div>

				<!-- BOTTOM -->
				<div>
					<img src="../assets/images/img_14.jpg" alt="" w-full h-full />

					<!--  -->
					<div class="!m-0">
						<h3>عنوان پروژه‌ ما</h3>
						<p>
							توضیحاتی درباره‌ی پروژه شما. شما می‌توانید با دابل کلیک روی این
							قسمت متن مورد نظر خودتان را وارد کنید...
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="bg-[rgb(68,68,68)]">
		<!-- TOP -->
		<section class="top">
			<!-- FIRST -->
			<div class="first">
				<h1>با ما در ارتباط باشید</h1>
				<p>
					<strong text-gray-300
						>از مشاوره رایگان با کارشناسان ما استفاده کنید!</strong
					>
				</p>
				<div>
					<Instagram xl:w-5rem />
					<Telegram xl:w-5rem />
					<Whatsapp xl:w-5rem />
				</div>
			</div>

			<!-- SECOND -->
			<div class="second">
				<div></div>
				<img src="../assets/images/img_16.png" alt="" />
			</div>
		</section>

		<div sm="flex flex-col items-center justify-center">
			<!-- BOTTOM -->
			<section class="bottom">
				<!-- FIRST -->
				<div class="info">
					<h4>تماس با ما</h4>
					<h6 v-for="info in infos" :key="info" v-html="info"></h6>
				</div>

				<!-- SECOND -->
				<div class="info">
					<h4>لیست خدمات</h4>
					<h6 v-for="list in listOfServices" :key="list" v-html="list"></h6>
				</div>

				<!-- THIRD -->
				<div class="third">
					<form @submit.prevent="validation">
						<!-- NAME -->
						<div>
							<input v-model="form.name" type="text" placeholder="نام *" />
							<p>{{ form.nameErr }}</p>
						</div>

						<!-- EMAIL -->
						<div>
							<input
								v-model="form.email"
								type="email"
								placeholder="پست الکترونیک *"
							/>
							<p>{{ form.emailErr }}</p>
						</div>

						<!-- TITLE -->
						<div>
							<input v-model="form.title" type="text" placeholder="موضوع" />
						</div>

						<!-- CONTENT -->
						<div>
							<textarea
								v-model="form.content"
								id=""
								cols="30"
								rows="6"
								placeholder="پیغام *"
							></textarea>
							<p>{{ form.contentErr }}</p>
						</div>

						<!-- SUBMIT -->
						<button>
							<Loading v-if="loading" animate-spin mt-5px />
							<span v-else>ارسال</span>
						</button>
					</form>
				</div>

				<!-- FOURTH -->
				<div class="info">
					<h4>مارا دنبال کنید</h4>
					<h6 v-for="follow in follows" :key="follow">
						{{ follow }}
					</h6>
				</div>
			</section>

			<!-- COPYRIGHT -->
			<section class="bg-[rgb(59,59,59)] sm:w-full">
				<div text-center py-3>
					<p text-10px text-gray-200 xl:text-12px>
						تمامی حقوق این سایت متلق به <em text-gray-200>[ دلکش ]</em> می‌باشد.
					</p>
				</div>
			</section>
		</div>
	</footer>
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
		@apply flex flex-col items-center relative md:flex-row sm:mt-10 md:mt-20 lg:w-768px xl:w-1280px 2xl:w-1550px;

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

.section-three {
	@apply flex items-center justify-center mt-10 xl:mt-20;

	div {
		@apply sm:w-460px md:w-680px xl:w-1028px;

		h1 {
			@apply text-center lg:text-32px sm:mb-10;
		}

		div {
			@apply m-5 sm:m-0 sm:mb-10 xl:flex xl:items-end lg:m-0 lg:mb-12 xl:mb-25;

			div {
				@apply px-3 md:flex md:justify-between md:mt-2 lg:pr-0 xl:flex-col xl:items-start xl:pb-10 xl:pr-5;

				h3 {
					@apply text-16px mb-2 tracking-tight sm:text-22px xl:text-24px;
				}

				p {
					@apply text-10px tracking-tighter leading-5 sm:text-14px md:w-sm;
				}
			}
		}
	}
}

footer {
	.top {
		@apply relative bg-#4362c1 xl:mb-20 xl:h-32rem;

		.first {
			@apply absolute space-y-3 p-5 z-1 sm:p-10 lg:right-8rem lg:pt-20 xl:right-3rem xl:top-5rem xl:space-y-7;

			h1 {
				@apply text-3xl text-white -tracking-2px sm:text-5xl md:mr-3rem lg:-tracking-1px xl:mr-0;
			}

			p {
				@apply text-12px -tracking-1px sm:text-20px md:mr-3rem xl:mr-0;
			}

			div {
				@apply inline-block p-3 pb-1 bg-white sm:p-5 xl:py-1;
			}
		}

		.second {
			@apply pt-5rem sm:pt-6rem lg:pt-8rem xl:pt-0;

			div {
				@apply absolute bg-gray-400 h-50vw w-80% z-0 left-0 top-10rem 
					sm:h-70vw sm:top-14rem md:h-50vw md:w-85% lg:left-30 lg:w-65% lg:h-40vw lg:top-16rem xl:w-35% xl:h-40vw xl:top-3rem;
			}

			img {
				@apply z-10 w-full relative h-full
					md:w-85% md:h-85% md:right-7rem lg:w-65% lg:h-65% lg:right-15rem xl:w-50% xl:h-50% xl:right-33rem;
			}
		}
	}

	.bottom {
		@apply p-10 space-y-15 sm:w-320px md:px-20 md:w-768px md:space-y-0 md:grid md:grid-cols-2 md:gap-15 xl:grid-cols-4 xl:w-1280px xl:mt-7rem;

		.info {
			@apply space-y-5 md:space-y-7;

			h4 {
				@apply text-gray-200 md:text-xl;
			}

			h6 {
				@apply text-gray-200 font-thin md:text-sm;
			}
		}
		.third {
			form {
				@apply bg-transparent space-y-2;

				input {
					@apply w-full bg-transparent border-gray-200 text-gray-200 placeholder-gray-400 text-xs p-2 mb-1;
				}

				p {
					@apply text-10px text-red;
				}

				textarea {
					@apply w-full bg-transparent border-gray-200 text-gray-200 placeholder-gray-400 text-xs p-2;
				}

				button {
					@apply text-gray-800 bg-gray-200 text-xs py-1 px-3 duration-250 hover:opacity-80 focus:outline-none;
				}
			}
		}
	}
}
</style>
