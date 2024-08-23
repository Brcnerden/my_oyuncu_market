import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <>
      <div className="my-[40px] px-[20px]">
        <div className="text-center text-[28px] my-[20px] max-md:mx-4">
          GİRİŞ YAP
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mt-[20px]">
          <label className="text-[20px] ml-4">E-mail</label>
          <input
            type="email"
            className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]"
            placeholder="Lütfen email adresinizi buraya giriniz..."
          />
        </div>
        <div className="flex flex-col mt-[20px]">
          <label className="text-[20px] ml-4">Şifre</label>
          <input
            type="password"
            className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]"
            placeholder="Lütfen şifrenizi giriniz..."
          />
        </div>

        <div className="flex  mt-[20px] text-[12px] text-[#F0F0F0] max-md:flex-col ">
          <button className="bg-black rounded-lg   px-[6px] py-[12px] w-[220px] max-md:w-auto">
            <span>Giriş Yap</span>
          </button>
          <button type="submit" className="bg-black rounded-lg ml-4 px-[6px] py-[12px] w-[220px] max-md:mt-[20px] max-md:ml-0 max-md:w-auto ">
            <span>Üye OL</span>
          </button>
        </div>
        </form>

    

      </div>
    </>
  );
};
