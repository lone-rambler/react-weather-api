import styled, { createGlobalStyle } from 'styled-components'

// https://coolors.co/79b791-abd1b5-edf4ed-51291e-301014
const colors = {
	dark_sea_green: '#79B791',
	turquoise_green: '#ABD1B5',
	mint_cream: '#EDF4ED',
	caput_mortuum: '#51291E',
	dark_sienna: '#301014',
}

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;

        font-family: 'Gloria Hallelujah', cursive;

        padding: 0;
        margin: 0;
    }

    html,body{
        background-color: ${colors.mint_cream};
    }

	
ul {

list-style-type: none;

}


ul li:before {

content: '';

display: inline-block;

height: 10px;

width: 10px;

 background-size: 10px;

background-image: url("https://www.svgrepo.com/show/20139/checkmark-hand-drawn-outline.svg");

background-repeat: no-repeat;

margin-right: 5px;

}
`

export const FitBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: flex-start;
	flex-direction: ${(props) => {
		return props.flexDirection ? props.flexDirection : 'column'
	}};
	align-items: center;
`

export const Title = styled.div`
	color: ${colors.caput_mortuum};
	font-size: 3rem;
	font-weight: bold;
	text-align: center;

	user-select: none;
`

export const Subtitle = styled.div`
	color: ${colors.caput_mortuum};
	font-size: 2rem;
	font-weight: bold;
	text-align: center;

	user-select: none;
	margin-bottom: 1rem;
`

export const LineSeparator = styled.div`
	width: ${(props) => {
		return props.width ? props.width : '60%'
	}};

	border-top: 0.25rem solid ${colors.caput_mortuum};
	border-radius: 25%;
`

export const WeatherInfoList = styled.div`
	width: 60%;
	height: fit-content;

	display: flex;
	justify-content: flex-start;
	flex-direction: ${(props) => {
		return props.flexDirection ? props.flexDirection : 'column'
	}};
	align-items: center;

	margin: 0 0 1rem 0;
`

export const StyledForm = styled.form`
	width: 50%;

	display: flex;
	justify-content: center;
	flex-direction: row;

	margin: 1rem;
`

export const StyledInput = styled.input`
	width: 50%;

	background-color: ${colors.turquoise_green};

	border: none;
	border-radius: 0.75rem;
	outline: none;

	color: ${colors.dark_sienna};
	font-size: 1rem;
	font-weight: bold;
	text-align: center;

	margin: 0 1rem;

	transition: all 200ms ease-in;
	-webkit-transition: all 200ms ease-in;
	-ms-transition: all 200ms ease-in;

	&:hover,
	&:focus {
		transform: scale(1.05);
		background-color: ${colors.dark_sea_green};
	}

	&:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 10rem ${colors.dark_sea_green} inset; /* Change the color to your own background color */
		-webkit-text-fill-color: ${colors.dark_sienna};
	}
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 10rem ${colors.dark_sea_green} inset; /*your box-shadow*/
		-webkit-text-fill-color: ${colors.dark_sienna};
	}
`

export const StyledButton = styled.button`
	width: 25%;

	background-color: ${colors.turquoise_green};

	border: none;
	border-radius: 0.75rem;
	outline: none;

	color: ${colors.dark_sienna};
	font-size: 1rem;
	font-weight: bold;
	text-align: center;

	user-select: none;
	cursor: pointer;

	transition: all 200ms ease-in;

	&:hover {
		transform: scale(1.05);
		background-color: ${colors.dark_sea_green};
	}
`
