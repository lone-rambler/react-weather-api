import React, { useState } from 'react'
import {
	FitBox,
	Title,
	Subtitle,
	LineSeparator,
	WeatherInfoList,
} from '../styles/Style.js'
import { useForm } from 'react-hook-form'
import apikey from '../apikey.js'

const Homepage = () => {
	const { register, handleSubmit } = useForm()
	const [weatherInfo, setWeatherInfo] = useState('')

	const onSubmit = async (data) => {
		let location = data.location
		const apiKey = apikey
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=eng`
		)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data)
			})
	}

	return (
		<FitBox>
			<Title>Skywatcher</Title>
			<Subtitle>Check your local weather and stay updated</Subtitle>
			<LineSeparator />
			<form onSubmit={handleSubmit(onSubmit)} height={'40%'}>
				<input
					placeholder='Szczecin, Poland'
					{...register('locaction', { required: true })}
				></input>
				<button type='submit' value='Submit'>
					Check
				</button>
			</form>
			<LineSeparator width='50%' />
			<WeatherInfoList></WeatherInfoList>
		</FitBox>
	)
}

export default Homepage
