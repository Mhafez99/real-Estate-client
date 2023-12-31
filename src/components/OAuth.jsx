import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClicked = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result);

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        }
      );
      console.log(res);
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('Could not sign in with google', error);
    }
  };

  return (
    <button
      onClick={handleGoogleClicked}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continous With Google
    </button>
  );
};

export default OAuth;
