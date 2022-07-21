import { useForm } from 'react-hook-form'

const FreeQuote = () => {

    const { 
        register,
        handleSubmit,
        formState: {errors,isValid}
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
 
    return (
        <div className="freequote">
            <h1>Get a Free Quote!</h1>
            <form onSubmit={handleSubmit((data) => data)}>
                <div>
                    <input type="text" {...register('fullname',{
                        required: 'Fullname field required!'
                    })}  placeholder=" " />
                    <label htmlFor="">Full Name*</label>
                    <span>{errors.fullname?.message}</span>
                </div>
                <div>
                    <input type="email" {...register('email',{
                        required: 'Email field required!'
                    })} placeholder=" " />
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
            <input type="submit" disabled={!isValid} value="SEND" />
            </form>
        </div>
    )
    
}

export default FreeQuote