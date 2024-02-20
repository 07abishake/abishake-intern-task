import React, { useState } from 'react';



const Form = (props) => {
    const [name, setName] = useState('initialvalue');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [agree, setAgree] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        if (!agree) {
            alert("Please agree to the terms and conditions.");
        } else {
            const data = { 'name': name, 'email': email, 'phone': phone, 'age': age, 'address': address };
            console.log(data);
            props.addData(data);
            setName('');
            setEmail('');
            setPhone('');
            setAge('');
            setAddress('');
        }
    };

    return (
        <div className='form'>
            <h1>Registration form</h1>
            <form className='form-data' onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /><br />
                <input type="text" name="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} /><br />
                <input type="text" name="phone" placeholder="Phone" value={phone} onChange={event => setPhone(event.target.value)} /><br />
                <input type="text" name="age" placeholder="Age" value={age} onChange={event => setAge(event.target.value)} /><br />
                <input type="text" name="address" placeholder="Address" value={address} onChange={event => setAddress(event.target.value)} /><br />
                <div>
                    <input type="checkbox" id="agree" name="agree" onChange={() => { setAgree(!agree); }} />
                    <label htmlFor="agree">Do you agree to the conditions?</label>
                </div><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Form;
