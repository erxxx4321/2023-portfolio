<template>
	<div class="my-3 mx-3">
		<div
			class="card smcard"
			:class="{
				'pcard-dark': nightMode,
				pcard: !nightMode,
				'bg-dark3': nightMode,
			}"
		>
			<div>
				<iframe
					height="200"
					:src="video.iframe"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					class="w-100"
				></iframe>
			</div>
			<div class="card-body pborder-top">
				<h5 class="title2">{{ video.name }}</h5>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Video',
		props: {
			video: {
				type: Object,
			},
			nightMode: {
				type: Boolean,
			},
		},
	};
</script>

<style>
	div.img-div {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.pborder-top {
		border-top: 1px solid rgb(193, 193, 193);
	}

	.pcard {
		background-color: rgb(255, 255, 255);
		border-radius: 7px;
		border: none;
		box-shadow: 1px 1px 12px rgb(233, 233, 233);
		transition: all 0.5s;
		height: 460px;
	}

	.pcard:hover {
		transition: all 0.5s;
		/* cursor: pointer; */
		box-shadow: 1px 1px 15px rgb(216, 216, 216);
	}

	.pcard-dark {
		border-radius: 7px;
		border: none;
		background-color: #30363a !important;
		/* box-shadow: 1px 1px 12px rgb(53, 53, 53); */
		transition: all 0.5s;
		height: 460px;
	}

	.pcard-dark:hover {
		transition: all 0.5s;
		/* cursor: pointer; */
		box-shadow: 1px 1px 12px rgb(53, 53, 53);
	}

	.pcard-body {
		border-top: 1px solid rgb(220, 220, 220);
		z-index: -1;
		background-color: rgb(253, 254, 255);
	}

	.title {
		font-size: 30px;
		font-weight: 500;
	}
	.title1 {
		font-size: 24px;
		font-weight: 400;
	}

	.title2 {
		font-size: 20px;
		font-weight: 400;
	}
</style>
