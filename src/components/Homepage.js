import React, { useState } from 'react'
import {
	FitBox,
	Title,
	Subtitle,
	LineSeparator,
	WeatherInfoList,
	StyledForm,
	StyledInput,
	StyledButton,
} from '../styles/Style.js'
import { useForm } from 'react-hook-form'
import apikey from '../apikey.js'

const Homepage = () => {
	const { register, handleSubmit } = useForm()
	const [weatherInfo, setWeatherInfo] = useState('')

	const betterIcon = (code) => {
		let icons = ['☀️', '⛅', '☁️', '☁️', '🌧️', '🌦️', '⛈️', '❄️', '🌫️']
		switch (code) {
			case '01d':
			case '01n':
				return icons[0]
			case '02d':
			case '02n':
				return icons[1]
			case '03d':
			case '03n':
				return icons[2]
		}
	}

	const onSubmit = async (data) => {
		let location = data.location
		const apiKey = apikey
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=eng`
		)
			.then((response) => {
				return response.ok ? response.json() : alert('An error occurred')
			})
			.then((data) => {
				console.log(data)
				let info = {
					location: location,
					temp: data.main.temp,
					feels_like: data.main.feels_like,
					description: data.weather[0].description,
					icon: data.weather[0].icon,
					date: new Date(data.dt * 1000).toLocaleDateString('en-EN'),
					pressure: data.main.pressure,
				}
				setWeatherInfo(info)
			})
	}

	return (
		<FitBox>
			<Title>⛅Skywatcher⛈️</Title>
			<Subtitle>Check your local weather and stay updated</Subtitle>
			<LineSeparator />
			<StyledForm onSubmit={handleSubmit(onSubmit)} height={'40%'}>
				<StyledInput
					defaultValue='Szczecin, Poland'
					{...register('location', { required: true })}
				></StyledInput>
				<StyledButton type='submit' value='Submit'>
					Check
				</StyledButton>
			</StyledForm>
			{weatherInfo && (
				<>
					<WeatherInfoList>
						<ul>
							<li>Location: {weatherInfo.location}</li>
							<li>Date: {weatherInfo.date}</li>
							<li>Temperature: {weatherInfo.temp}</li>
							<li>Feels like: {weatherInfo.feels_like}</li>
							<li>
								Description: {weatherInfo.description}{' '}
								{/* <img
									width='25'
									height='25'
									src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
								/> */}
							</li>
							<li>Pressure: {weatherInfo.pressure} Hpa</li>
						</ul>
					</WeatherInfoList>
				</>
			)}
			<LineSeparator />
		</FitBox>
	)
}

export default Homepage
