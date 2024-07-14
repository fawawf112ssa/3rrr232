import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'AberMono';
		src: local('AberMono'),
    	url('/source/fonts/AberMono/AberMonoBold.ttf');
	}

	* {
		font-variant-numeric: lining-nums proportional-nums;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		border: 0;

		::-webkit-scrollbar {
    	width: 0px;
    	height: 0px;
  	}
	}
	*,
	*::before,
	*::after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	section,
	aside {
		display: block;
	}
	html {
		font-size: 14px;
		
		@media (min-width: 2000px) {
			font-size: 15.5px;
		}
		@media (min-width: 2200px) {
			font-size: 15.5px;
		}
		@media (min-width: 2400px) {
			font-size: 17.5px;
		}
		@media (min-width: 2600px) {
			font-size: 19px;
		}
		@media (min-width: 2800px) {
			font-size: 20.5px;
		}
		@media (min-width: 3000px) {
			font-size: 22px;
		}

		@media (max-width: 1600px) {
			font-size: 13px;
		}

		@media (max-width: 1400px) {
			font-size: 12px;
		}

		@media (max-width: 1200px) {
			font-size: 11px;
		}

		@media (max-width: 1023px) {
			font-size: 14px;
		}
	}
	html,
	body {
		height: 100%;
		width: 100%;
		font-family: 'Raleway', sans-serif;
		line-height: normal;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		background: ${({ theme }) => theme.colors.bgPrimary};
		color: ${({ theme }) => theme.colors.textPrimary};
	}
	body {
		overflow: hidden;

		@media (max-width: 1023px) {
			overflow: visible;
  	}
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
	}
	#root{
		/* height: 100vh; */
	
	}

	/* !Rechart */
	.recharts-sector {
		stroke: none;
	}
	.recharts-tooltip-cursor {
		fill: ${({ theme }) => theme.colors.bgTertiary};
		opacity: 0.5;
	}
	.recharts-cartesian-grid-vertical {
		display: none;
	}
	.recharts-cartesian-grid-horizontal {
		opacity: 0.5;

		line {
			stroke: #7171C0;
		}
	}
	.recharts-line-dot {
		display: none;
	}
	.recharts-cartesian-axis-line {
		stroke: none;

		
	}
	.recharts-cartesian-axis-tick-line {
		stroke: none;
	}

	.recharts-text {
		font-size: 12px;
	}
	
	.xAxis {
		display: none;
		& .recharts-cartesian-axis-tick-value {
			display: none;
		}
	}
`;
