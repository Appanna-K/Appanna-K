// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="row">
        <div id='row1' class="col-md-8 col-lg-8">
          <img src="https://i.pinimg.com/280x280_RS/71/a5/0d/71a50dfeb4ac8a9a55180616bfdea1dd.jpg" className='qdex' alt="codex-box" width="304" height="236"></img>
        </div>
        <div id='row2' class="col-sm-12 col-md-4 col-lg-4" >
          <div className='login-line'>
            <div className='image2'>
              <a href="https://codexbox.com/">   <img src="https://codexbox.keka.com/files/fde4265d-cf70-46eb-9d77-15cd9b430ea6/orglogo/608706d5293b431c9b6a49e54661869d.png" alt='logo' /></a>
            </div>
            <h3 className='header'> Forget your password?</h3>
            <div className='col-mb-3'>
              <input type="email" className='form-control' placeholder='Email' /><br />
            </div>
            <button className="btn btn-primary"> Login </button>
            <div className='bottom'>
              <a href='https://app.keka.com/Account/Login?returnurl=%2F'><img className="keka-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomUQLtWHwDZbgbuhh1SdeUqiiBKMFwhMfUQhQ-kwTF4t_X4YH_tl5qheZxAavZaDmeTY&usqp=CAU" alt="keka-logo" /></a>
              <a href='https://play.google.com/store/apps/developer?id=CODEX&hl=en_IN&gl=US'><img className="gglstr" src="https://app.keka.com/images/keka_android.png" alt="googlestore-logo" /></a>
              <a href='https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700058914955321_creativeid_480977427761_device_c&gclid=Cj0KCQjwm6KUBhC3ARIsACIwxBhXIIMTSwqCjsnvKPFnYOjd4AXUOxBl-XjpR_vJ6GD1wEKmidiiI7gaAtMUEALw_wcB&gclsrc=aw.ds'><img className="plystr" src="https://app.keka.com/images/keka_appstore.png" alt="playstore" /></a>


            </div>
            <footer> <small>@ 2022 Keka Inc </small></footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
