import { useForm } from 'react-hook-form'
import { useState } from 'react'

const FreeQuote = () => {

    const [ getResp,setResp ] = useState(false)

    const { 
        register,
        handleSubmit,
        formState: {errors,isValid,isSubmitting}
    } = useForm({
        mode: 'onChange',
        shouldUnregister: false,
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            frequency: '',
            squarefootage: '',
            description: '',
        }
    })


    const handleSubmitFunc = async ( data: {} ) => {
        const send = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const res = await send.json()
        setResp(res)
    }


    const SentResult = () => {
        return (
            <div className="freequote">
            <div className="messagesent">
                <i className="fa fa-check-circle-o"></i>
                <p>Thank you for your inquiry! We will get back to you soon</p>
            </div>
            </div>
        )
    }


    const FormFields = () => {
        return (
            <div className="freequote">
            <h1>Get a Free Quote!</h1>
            <form onSubmit={handleSubmit(handleSubmitFunc)}>
                <div>
                    <input type="text" {...register('fullname',{
                        required: 'Fullname field required!'
                    })}  placeholder=" " />
                    <label htmlFor="">Full Name*</label>
                    <span>{errors.fullname?.message}</span>
                </div>
                <div>
                <input type="email" 
                   {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                        },
                    })}

                    placeholder=" " />

                    <label htmlFor="">Emai*</label>
                    <span>{errors.email?.message}</span>
                </div>
                <div>
                    <input type="text" {...register('phone',{
                        required: 'Phone field required!',
                        minLength: {
                            value: 10,
                            message: 'Phone number must be 10 digits'
                        }
                    })} name="phone"  placeholder=" " />
                    <label htmlFor="">Best number to reach you*</label>
                    <span>{errors.phone?.message}</span>
                </div>
                <div>
                    <input type="text" {...register('frequency')} placeholder=" " />
                    <label htmlFor="">
                        Frequency of Cleaning
                    </label>
                    <span>{errors.frequency?.message}</span>
                </div>
                <div>
                    <input type="text" {...register('squarefootage')} placeholder=" " />
                    <label htmlFor="">
                        Square footage to be cleaned
                    </label>
                    <span>{errors.squarefootage?.message}</span>
                </div>
                <div>
                    <textarea {...register("description")}placeholder="Please tell us more about your cleaning needs so we can give you a more accurate estimate"></textarea>
                </div>

                <button disabled={!isValid} className="btn btn-primary mr-1"> {isSubmitting && <i className="fa fa-spinner fa-spin"></i>}
                SEND
                </button>

            </form>
        </div>
        )
    }


    if(getResp){
        return <SentResult />
    }
    return <FormFields /> 

    
}

export default FreeQuote