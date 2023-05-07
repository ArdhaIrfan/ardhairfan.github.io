import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function Form() {
	const [isEnabled, setState] = useState(true)
	const [isChecked, setCheck] = useState(false)

	const {register, formState: {errors}, handleSubmit,} = useForm()
	const onSubmit = data => console.log(data)

	const handleChange = () => {
		if (isChecked === false) {
			setState(false)
			setCheck(true)
		} else {
			setState(true)
			setCheck(false)
		}
	}

	return (
		<section>
			<div className="register">
				<div className="col-1">
				</div>
				<div className="col-2">
				<h2><span>Nicebook</span> Sign Up</h2>
					<form id="form" className="form" onSubmit={(e) => {handleSubmit(onSubmit); alert("The form has been sent successfully!")}}>
						<div>
							<label>Name</label>
							<input type="text" placeholder='Name' {...register("name",{required: true})} />
							<div className='error'>
								{errors.name?.type === "required" && "Name is required"}
							</div>
						</div>
						<div>
							<label>Phone Number</label>
							<input type="number" placeholder='Phone Number' {...register("number", {
								required: true,
								minLength: 6,
								maxLength: 13,
							})} />
							<div className='error'>
								{errors.number?.type === "required" && "Phone Number is required"}
								{errors.number?.type === "minLength" && "Entered number is less than 6 digits"}
								{errors.number?.type === "maxLength" && "Entered number is more than 12 digits"}
							</div>
						</div>
						<div>
							<label>Age</label>
							<input type="number" placeholder='Age' {...register("age",{
								required: true,
								min: 13,
								max: 120,
								})} />
								<div className='error'>
								{errors.age?.type === "required" && "Age is required"}
								{errors.age?.type === "min" && "Age should not be less than 13 years old"}
								{errors.age?.type === "max" && "Age should not exceed 120 years old"}
							</div>
						</div>
						<div>
							<label>Email</label>
							<input type="email" placeholder='Email' {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})} />
							<div className='error'>
								{errors.email?.type === "required" && "Email is required"}
								{errors.email?.type === "pattern" && "Wrong email format"}
							</div>
						</div>
						<div>
							<label>Password</label>
							<input type="password" placeholder='Enter Password' {...register("password",{
								required: true,
								minLength: 5,
								maxLength: 20,
								})} />
							<div className='error'>
								{errors.password?.type === "required" && "Password is required"}
								{errors.password?.type === "minLength" && "Password is less than 6 characters"}
								{errors.password?.type === "maxLength" && "Password is more than 20 characters"}
							</div>
						</div>
						<div className="checkbox">
							<div><input type="checkbox" onChange={handleChange} checked={isChecked}/></div>
							<p>I agree to the terms and conditions.</p>
						</div>

						<button disabled={isEnabled}>Register</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Form