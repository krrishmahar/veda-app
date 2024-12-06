'use client'

import { Resolver, SubmitHandler, useForm } from 'react-hook-form';

interface FormValue {
    name: string;
    email: string;
    subject: string;
    message?: string
}

//might have to apply resolver: https://react-hook-form.com/ts  code debt

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log(data)
        alert("Form submitted successfully!");
    };

    return (
        <>
            <div className='border shadow-2xl shadow-[#afaeae] flex justify-start border-black rounded-xl m-3 mb-14 px-1 py-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='m-3' htmlFor="Name">Name <samp className='text-[#FF0000]'>*</samp></label>
                    <input
                        className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3'
                        placeholder="Full Name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className='text-red-500 m-3 block'>{errors.name?.message}</span>}

                    <label className='m-3' htmlFor="Email">Email <samp className='text-[#FF0000]'>*</samp></label>
                    <input
                        className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3'
                        placeholder="mail@sitename.com"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className='text-red-500 m-3 block'>{errors.email?.message}</span>}

                    <label className='m-3' htmlFor="Subject">Subject <samp className='text-[#FF0000]'>*</samp></label>
                    <input
                        className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3'
                        placeholder="Your Subject Here"
                        {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && <span className='text-red-500 m-3 block'>{errors.subject?.message}</span>}

                    <label className='m-3' htmlFor="Message">Message <samp className='text-[#FF0000]'>*</samp></label>
                    <textarea
                        className="block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] pb-20 border-black border m-3"
                        placeholder="Your Message Here"
                        {...register('message')}
                    ></textarea>

                    <div className='flex justify-center'>
                        <button className='bg-black lexand p-2 m-1 rounded-md px-14 font-semibold flex justify-center text-white' type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
