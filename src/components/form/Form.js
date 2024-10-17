
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail , setPhone} from '../../redux/test';


const Form = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.test.name);
    const email = useSelector((state) => state.test.email);
    const phone = useSelector((state) => state.test.phone);
    
    const handleSubmit = (e) => {
      e.preventDefault();
    //   preload
    try {
        window.electron.saveData({ name, email, phone });
        window.electron.onSaveDataReply((response) => {
          alert(response);
        });
    } catch (error) {
        console.log(error.message);
        
    }
  
  
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </label>
          </div>
          <div>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))} 
            />
          </label>
        </div>

          <button type="submit">Enrégistrer</button>
        </form>
      </div>
    );
  }
  

export default Form