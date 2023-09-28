import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
    <form>
<h1><center>REGISTRATION FORM</center></h1>
<label> photo :</label><br/>&nbsp;&nbsp;
<input type="image" name="img" alt="submit" width="100" height="100" src={require(`./Images/th.jpeg`)}/><br/>
<label> First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
<input type="text" name="fname"/>&nbsp;&nbsp;<br/><br/>
<label> Lastname &nbsp;&nbsp;:</label>
<input type="text" name="fname"/><br/><br/>
<label>Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
<input type="radio" id="female1" value="female"/>
<label for="female1">Female</label>
<input type="radio" id="male1" value="male"/>
<label for="male1">Male</label><br/><br/>
<label>MobileNumber :</label>
<input type="text" name="mno"/><br/><br/>
<label for="dob">Date of birth&nbsp;&nbsp;&nbsp;&nbsp; :</label>
<input type="date" id="dob" value="do"/><br/><br/>
<label> user email id&nbsp;&nbsp;&nbsp;&nbsp;:</label>
<input type="email" name="mail"/><br/><br/>
<label>Qualification &nbsp;&nbsp;&nbsp;:</label>
<select>
<option value="sslc" >SSLC</option>
<option value="plustwo">PLUS TWO</option>
<option value="DREGREE">DEGREE</option>
</select><br/><br/>
<fieldset><br/>
<legend >personal Details</legend>
<label>Father Name :&nbsp;&nbsp;</label>
<input type="text " name="fname"/>&nbsp;&nbsp;<br/><br/>
<label>Mother Name :&nbsp;&nbsp;</label>
<input type="text " name="mname"/><br/><br/>
<label>Address&nbsp;&nbsp;:</label>&nbsp;&nbsp;
<textarea rows="2" cols="20">
</textarea>&nbsp;&nbsp;<br/><br/>
<label >nearest location :&nbsp;&nbsp;</label>
<input type="text" name="city"/><br/><br/>
<label> Pincode :&nbsp;&nbsp; </label>
<input type="text" name="pin"/><br/><br/>
parent number:
<input type="text" name="no"/>
</fieldset>
Languages you know :
<label>English</label>
<input type="checkbox" value="english"/>
<label>Malayalam</label>
<input type="checkbox" value="Malayalam"/>
<label>Hindi</label>
<input type="checkbox" value="hindi"/>
<br/><br/>
select course &nbsp;&nbsp;:
<select>
<option value="Flutter">Flutter</option>
<option value="mern">Mern stack</option>
<option value="python">pythonDjango</option>
<option value="ui/ux">ui/ux design</option>
<option value="data">data analysis</option>
</select>
<center>

<input type="reset" value="clear"/>
<button  onClick={()=>navigate('Data')}>submit</button><br/><br/>
</center>
</form>
    </div>
  )
}

export default Home