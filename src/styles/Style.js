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

        background-color: ${colors.mint_cream};

        font-family: 'Gloria Hallelujah', cursive;

        padding: 0;
        margin: 0;
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
`

export const Subtitle = styled.div`
	color: ${colors.caput_mortuum};
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
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
`
